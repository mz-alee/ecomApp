import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().required('email is a required feild'),
  password: yup.string().required('password is a required feild'),
});
