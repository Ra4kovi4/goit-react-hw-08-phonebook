import * as yup from 'yup';
import 'yup-phone';

export const YupValidationRegistration = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Too Short !')
    .max(30, 'Too Long !')
    .required('Please enter your name'),

  email: yup.string().email('Enter a Vaid Email').required('Email is Required'),

  password: yup
    .string()
    .required('Enter Your Password')
    // .matches(PasswordRegEx, 'Uppercase Lowercase Special char Required')
    .min(8, 'Password Should be minimum 8 character')
    .max(50, 'Too long'),
});

export const YupValidationLoginForm = yup.object().shape({
  email: yup.string().email('Enter a Vaid Email').required('Email is Required'),

  password: yup
    .string()
    .required('Enter Your Password')
    .min(8, 'Password Should be minimum 8 character')
    .max(50, 'Too long'),
});

export const YupValidationLAddContactsForm = yup.object().shape({
  name: yup.string().required('The name must contain only letters and spaces.'),
  number: yup
    .string()
    .phone(null, true, 'Number must contain 10 digits')
    .required(),
});
