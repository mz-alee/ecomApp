import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import FavItemCard from '../components/FavItemCard';

const FavScreen = () => {
  return (
    <View style={styles.main}>
      <Header screenName="Favorites" showScreenName={true} />
      <ScrollView>
        <View style={styles.itemsContainer}>
          <FavItemCard />
          <FavItemCard />
        </View>
      </ScrollView>
    </View>
  );
};

export default FavScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#0C0F14',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    // justifyContent:'center',
  },
  itemsContainer: {
    alignItems: 'center',
    gap: 20,
  },
});
