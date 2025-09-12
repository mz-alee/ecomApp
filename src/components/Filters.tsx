import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const categories = ["All", "Coffee", "Tea", "Juice", "Snacks", 'dsd', 'sdsd'];

const Filters = () => {
  const [active, setActive] = useState("All");

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.chip,
              active === item && styles.activeChip
            ]}
            onPress={() => setActive(item)}
          >
            <Text style={[
              styles.chipText,
              active === item && styles.activeText
            ]}>
              {item}
            </Text>
            {
              active === item && <View style={styles.chipIndicator}></View>
            }

          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '85%',
  },
  scrollContent: {
    // paddingHorizontal: 5,
  },
  chip: {
    // backgroundColor: '#252A32',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeChip: {
    // backgroundColor: '#ff914d',  
  },
  chipText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#aaa',
  },
  activeText: {
    color: '#ff914d',
  },
  chipIndicator: {
    height: 4,
    width: 4,
    borderRadius: 2,
    backgroundColor: '#ff914d',
  }
});
