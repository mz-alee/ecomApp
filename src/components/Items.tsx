import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface ItemsProp {
  Imgpath?: string;
  data?: any;
}

const Items: React.FC<ItemsProp> = ({ Imgpath, data }) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.main}
      onPress={() => navigation.navigate('detail')}
    >
      <Image
        // source={require('../../assets/bg1.jpeg')}
        source={{ uri: data?.images?.[0] }}
        style={styles.productImage}
      />
      <View style={styles.ratingContainer}>
        <AntDesign name="star" size={12} color="#D17842" />
        <Text style={styles.ratingText}>{data?.rating}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {data?.title}
        </Text>
        <Text style={styles.des} numberOfLines={1} ellipsizeMode="tail">
          {data?.description}
        </Text>
        <View style={styles.cartInfo}>
          <Text style={styles.dollar}>
            $ <Text style={styles.price}>{data?.price}</Text>
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
    marginTop: 5,
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
    height: 110,
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
  ratingContainer: {
    width: 70,
    flexDirection: 'row',
    height: 35,
    gap: 3,
    position: 'absolute',
    right: 0,
    backgroundColor: '#0f0f0fb7',
    borderBottomLeftRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    color: 'white',
    fontSize: 12,
  },
});
