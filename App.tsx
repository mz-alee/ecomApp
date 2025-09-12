import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  console.log("testing");

  return (
    <View style={styles.main}>
      <Text>Hello React Native</Text>
      <Text>Hello React Native</Text>
      <Icon name="home" size={40} color="#4CAF50"  />
      <Button title='landing page'  />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'lightblue'
  }
})