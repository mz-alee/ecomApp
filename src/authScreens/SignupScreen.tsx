import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import InputFields from '../components/InputFiled';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignupSchema } from './schema/signupSchema';
import { useMutation } from 'react-query';
import { signupApi } from '../api/baseApi';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import Loader from '../components/simpleLoader';

const Signup = () => {
  const navigation = useNavigation();

  const {
    setValue,
    getValues,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const signupMutation = useMutation({
    mutationFn: data => signupApi(data),
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text2: 'Thanks for signing up👋',
      });
      reset()
      console.log('====================================');
      console.log('user created');
      console.log('====================================');
    },
    onError: err => {
      console.log('====================================');
      console.log('error >>>', err);
      console.log('====================================');
    },
  });

  const onSubmit = (data: any) => {
    signupMutation.mutate(data);
    console.log(data);
  };

  console.log('====================================');
  console.log(errors);
  console.log('====================================');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="name"
          render={({ field: { onBlur, onChange, value } }) => (
            <InputFields
              placeholder="username"
              label="username"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={errors.name?.message}
            />
          )}
        />
      </View>
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
      {/* <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="confirm_password"
          render={({ field: { onBlur, onChange, value } }) => (
            <InputFields
              placeholder="confirm password"
              label="confirm password"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={errors.confirm_password?.message}
            />
          )}
        />
      </View> */}

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={[
          styles.continueButton,
          signupMutation.isLoading && styles.isLoadingBTN,
        ]}
      >
        <Text style={styles.continueButtonText}>
          {signupMutation.isLoading ? (
            <Loader color="#D17842" size={20} />
          ) : (
            'sign up'
          )}
        </Text>
      </TouchableOpacity>
      <View style={styles.LoginContainer}>
        <Text style={styles.signUpText}>if you already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

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
    textTransform: 'capitalize',
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
  isLoadingBTN: {
    backgroundColor: '#252A32',
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
  LoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 3,
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
