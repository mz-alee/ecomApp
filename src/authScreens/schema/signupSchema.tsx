import * as yup from 'yup';

export const SignupSchema = yup.object({
  name: yup.string().required('last name is a required feild'),
  // phone_number : yup.string().required('phone number is a required feild'),
  email: yup.string().required('email is a required feild'),
  password: yup.string().required('password is a required feild'),
  // confirm_password: yup
  //   .string()
  //   .oneOf([yup.ref('password')], 'password must be same')
  //   .required('confirm password is a required feild'),
});
