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
import { RootState } from '../store/Store';
import { useSelector } from 'react-redux';
const Cart = () => {
  const cartItem = useSelector((state: RootState) => state?.cart?.items);

  console.log('====================================');
  console.log('cart itemssss', cartItem);
  console.log('====================================');

  return (
    <View style={styles.main}>
      <Header showSearchbar={false} showScreenName={true} screenName="cart" />
      {cartItem.length < 1 ? (
        <View style={styles.container}>
          <Text style={styles.whiteText}>Cart is empty</Text>
        </View>
      ) : (
        <>
          <ScrollView style={styles.cartProductContainer}>
            {cartItem?.map(item => {
              return <CartItemCard key={item?.id} item={item} />;
            })}
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#0C0F14',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  whiteText: {
    color: 'white',
  },
  cartProductContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
