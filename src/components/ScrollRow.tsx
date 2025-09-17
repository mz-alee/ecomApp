import React, { useEffect, useState } from 'react';
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
  category?: string;
  isSuccess?: boolean;
}

const ScrollRow: React.FC<ScrollRowProp> = ({ data, isSuccess, category }) => {
  const [filtersdata, setData] = useState([]);
  useEffect(() => {
    if (isSuccess) {
      const filteredData = data?.data?.products?.filter(
        item => item.category === category,
      );
      setData(filteredData);
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
        {filtersdata?.map((item: Products) => (
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
