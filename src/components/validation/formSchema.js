import * as yup from 'yup';

export default yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be at least 3 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(4, 'Password must be at least 3 characters')
    .required('Password is required'),
  email: yup.string().min(5, 'Email must be at least 5 characters'),
});
