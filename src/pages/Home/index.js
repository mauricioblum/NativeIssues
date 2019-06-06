import React, { Component } from 'react';

import { View, Text, TextInput } from 'react-native';

import Header from '~/components/Header';

// import { Container } from './styles';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Header title="NativeIssues" />
        <View>
          <Text>Teste de texto</Text>
          <TextInput placeholder="usuario/repositorio" />
        </View>
      </View>
    );
  }
}
