import { createDrawerNavigator } from '@react-navigation/drawer';
import Cart from '../screens/CartScreen';
import FavScreen from '../screens/FavScreen';

const Drawer = createDrawerNavigator();

function MyDrawer(){
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Cart} />
      <Drawer.Screen name="Profile" component={FavScreen} />
    </Drawer.Navigator>
  );
}
