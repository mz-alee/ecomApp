import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const SideDrawer: React.FC<DrawerContentComponentProps> = props => {
  const { state } = props;
  const activeIndex = state.index;

  const navigation = useNavigation();
  const delToken = async () => {
    await AsyncStorage.removeItem('userToken');
    navigation.navigate('auth');
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <View>
            <Text style={[styles.nameText, { color: '#D17842', fontSize: 18 }]}>
              Hey
            </Text>
            <Text style={styles.nameText}>Mirza ALi</Text>
          </View>
          <Image
            style={styles.profile}
            source={require('../../assets/emptyprofile.webp')}
          />
        </View>
        <Text style={styles.logo}>
          Mzius <Text style={{ color: '#D17842' }}>store</Text>
        </Text>
      </View>

      <View style={styles.screens}>
        {state.routes.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <TouchableOpacity
              key={item.key}
              style={[
                styles.linkContainer,
                { backgroundColor: isActive ? '#D17842' : '#52555A' },
              ]}
              onPress={() => navigation.navigate(item.name)}
            >
              <Text
                style={[
                  styles.linksText,
                  { color: isActive ? '#fff' : '#AEAEAE' },
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            delToken();
          }}
          style={styles.logout}
        >
          <Text style={[styles.logoutText]}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SideDrawer;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    gap: 20,
  },
  header: {
    height: '25%',
    backgroundColor: '#252A32',
    borderRadius: 10,
    alignItems: 'center',
    padding: 5,
  },
  screens: {
    flex: 1,
    backgroundColor: '#252A32',
    borderRadius: 10,
    alignItems: 'center',
    gap: 15,
    padding: 10,
  },
  profile: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  footer: {
    height: '20%',
    backgroundColor: '#252A32',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    width: 220,
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 100,
    borderColor: '#52555A',
    marginTop: 25,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'StoryScript-Regular',
    fontSize: 26,
    color: '#9197a5',
    marginTop: 20,
  },
  nameText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Exo2-Italic',
  },
  linkContainer: {
    borderRadius: 7,
    width: 220,
    height: 45,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  linksText: {
    fontSize: 17,
    fontFamily: 'Exo2-Light',
  },
  logout: {
    marginTop: 60,
    borderColor: 'gray',
    borderWidth: 0.8,
    width: 180,
    borderRadius: 10,
    padding: 5,
  },
  logoutText: {
    color: 'gray',
    fontSize: 23,
    fontFamily: 'StoryScript-Regular',
    textAlign: 'center',
  },
});
