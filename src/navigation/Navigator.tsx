import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from '../screens/LandingPage';

const stack = createNativeStackNavigator();

function mystack() {
  return (
    <stack.Navigator>
      <stack.Screen name="home" component={LandingPage} />
    </stack.Navigator>
  );
}
