import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabs } from './BottomNavigator';
import ProductDetail from '../screens/ProductDetail';
import FavScreen from '../screens/FavScreen';
import Setting from '../screens/Setting';
import Profile from '../screens/Profile';
import { MyStack } from './Navigator';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// function HomeStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="tabs" component={BottomTabs} />
//       <Stack.Screen name="detail" component={ProductDetail} />
//     </Stack.Navigator>
//   );
// }

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#D17842',
        drawerInactiveTintColor: '#AEAEAE',
        drawerStyle: { backgroundColor: '#0C0F14' },
      }}
    >
      <Drawer.Screen name="home" component={MyStack} />
      <Drawer.Screen name="fav" component={FavScreen} />
      <Drawer.Screen name="setting" component={Setting} />
      <Drawer.Screen name="profile" component={Profile} />
    </Drawer.Navigator>
  );
}
