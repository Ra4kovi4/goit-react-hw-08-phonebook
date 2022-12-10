import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';
export const FilterLabel = styled.label`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px 10px 10px;
  font-size: 16px;

  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 10px;
`;

export const FilterInput = styled.input`
  display: block;
  width: 250px;
  height: 50px;
  border-radius: 15px;
  padding: 10px 10px 10px 30px;
  box-shadow: 12px 10px 17px -3px rgba(51, 46, 51, 0.71);
  text-align: center;
`;
export const SearchIcon = styled(ImSearch)`
  position: absolute;
  left: 30%;
  top: 60%;
  width: 17x;
  height: 17px;
`;
