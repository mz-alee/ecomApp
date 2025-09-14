import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
interface ItemsProp {
  Imgpath?: string;
}

const Items: React.FC<ItemsProp> = ({ Imgpath }) => {
  const navigation = useNavigation<any>();
  console.log('imgggg', Imgpath);


  return (
    <TouchableOpacity
      style={styles.main}
      onPress={() => navigation.navigate('detail')}
    >
      <Image
        source={require('../../assets/bg1.jpeg')}
        style={styles.productImage}
      />
      <TouchableOpacity style={styles.heartContainer}>
        {/* <MaterialIcons name='favorite' size={15} color="white" /> */}
      </TouchableOpacity>
      <View style={styles.info}>
        <Text style={styles.title}>cappuccino</Text>
        <Text style={styles.des}>des.........</Text>
        <View style={styles.cartInfo}>
          <Text style={styles.dollar}>
            $ <Text style={styles.price}>4.20</Text>
          </Text>
          <TouchableOpacity style={styles.cartButton}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Items;

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
    backgroundColor: '#1e232a',
    color: 'white',
    height: 200,
    width: 140,
    borderWidth: 1,
    marginHorizontal: 3,
    borderRadius: 20,
    padding: 9,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 10,
  },
  info: {
    width: '100%',
  },
  title: {
    fontSize: 14,
    color: 'white',
  },
  des: {
    fontSize: 11,
    color: 'white',
  },
  cartInfo: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dollar: {
    color: '#D17842',
    fontWeight: '500',
    fontSize: 11,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
  },
  price: {
    fontSize: 13,
    color: 'white',
  },
  cartButton: {
    backgroundColor: '#d17842',
    width: 23,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 4,
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
  },
  heartContainer: {
    height: 25,
    width: 25,
    backgroundColor: '#0C0F14',
    position: 'absolute',
    top: 15,
    right: 15,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
