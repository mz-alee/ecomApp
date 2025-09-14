import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/LandingPage';
import CartScreen from '../screens/CartScreen';
import FavScreen from '../screens/FavScreen';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import CustomTabBar from '../components/BottomBar';
export const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  const route = useRoute();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="home" component={MainScreen} />
      <Tab.Screen name="cart" component={CartScreen} />
      <Tab.Screen name="fav" component={FavScreen} />
    </Tab.Navigator>
  );
};
