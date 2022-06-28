import React from 'react';
import {Switch as RNSwitch, Platform} from 'react-native';
// import SwitchToggle from '@dooboo-ui/native-switch-toggle';
import styles from './switch.style';

const Switch = props => {
  return (
    <RNSwitch
      value={props.value}
      onValueChange={props.onValueChange}
      trackColor={{false: '#838E9B40', true: '#838E9B50'}}
      thumbColor={'#007BE2'}
      {...props}
    />

    // <SwitchToggle
    //   containerStyle={{
    //     // marginTop: 16,
    //     width: 35,
    //     height: 10,
    //     borderRadius: 25,
    //     padding: 0,
    //     backgroundColor: '#FFFFFF',
    //   }}
    //   circleStyle={{
    //     width: 20,
    //     height: 20,
    //     borderRadius: 19,
    //     borderColor: '#AEBCCC',
    //     borderWidth: props.value ? 0 : 2,
    //     backgroundColor: '#FFFFFF',
    //   }}
    //   backgroundColorOn="#a0e1e54c"
    //   backgroundColorOff="#838E9B"
    //   switchOn={props.value}
    //   onPress={(): void => props.onValueChange(!props.value)}
    //   circleColorOff="#FFFFFF"
    //   circleColorOn="#007BE2"
    //   duration={100}
    // />
  );
};

export {Switch};
