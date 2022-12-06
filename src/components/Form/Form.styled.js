import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const SearchForma = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid blue;
  border-radius: 15px;
  padding: 10px;
`;
export const Label = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 3px;
`;

export const Input = styled(Field)`
  display: block;
  width: 350px;
  height: 50px;
  text-align: center;
  border-radius: 15px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  box-shadow: 12px 10px 17px -3px rgba(51, 46, 51, 0.71);
`;

export const Button = styled.button`
  display: block;
  width: 150px;
  height: 50px;
  background-color: blue;
  color: white;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 12px 10px 17px -3px rgba(51, 46, 51, 0.71);
`;
export const Error = styled(ErrorMessage)`
  width: 350px;
  display: block;
  font-size: 14px;
  color: rgba(255, 99, 71, 0.6);
`;
