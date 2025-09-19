import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LandingPage from '../screens/LandingPage';
import CartScreen from '../screens/CartScreen';
import FavScreen from '../screens/FavScreen';
import ProductDetail from '../screens/ProductDetail';
import { BottomTabs } from './BottomNavigator';
import DrawerNavigation from './DrawerNavigation';
import AuthScreen from '../authScreens/AuthScreen';

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="tabs"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="auth" component={AuthScreen} />
      <Stack.Screen name="tabs" component={BottomTabs} />
      <Stack.Screen name="landingpage" component={LandingPage} />
      {/* <Stack.Screen name="cart" component={CartScreen} /> */}
      {/* <Stack.Screen name="fav" component={FavScreen} /> */}
      <Stack.Screen name="detail" component={ProductDetail} />
    </Stack.Navigator>
  );
};
