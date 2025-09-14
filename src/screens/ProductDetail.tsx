import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState(250);

  const sizes = [250, 500, 1000];

  return (
    <View style={styles.main}>
      <ImageBackground
        source={require('../../assets/bg1.jpeg')}
        style={styles.topContainer}
      >
        <Header />
        <View style={styles.bottomBox}>
          <View style={styles.leftSide}>
            <Text style={styles.coffeName}>Coffe Name</Text>
            <Text style={styles.location}>from africa</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={20} color="#D17842" />
              <Text style={styles.ratingText}>4.5</Text>
              <Text style={styles.ratingTotal}>(6,444)</Text>
            </View>
          </View>
          <View style={styles.rightSide}>
            <View style={styles.btnContainer}></View>
            <View style={styles.btnContainer}></View>
            <View style={styles.btnContainer}></View>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.bottomContainer}>
        <Text style={styles.DescriptionTitle}>Description</Text>
        <View style={styles.DescriptionBox}>
          <Text style={styles.DescriptionText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
            dolorem neque, facere possimus placeat iure, voluptates optio nihil
            cumque commodi nemo? Nam hic magnam tenetur reiciendis repudiandae
            laudantium atque perferendis.
          </Text>
        </View>
        <Text style={styles.sizeText}>Size</Text>
        <View style={styles.sizeContainer}>
          {sizes.map(size => (
            <TouchableOpacity
              key={size}
              style={[
                styles.sizeSelector,
                selectedSize === size && styles.sizeSelected,
              ]}
              onPress={() => setSelectedSize(size)}
            >
              <Text
                style={[
                  styles.weightText,
                  selectedSize === size && styles.sizeTextSelected,
                ]}
              >
                {size}gm
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.cartContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.sizeText}>price</Text>
            <Text style={styles.coffeName}>
              <Icon name="dollar" size={20} color="#D17842" />
              10.5
            </Text>
          </View>
          <TouchableOpacity style={styles.cartBtn}>
            <Text style={{ color: 'white', fontWeight: '700' }}>
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  main: { flex: 1 },
  topContainer: { flex: 0.6 },
  bottomBox: {
    height: 120,
    width: '100%',
    backgroundColor: '#05050584',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    bottom: 0,
    position: 'absolute',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftSide: { width: '60%' },
  rightSide: {
    width: '40%',
    gap: 13,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  coffeName: { fontSize: 20, fontWeight: '700', color: 'white' },
  location: { color: '#AEAEAE', fontSize: 10, textTransform: 'capitalize' },
  ratingContainer: {
    height: 20,
    width: 100,
    marginTop: 23,
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  ratingText: { fontSize: 14, fontWeight: '900', color: 'white' },
  ratingTotal: { color: '#AEAEAE', fontSize: 9 },
  btnContainer: {
    backgroundColor: '#141921',
    padding: 10,
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  bottomContainer: { flex: 0.4, backgroundColor: '#0c0f14' },
  DescriptionTitle: {
    color: '#AEAEAE',
    fontSize: 16,
    fontWeight: '700',
    margin: 15,
  },
  DescriptionBox: {
    height: 100,
  },
  DescriptionText: {
    color: '#AEAEAE',
    fontSize: 12,
    fontWeight: '300',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  sizeText: {
    color: '#AEAEAE',
    fontSize: 14,
    fontWeight: '700',
    marginHorizontal: 15,
    marginBottom: 3,
  },
  sizeContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    gap: 20,
  },
  sizeSelector: {
    height: 40,
    width: 100,
    borderRadius: 8,
    backgroundColor: '#141921',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1b222c',
  },
  sizeSelected: {
    borderColor: '#D17842',
    borderWidth: 1,
  },
  weightText: { color: '#AEAEAE', fontSize: 12 },
  sizeTextSelected: { color: '#D17842' },
  cartContainer: {
    height: 70,
    width: '100%',
    backgroundColor: '#141921',
    flexDirection: 'row',
    // justifyContent:'space-between',
    alignItems: 'center',
    gap: 32,
    // paddingHorizontal:20,
    marginTop: 5,
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
});
