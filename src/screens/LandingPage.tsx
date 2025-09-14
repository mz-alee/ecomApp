import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Alert,
} from 'react-native';
import Filters from '../components/Filters';
import ScrollRow from '../components/ScrollRow';
import Header from '../components/Header';
// import ScrollRow from '../components/ScrollRow';
// import { useQuery } from '@tanstack/react-query';
// import { ProductData } from '../api/axios';

export default function StartupScreen() {
  //   const { data, isLoading, isSuccess } = useQuery({
  //     queryKey: ['products'],
  //     queryFn: ProductData,

  //   })

  //   console.log("product  data ////////////", data)
  console.log('testing');
  console.log('testing');

  return (
    <View style={styles.background}>
      <Header showSearchbar={true} />
      <Filters />
      <ScrollView style={styles.productContainer}>
        <Text style={styles.rowHeader}>Coffee</Text>
        <ScrollRow Imgpath="../../assets/bg1.jpeg" />
        <Text style={styles.rowHeader}>beans</Text>
        <ScrollRow Imgpath="../../assets/beans.jpeg" />
        <Text style={styles.rowHeader}>Tea</Text>
        <ScrollRow Imgpath="../../assets/beans.jpeg" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#0C0F14',
    paddingTop: 20,
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 50,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  rowHeader: {
    fontSize: 17,
    color: '#fff',
    marginLeft: 10,
    marginTop: 10,
    fontStyle: 'italic',
    textTransform: 'capitalize',
  },
  scrollContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    gap: 30,
    paddingHorizontal: 30,
    width: '100%',
  },
  productContainer: {
    width: '85%',
    paddingVertical: 5,
  },
});
