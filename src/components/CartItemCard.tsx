import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RadialGradient } from 'react-native-gradients';
import { useSelector } from 'react-redux';
const CartItemCard = () => {
  const colorList = [
    { offset: '0%', color: '#231557', opacity: '1' },
    { offset: '29%', color: '#44107A', opacity: '1' },
    { offset: '67%', color: '#FF1361', opacity: '1' },
    { offset: '100%', color: '#FFF800', opacity: '1' },
  ];

  // const count = useSelector((state: RootState) => state.counter.value);
  return (
    // <RadialGradient x="50%" y="50%" rx="50%" ry="50%" colorList={colorList}>
    <View style={styles.main}>
      <View style={styles.productContainer}>
        <Image
          source={require('../../assets/bg2.jpeg')}
          style={{ height: 120, width: 120, borderRadius: 20 }}
        />
        <View style={styles.info}>
          <View>
            <Text style={styles.productName}>cappuccino</Text>
            <Text style={styles.des}>with steamed milk</Text>
          </View>
          <View style={styles.secondRow}>
            <View style={styles.sizeContainer}>
              <Text style={styles.sizeText}>M</Text>
            </View>
            <Text style={styles.dollar}>
              $ <Text style={styles.price}>4.20</Text>
            </Text>
          </View>
          <View style={styles.thirdRow}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btn}>-</Text>
            </TouchableOpacity>
            <View style={styles.totalNumBox}>
              <Text style={styles.totalNumText}>1</Text>
            </View>
            <TouchableOpacity style={styles.btn}>
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
    fontSize: 18,
    fontWeight: '700',
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
