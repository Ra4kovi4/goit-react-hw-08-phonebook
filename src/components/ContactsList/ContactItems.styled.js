import styled from 'styled-components';

export const Name = styled.p`
  display: inline-block;
  font-size: 20px;
  font-weight: 600;
  padding: 0;
  margin: 0;
`;

export const Number = styled.p`
  display: inline-block;

  font-size: 20px;
  padding: 0;
  margin: 0 0 0 5px;
`;
export const Button = styled.button`
  display: inline-block;
  margin-left: auto;

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
