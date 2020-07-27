import styled from 'styled-components';
import { shade } from 'polished';

export const CreateButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 80px 0 500px;
  height: 80px;
  width: 400px;
  background: #2ca114;
  border-radius: 15px;
  border: 0;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background: ${shade(0.2, '#2ca114')};
  }
`;