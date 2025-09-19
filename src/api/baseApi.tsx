import axios from 'react-native-axios';

export const baseApi = axios.create({
  // baseURL: 'https://dummyjson.com/',
  baseURL: 'http://10.0.2.2:5000',
});
export const Api = axios.create({
  baseURL: 'https://dummyjson.com/',
});

export const ProductData = () => {
  return Api.get(`products/`);
};

// signup

export const signupApi = data => {
  console.log('====================================');
  console.log('data from api ', data);
  console.log('====================================');
  return baseApi.post(`/api/auth/signup`, data);
};

// login

export const loginApi = data => {
  console.log('====================================');
  console.log('data from api ', data);
  console.log('====================================');
  return baseApi.post(`/api/auth/login`, data);
};
