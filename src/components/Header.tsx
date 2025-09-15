import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Searchbar from './Searchbar';
import { useNavigation, useRoute } from '@react-navigation/native';
import DrawerNavigation from '../navigation/DrawerNavigation';
interface HeaderProps {
  showSearchbar?: boolean;
  showScreenName?: boolean;
  screenName?: string;
}

const Header: React.FC<HeaderProps> = ({
  showSearchbar,
  showScreenName,
  screenName,
}) => {
  const navigation = useNavigation();

  const route = useRoute();
  console.log(route, 'route');

  console.log('====================================');
  console.log('navigation', navigation);
  console.log('====================================');
  return (
    <View style={styles.main}>
      <View style={styles.inner}>
        <TouchableOpacity
          // disabled={route.name === 'home'}
          style={styles.menuButton}
          onPress={() => {
            route.name === 'home'
              ? navigation.openDrawer()
              : navigation.goBack();
          }}
        >
          {route.name === 'home' ? (
            <AntDesign name="menu-fold" size={20} color="gray" />
          ) : (
            <AntDesign name="left" size={20} color="gray" />
          )}
        </TouchableOpacity>
        {showScreenName && <Text style={styles.screenName}>{screenName}</Text>}
        <Image
          style={styles.profile}
          source={require('../../assets/dp.jpg')}
          alt="dp"
        />
      </View>
      {showSearchbar && (
        <>
          <Text style={styles.title}>Find the best coffee for you</Text>
          <View style={styles.searchContainer}>
            <Searchbar />
          </View>
        </>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  main: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    marginLeft: 30,
    marginTop: 10,
    width: 230,
  },
  inner: {
    width: '100%',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    padding: 10,
    paddingHorizontal: 10,
    color: 'white',
  },
  menuButton: {
    width: 35,
    height: 35,
    backgroundColor: '#171b21',
    borderWidth: 1,
    borderColor: '#252A32',
    borderRadius: 8,
    padding: 5,
  },
  profile: {
    width: 40,
    height: 40,
    backgroundColor: '#171b21',
    borderWidth: 1,
    borderColor: '#252A32',
    borderRadius: 8,
    padding: 5,
  },
  searchContainer: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
  screenName: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
    width: 100,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
