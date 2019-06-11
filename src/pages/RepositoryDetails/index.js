import React, { Component } from 'react';

import {
  View, Text, FlatList, TouchableOpacity, ActivityIndicator,
} from 'react-native';

import Header from '~/components/Header';

import api from '~/services/api';

import styles from './styles';

import Issue from './Issue';

export default class RepositoryDetails extends Component {
  state = {
    issues: [],
    activeFilter: 'all',
    loading: false,
    refreshing: false,
  };

  async componentDidMount() {
    await this.loadIssues();
  }

  loadIssues = async () => {
    this.setState({ loading: true, refreshing: true });
    const { navigation } = this.props;
    const { activeFilter } = this.state;
    const repository = navigation.getParam('repository', 'error');
    const { data } = await api.get(`/repos/${repository.full_name}/issues?state=${activeFilter}`);
    this.setState({ issues: data, loading: false, refreshing: false });
  };

  renderIssueItem = ({ item }) => <Issue issue={item} />;

  changeFilter = async (value) => {
    await this.setState({ activeFilter: value });
    this.loadIssues();
  }

  renderList = () => {
    const { issues, refreshing } = this.state;
    return (
      <FlatList
        data={issues}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderIssueItem}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { loading } = this.state;
    const { navigation } = this.props;
    const repository = navigation.getParam('repository', 'error');
    return (
      <View style={styles.container}>
        <Header title={repository.name} />
        <View style={styles.options}>
          <TouchableOpacity onPress={() => this.changeFilter('all')}>
            <Text style={styles.option}>Todas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeFilter('open')}>
            <Text style={styles.option}>Abertas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.changeFilter('closed')}>
            <Text style={styles.option}>Fechadas</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
        </View>
      </View>
    );
  }
}
