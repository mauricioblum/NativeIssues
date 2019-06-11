import React, { Component } from 'react';

import {
  View, Text, TextInput, TouchableOpacity, FlatList, ActivityIndicator,
} from 'react-native';
import Header from '~/components/Header';

import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';

import api from '~/services/api';

import RepositoryItem from './RepositoryItem';

import styles from './styles';

export default class Home extends Component {
  state = {
    repository: '',
    repositories: [],
    loading: false,
    refreshing: false,
    error: null,
  };

  async componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true, loading: true });
    const repos = await AsyncStorage.getItem('@NativeIssues:repositories');
    if (repos !== null) {
      this.setState({ repositories: JSON.parse(repos) });
    }

    this.setState({ refreshing: false, loading: false });
  };

  handleAddRepository = async () => {
    this.setState({ refreshing: true, loading: true });
    const { repository, repositories } = this.state;
    try {
      const { data } = await api.get(`/repos/${repository}`);
      const isDuplicated = repositories.find(repo => repo.id === data.id);
      if (isDuplicated) {
        this.setState({ error: 'Repositorio duplicado', refreshing: false, loading: false });
      } else {
        const repo = [...repositories, data];
        await AsyncStorage.setItem('@NativeIssues:repositories', JSON.stringify(repo));

        this.setState({
          loading: false,
          refreshing: false,
          repositories: repo,
          repository: '',
          error: null,
        });
      }
    } catch (err) {
      this.setState({ error: 'Repositorio nao encontrado', refreshing: false, loading: false });
    }
  };

  renderListItem = ({ item }) => <RepositoryItem repository={item} navigation={this.props.navigation} />;

  renderList = () => {
    const { repositories, refreshing } = this.state;

    return (
      <FlatList
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        refreshing={refreshing}
        onRefresh={this.loadRepositories}
      />
    );
  };

  render() {
    const { repository, loading, error } = this.state;

    return (
      <View style={styles.container}>
        <Header title="NativeIssues" />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            value={repository}
            onChangeText={text => this.setState({ repository: text })}
            placeholder="Adicionar novo repositorio"
          />
          <TouchableOpacity onPress={this.handleAddRepository}>
            <Icon name="plus" size={16} styles={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <View style={styles.list}>
          {!!error && <Text>{error}</Text>}
          {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
        </View>
      </View>
    );
  }
}
