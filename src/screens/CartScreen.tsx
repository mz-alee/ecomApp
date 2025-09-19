import React from 'react';
import {
  ScrollView,
  ScrollViewBase,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import CartItemCard from '../components/CartItemCard';
import { RootState } from '../store/Store';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
const Cart = () => {
  const cartItem = useSelector((state: RootState) => state?.cart?.items);
  const total = useSelector((state: RootState) => state?.cart?.totalPrice);

  // const totalPrice = useSelector(selectTotalPrice);
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
          <View style={styles.cartContainer}>
            <View style={styles.priceContainer}>
              <Text style={styles.sizeText}>price</Text>
              <Text style={styles.ProductName}>
                <Icon name="dollar" size={20} color="#D17842" />
                {total}
              </Text>
            </View>
            {/* <TouchableOpacity style={styles.cartBtn}>
                  <Text style={{ color: 'white', fontWeight: '700' }}>
                    Add to cart
                  </Text>
                </TouchableOpacity> */}
            <TouchableOpacity style={styles.cartBtn}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Exo2-Bold',
                }}
              >
                Pay
              </Text>
            </TouchableOpacity>
          </View>
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
  cartContainer: {
    height: 70,
    width: '100%',
    backgroundColor: '#141921',
    flexDirection: 'row',
    // justifyContent:'space-between',
    alignItems: 'center',
    gap: 32,
    // paddingHorizontal:20,
    marginTop: 15,
  },
  priceContainer: {
    display: 'flex',
    width: '30%',
    alignItems: 'center',
  },
  cartBtn: {
    backgroundColor: '#D17842',
    height: 50,
    width: '60%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProductName: {
    width: 85,
    height: 28,
    fontSize: 19,
    color: 'white',
    fontFamily: 'Exo2-Italic',
  },
  sizeText: {
    color: '#AEAEAE',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Exo2-Italic',
    marginHorizontal: 15,
    marginBottom: 3,
  },
});
