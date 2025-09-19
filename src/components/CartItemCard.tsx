import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RadialGradient } from 'react-native-gradients';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/Store';
import { decreaseQty, increaseQty } from '../store/Slices/CartSlice';

interface CartItemCartProp {
  item?: [];
}

const CartItemCard = ({ item }) => {
  const colorList = [
    { offset: '0%', color: '#231557', opacity: '1' },
    { offset: '29%', color: '#44107A', opacity: '1' },
    { offset: '67%', color: '#FF1361', opacity: '1' },
    { offset: '100%', color: '#FFF800', opacity: '1' },
  ];

  const dispatch = useDispatch();

  console.log('====================================');
  console.log('itemsssss ', item);
  console.log('====================================');
  return (
    // <RadialGradient x="50%" y="50%" rx="50%" ry="50%" colorList={colorList}>
    <View style={styles.main}>
      <View style={styles.productContainer}>
        <Image
          source={{ uri: item?.images[0] }}
          style={{ height: 120, width: 120, borderRadius: 20 }}
        />
        <View style={styles.info}>
          <View>
            <Text
              style={styles.productName}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item?.title}
            </Text>
            <Text style={styles.des}>with steamed milk</Text>
          </View>
          <View style={styles.secondRow}>
            <View style={styles.sizeContainer}>
              <Text style={styles.sizeText}>M</Text>
            </View>
            <Text style={styles.dollar}>
              $
              <Text style={styles.price} numberOfLines={1} ellipsizeMode="tail">
                {item?.price * item?.quantity}
              </Text>
            </Text>
          </View>
          <View style={styles.thirdRow}>
            <TouchableOpacity
              onPress={() => dispatch(decreaseQty(item.id))}
              style={styles.btn}
            >
              <Text style={styles.btn}>-</Text>
            </TouchableOpacity>
            <View style={styles.totalNumBox}>
              <Text style={styles.totalNumText}>{item?.quantity}</Text>
            </View>
            <TouchableOpacity
              onPress={() => dispatch(increaseQty(item.id))}
              style={styles.btn}
            >
              <Text style={styles.btn}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    // </RadialGradient>
  );
};

export default CartItemCard;

const styles = StyleSheet.create({
  main: {
    // width:350,
    height: 155,
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#16191d',
  },
  productContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    padding: 10,
    gap: 20,
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    // backgroundColor:"lightblue",
    height: '100%',
    width: '55%',
    borderRadius: 10,
  },
  productName: {
    fontSize: 15,
    fontWeight: '500',
    textTransform: 'capitalize',
    color: 'white',
  },
  des: {
    color: '#AEAEAE',
    fontSize: 10,
    marginTop: 4,
  },
  secondRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  sizeContainer: {
    backgroundColor: '#0c0f14',
    height: 35,
    width: 70,
    borderRadius: 8,
    marginTop: 10,
    padding: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sizeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  dollar: {
    width:80,
    color: '#D17842',
    fontWeight: '500',
    fontSize: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
  },
  price: {
    fontSize: 16,
    color: 'white',
  },
  thirdRow: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  btn: {
    backgroundColor: '#d17842',
    color: 'white',
    fontSize: 20,
    width: 30,
    height: 30,
    borderRadius: 6,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '600',
  },
  totalNumBox: {
    backgroundColor: '#0c0f14',
    height: 30,
    width: 50,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#d17842',
  },
  totalNumText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
    width: '100%',
  },
});
