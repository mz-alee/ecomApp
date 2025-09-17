import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { MyStack } from './src/navigation/Navigator';
import { BottomTabs } from './src/navigation/BottomNavigator';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import { QueryClient, QueryClientProvider, useQueryClient } from 'react-query';
import { Provider } from 'react-redux';
import { store } from './src/store/Store';
import 'react-native-url-polyfill/auto';
const App = () => {
  console.log('testing');

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <NavigationContainer>
            <DrawerNavigation />
          </NavigationContainer>
        </Provider>
      </QueryClientProvider>
    </>
  );
};

export default App;
