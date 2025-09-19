import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import InputFields from '../components/InputFiled';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './schema/loginSchema';
import { useMutation } from 'react-query';
import { loginApi } from '../api/baseApi';
import Loader from '../components/simpleLoader';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/Slices/AuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = () => {
  const {
    setValue,
    getValues,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const dispatch = useDispatch();

  const navigation = useNavigation();
  const loginMutation = useMutation({
    mutationFn: data => loginApi(data),
    onSuccess: async data => {
      console.log('logged in successfully,data', data);
      if (data?.data?.token) {
        try {
          await AsyncStorage.setItem('userToken', data.data.token);
          await AsyncStorage.setItem('user', JSON.stringify(data.data.user));

          dispatch(
            loginSuccess({ token: data.data.token, user: data.data.user }),
          );
          navigation.navigate('home');
        } catch (err) {
          console.log('Error storing token:', err);
        }
      }
    },
    onError: err => {
      console.log('error >>>', err);
    },
  });

  const onSubmit = (data: any) => {
    loginMutation.mutate(data);
    console.log(data);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onBlur, onChange, value } }) => (
            <InputFields
              placeholder="email"
              label="email"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={errors.email?.message}
            />
          )}
        />
      </View>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="password"
          render={({ field: { onBlur, onChange, value } }) => (
            <InputFields
              placeholder="password"
              label="password"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={errors.password?.message}
            />
          )}
        />
      </View>
      <View style={styles.passwordFooter}>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={[
          styles.continueButton,
          loginMutation.isLoading && styles.isLoadingBTN,
        ]}
      >
        <Text style={styles.continueButtonText}>
          {loginMutation.isLoading ? (
            <Loader color="#D17842" size={20} />
          ) : (
            'Continue'
          )}
        </Text>
      </TouchableOpacity>
      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.dividerLine} />
      </View>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Login with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Login with Google</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signUpLink}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
    color: 'gray',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    borderWidth: 2,
    borderColor: '#FF6B6B',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingRight: 50,
    fontSize: 16,
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: 16,
    padding: 4,
  },
  eyeText: {
    fontSize: 18,
    color: '#999',
  },
  passwordFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  wrongPassword: {
    color: '#FF6B6B',
    fontSize: 14,
  },
  forgotPassword: {
    color: '#D17842',
    fontSize: 14,
    fontWeight: '500',
  },
  continueButton: {
    backgroundColor: '#D17842',
    paddingVertical: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  isLoadingBTN: {
    backgroundColor: '#252A32',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 0.9,
    backgroundColor: 'gray',
  },
  dividerText: {
    color: '#999',
    fontSize: 14,
    paddingHorizontal: 16,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 12,
    backgroundColor: '#252A32',
  },
  appleIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  googleIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4285F4',
    marginRight: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    width: 24,
    height: 24,
    textAlign: 'center',
    lineHeight: 24,
  },
  socialButtonText: {
    fontSize: 17,
    fontWeight: '400',
    color: 'gray',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: '#999',
    fontSize: 14,
  },
  signUpLink: {
    color: '#D17842',
    fontSize: 14,
    fontWeight: '500',
  },
});
