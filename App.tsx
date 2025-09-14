import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { MyStack } from './src/navigation/Navigator';
import { BottomTabs } from './src/navigation/BottomNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  console.log('testing');

  return (
    <>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </>
  );
};

export default App;
