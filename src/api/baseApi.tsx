import axios from 'react-native-axios';

export const baseApi = axios.create({
  baseURL: 'https://dummyjson.com/',
});

export const ProductData = () => {
  return baseApi.get(`products/`);
};
