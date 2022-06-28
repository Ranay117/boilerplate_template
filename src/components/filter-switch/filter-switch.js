import React from 'react';
import {View, Text} from 'react-native';
import {Switch} from '../';
import styles from './filter-switch.style';

const FilterSwitch = props => {
  return (
    <View style={styles.container}>
      <Text
        style={[styles.label, props.boldLabel ? styles.boldLabel : undefined]}>
        {props.label}
      </Text>

      <Switch value={props.value} onValueChange={props.onToggle} />
    </View>
  );
};

export {FilterSwitch};
