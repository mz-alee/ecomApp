import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Cart from '../screens/CartScreen';
import FavScreen from '../screens/FavScreen';
import LandingPage from '../screens/LandingPage';
import Setting from '../screens/Setting';
import Profile from '../screens/Profile';
import { BottomTabs } from './BottomNavigator';

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#D17842',
        drawerInactiveTintColor: '#AEAEAE',
        drawerStyle: {
          backgroundColor: '#0C0F14',
        },
      }}
    >
      <Drawer.Screen name="home" component={BottomTabs} />
      <Drawer.Screen name="fav" component={FavScreen} />
      <Drawer.Screen name="setting" component={Setting} />
      <Drawer.Screen name="profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
