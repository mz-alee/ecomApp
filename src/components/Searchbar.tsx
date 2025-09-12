import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons";

const Searchbar = () => {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color="gray" style={styles.icon} />
      <TextInput placeholderTextColor='gray'
        style={styles.searchField} placeholder='Find Your Coffee...' />
    </View>
  )
}

export default Searchbar;

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 10,
    backgroundColor: '#252A32',
    borderRadius: 14,
    width: 310,
    
  },
  searchField: {
    paddingLeft: 40,
    paddingRight: 10,
    paddingTop: 13,
    paddingBottom: 13,
    color: 'gray',
    fontSize: 11,
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
})