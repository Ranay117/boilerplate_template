import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Text} from '@components';
import {COLOR} from '@config';

import styles from './tag.style';

const Tag = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>

      {props.onRemove ? (
        <TouchableOpacity
          onPress={() => props.onRemove(props.id)}
          style={styles.removeButtonContainer}>
          <Icon name={'times'} size={14} color={COLOR.TAG_ICON} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export {Tag};
