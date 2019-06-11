import React from 'react';

import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Issue = ({ issue }) => (
  <View style={styles.container}>
    <View style={styles.containerImage}>
      <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />
    </View>
    <View style={styles.containerText}>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {issue.title}
      </Text>
      <Text style={styles.subtitle}>{issue.user.login}</Text>
    </View>
    <View style={styles.arrowContainer}>
      <TouchableOpacity onPress={() => Linking.openURL(issue.html_url)}>
        <Icon name="chevron-right" size={12} styles={styles.arrow} />
      </TouchableOpacity>
    </View>
  </View>
);

export default Issue;
