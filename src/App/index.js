import {View, Text} from 'react-native';
import React from 'react';
import {Header} from '../components/header';

const App = () => {
  return (
    <View>
      <Header
        title={'PAKISTAN ZINDABAD'}
        smallTitle
        // leftIconName={'arrow-left'}
      />
    </View>
  );
};

export default App;
