import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RepositoryItem = ({ repository, navigation }) => (
  <View style={styles.container}>
    <View style={styles.containerImage}>
      <Image style={styles.avatar} source={{ uri: repository.owner.avatar_url }} />
    </View>
    <View style={styles.containerText}>
      <Text style={styles.title}>{repository.name}</Text>
      <Text style={styles.subtitle}>{repository.owner.login}</Text>
    </View>
    <View style={styles.arrowContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('RepositoryDetails', {
          repository,
        })
        }
      >
        <Icon name="chevron-right" size={12} styles={styles.arrow} />
      </TouchableOpacity>
    </View>
  </View>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default RepositoryItem;
