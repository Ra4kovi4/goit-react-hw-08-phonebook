import styled from 'styled-components';

export const Name = styled.p`
  display: inline-block;
  font-size: 20px;
  padding-top: 15px;
  margin-bottom: 15px;
  margin-right: 5px;
`;

export const PhoneLink = styled.a`
  display: inline-block;
  color: blue;
  font-size: 20px;
  text-decoration: none;
`;
export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  height: 40px;
  background-color: firebrick;
  border-radius: 15px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 12px 10px 17px -3px rgba(51, 46, 51, 0.71);
  :hover,
  :focus {
    background-color: red;
  }
`;
