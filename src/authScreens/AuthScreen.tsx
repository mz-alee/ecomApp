import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import AuthHeader from './Components/authHeader';
import Login from './LoginScreen';
import Signup from './SignupScreen';

const AuthScreen = () => {
  const [tab, setTab] = useState<boolean>(false);
  return (
    <View style={styles.main}>
      <AuthHeader tab={tab} setTab={setTab} />
      {!tab ? <Login /> : <Signup />}
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#0C0F14',
  },
});
