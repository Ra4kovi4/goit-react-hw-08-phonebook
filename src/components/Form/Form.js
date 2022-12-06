import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import { SearchForma, Label, Input, Button, Error } from './Form.styled';

const initialValues = {
  name: '',
  number: '',
};
const SignupSchema = Yup.object().shape({
  name: Yup.string().required(
    'The name must contain only letters and spaces. '
  ),
  number: Yup.string()
    .phone(null, 'Number must have 10 digits')

    .required(),
});

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
    >
      <SearchForma>
        <Label htmlFor="name">
          Name
          <Input name="name" type="text" placeholder="John Doe" />
          <Error name="name" component="p" />
        </Label>
        <Label htmlFor="number">
          Number
          <Input name="number" type="tel" placeholder="1234567890" />
          <Error name="number" component="p" />
        </Label>
        <Button type="submit">Add contact</Button>
      </SearchForma>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
