import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
  border: 2px solid blue;
  padding: 15px 10px;
  border-radius: 15px;
  box-shadow: 27px -11px 35px -15px rgba(0, 0, 0, 0.45);
`;
export const FailedMessage = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: 'red';
`;
