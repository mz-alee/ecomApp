import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import FavItemCard from '../components/FavItemCard';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Store';

const FavScreen = () => {
  const product = useSelector((state: RootState) => state?.fav?.items);
  console.log('====================================');
  console.log(product);
  console.log('====================================');
  return (
    <View style={styles.main}>
      <Header screenName="Favorites" showScreenName={true} />
      {product.length < 1 ? (
        <View style={styles.container}>
          <Text style={styles.whiteText}>Fav is empty</Text>
        </View>
      ) : (
        <ScrollView>
          <View style={styles.itemsContainer}>
            {product.length &&
              product?.map((items, index) => {
                return (
                  <View key={index}>
                    <FavItemCard productData={items} />
                  </View>
                );
              })}
          </View>
        </ScrollView>
      )}
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
    marginTop: 10,
  },
  whiteText: {
    color: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
