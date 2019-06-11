import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import {
  View, Text, TouchableOpacity, StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { title } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#444A5A" />
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}

export default withNavigation(Header);
