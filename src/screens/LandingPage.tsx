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
import { ProductData } from '../api/baseApi';
import { useQuery } from 'react-query';
import SmoothBurstLoader from '../components/Loader';
// import ScrollRow from '../components/ScrollRow';
// import { useQuery } from '@tanstack/react-query';
// import { ProductData } from '../api/axios';

export default function LandingPage() {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['products'],
    queryFn: ProductData,
  });

  console.log('====================================');
  console.log(data?.data?.products);
  console.log('====================================');
  return (
    <View style={styles.background}>
      <Header showSearchbar={true} />
      {isLoading ? (
        <View style={styles.loadingcontainer}>
          <SmoothBurstLoader />
        </View>
      ) : (
        <>
          <Filters />
          <ScrollView style={styles.productContainer}>
            <Text style={styles.rowHeader}>Beauty</Text>
            <ScrollRow isSuccess={isSuccess} data={data} category="beauty" />
            <Text style={styles.rowHeader}>fragrances</Text>
            <ScrollRow
              isSuccess={isSuccess}
              data={data}
              category="fragrances"
            />
            <Text style={styles.rowHeader}>furniture</Text>
            <ScrollRow isSuccess={isSuccess} data={data} category="furniture" />
            <Text style={styles.rowHeader}>groceries</Text>
            <ScrollRow isSuccess={isSuccess} data={data} category="groceries" />
          </ScrollView>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#0C0F14',
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
  loadingText: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 14,
    // position: 'absolute',
    textAlign: 'center',
  },
  loadingcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
