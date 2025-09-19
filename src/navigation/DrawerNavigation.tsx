import React, { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MyStack } from './Navigator';
import { BottomTabs } from './BottomNavigator';
import ProductDetail from '../screens/ProductDetail';
import FavScreen from '../screens/FavScreen';
import Setting from '../screens/Setting';
import Profile from '../screens/Profile';
import AuthScreen from '../authScreens/AuthScreen';
import SideDrawer from '../components/SideDrawer';
import Cart from '../screens/CartScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const checkToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('userToken');
        setToken(storedToken);
      } catch (e) {
        console.log('Error reading token:', e);
      } finally {
        setLoading(false);
      }
    };
    checkToken();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0C0F14',
        }}
      >
        <ActivityIndicator size="large" color="#D17842" />
        <Text
          style={{
            marginTop: 30,
            color: '#D17842',
            fontSize: 35,
            fontFamily: 'StoryScript-Regular',
          }}
        >
          mzius store
        </Text>
      </View>
    );
  }

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#D17842',
        drawerInactiveTintColor: '#AEAEAE',
        drawerStyle: styles.main,
      }}
      drawerContent={props => <SideDrawer {...props} />}
    >
      {token ? (
        <>
          <Drawer.Screen name="home" component={MyStack} />
          <Drawer.Screen name="fav" component={FavScreen} />
          <Drawer.Screen name="cart" component={Cart} />
          <Drawer.Screen name="setting" component={Setting} />
          <Drawer.Screen name="profile" component={Profile} />
        </>
      ) : (
        <Drawer.Screen name="auth" component={AuthScreen} />
      )}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  main: {
    width: 250,
    padding: 10,
    backgroundColor: 'transparent',
  },
});
