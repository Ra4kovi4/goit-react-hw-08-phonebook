import { Typography, Button } from '@mui/material';
import styled from '@emotion/styled';

export const NavLinkSX = styled(Typography)`
  display: flex;
  align-items: center;
  justifycontent: center;
  padding: 3px 6px;
  color: #fff;
  background-color: transparent;
  border: none;
  border-radius: 6px;
  gap: 3px;
  cursor: pointer;
  text-decoration: none;
  :hover,
  :focus {
    color: primary.main;
    background-color: #b39ddb;
  }
  &.active {
    color: primary.main;
    background-color: #b39ddb;
  }
`;
export const ButtonSX = styled(Button)`
  display: flex;
  align-items: center;
  padding: 3px 6px;
  color: #fff;
  background-color: transparent;
  border: 1px solid;
  border-radius: 6px;
  gap: 3px;
  font-size: 12px;
  text-transform: none;
  :hover,
  :focus {
    color: primary.main;
    background-color: #b39ddb;
  }
  &.active {
    color: primary.main;
    background-color: #b39ddb;
  }
`;
