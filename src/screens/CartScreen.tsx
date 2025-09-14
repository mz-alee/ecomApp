import React from 'react';
import {
  ScrollView,
  ScrollViewBase,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../components/Header';
import CartItemCard from '../components/CartItemCard';
const Cart = () => {
  return (
    <View style={styles.main}>
      <Header showSearchbar={false} showScreenName={true} screenName="cart" />
      <ScrollView style={styles.cartProductContainer}>
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#0C0F14',
  },
  cartProductContainer: {
    flex: 1,
    // backgroundColor: "red",
    margin: 10,
    borderRadius: 10,
  },
});
