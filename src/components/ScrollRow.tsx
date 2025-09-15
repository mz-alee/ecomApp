import React, { useEffect } from 'react';
import Items from './Items';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useQuery } from 'react-query';
import { ProductData } from '../api/baseApi';

interface Products {
  id: number;
  title: string;
  price: number;
}

interface ScrollRowProp {
  data?: Products[];
  catgory: string;
  isSuccess: any;
}

const ScrollRow: React.FC<ScrollRowProp> = ({ data, isSuccess }) => {
  useEffect(() => {
    if (isSuccess) {
      const filteredData = data?.data?.products?.filter(
        item => item.category === 'beauty',
      );
      console.log('====================================');
      console.log('filtered', filteredData);
      console.log('====================================');
    } else {
      console.log('====================================');
      console.log('products fetching failed');
      console.log('====================================');
    }
  }, []);

  return (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        {data?.data?.products?.map((item: Products) => (
          <Items key={item.id} data={item} />
        ))}
      </ScrollView>
    </>
  );
};

export default ScrollRow;
const styles = StyleSheet.create({
  scrollContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
});
