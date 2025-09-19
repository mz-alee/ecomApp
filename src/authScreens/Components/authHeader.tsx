import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
interface authHeaderProp {
  setTab: (value: boolean) => void;
  tab: boolean;
}

const AuthHeader: React.FC<authHeaderProp> = ({ setTab, tab }) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => setTab(false)}
        style={[styles.tabs, !tab && styles.activeTab]}
      >
        <Icon name="login" size={22} color="gray" style={styles.icon} />
        <Text style={styles.tabsText}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setTab(true)}
        style={[styles.tabs, tab && styles.activeTab]}
      >
        <Icon name="person" size={22} color="gray" style={styles.icon} />
        <Text style={styles.tabsText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  main: {
    height: 90,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 30,
  },
  tabs: {
    borderBottomWidth: 1,
    borderColor: 'transparent',
    paddingHorizontal: 3,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    paddingBottom: 1,
  },
  activeTab: {
    borderColor: '#D17842',
  },
  tabsText: {
    fontWeight: '400',
    fontSize: 20,
    color: '#D17842',
    textTransform: 'capitalize',
    padding: 2,
  },
  icon: {
    // position: 'absolute',
    // left: 10,
    color: '#D17842',
    // top: 5,
  },
});
