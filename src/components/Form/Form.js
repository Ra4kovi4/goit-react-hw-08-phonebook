import { Formik } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import {
  SearchForma,
  Label,
  Input,
  Button,
  Error,
  PersonIcon,
  PhoneIcon,
} from './Form.styled';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

const initialValues = {
  name: '',
  number: '',
};
const SignupSchema = Yup.object().shape({
  name: Yup.string().required(
    'The name must contain only letters and spaces. '
  ),
  number: Yup.string()
    .phone(null, true, 'Number must contain 10 digits')
    .required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  //Сабмит формы
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    //Проверка на повторение имени и номера телефона в контактах
    const isIncludeName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const isIncludeNumber = contacts.some(
      contact => contact.number.toLowerCase() === number.toLowerCase()
    );

    if (isIncludeName) {
      resetForm();
      return Report.failure('', `${name} is already in contact`);
    } else if (isIncludeNumber) {
      resetForm();
      const { name } = contacts.find(contact => contact.number === number);
      return Report.failure('', `${number} is already in contact as ${name}`);
    }

    //Добавление нового контакта
    dispatch(addContact(values));
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
          <PersonIcon />
          Name
          <Input name="name" type="text" placeholder="John Doe" />
        </Label>
        <Error name="name" component="p" />
        <Label htmlFor="number">
          <PhoneIcon />
          Number
          <Input name="number" type="tel" placeholder="1234567890" />
        </Label>
        <Error name="number" component="p" />
        <Button type="submit">Add contact</Button>
      </SearchForma>
    </Formik>
  );
};
