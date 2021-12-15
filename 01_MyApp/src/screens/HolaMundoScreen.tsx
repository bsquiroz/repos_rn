import React from 'react';
import {Text, View} from 'react-native';

export const HolaMundoScreen = () => {
  return (
    <View style={{backgroundColor: 'red', flex: 1, justifyContent: 'center'}}>
      <Text
        style={{
          fontSize: 50,
          backgroundColor: 'green',
          textAlign: 'center',
          color: '#fff',
        }}>
        Hola mundo
      </Text>
    </View>
  );
};
