import { Helmet } from 'react-helmet-async';
import { RegistrationForm } from '../RegistrationForm';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm />
    </div>
  );
}
