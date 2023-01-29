import { Helmet } from 'react-helmet-async';
import { LoginForm } from '../LoginForm';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <LoginForm />
    </div>
  );
}
