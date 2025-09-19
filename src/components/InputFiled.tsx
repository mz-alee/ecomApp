import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface InputProp {
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: (text: string) => void;
  onBlur?: () => void;
  error?: string;
}

const Input: React.FC<InputProp> = ({
  placeholder,
  label,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.searchContainer, error && styles.errorBorder]}>
        <TextInput
          style={styles.searchField}
          placeholder={placeholder}
          placeholderTextColor="gray"
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 5,
    backgroundColor: '#252A32',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  errorBorder: {
    borderColor: '#DC3535',
    borderWidth: 1,
  },
  searchField: {
    paddingLeft: 13,
    paddingRight: 10,
    paddingTop: 13,
    paddingBottom: 13,
    color: 'gray',
    fontSize: 13,
    borderWidth: 0,
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 14,
    fontWeight: '400',
    color: 'gray',
    marginBottom: 8,
  },
  error: {
    color: '#DC3535',
    fontSize: 12,
    marginTop: 5,
  },
});
