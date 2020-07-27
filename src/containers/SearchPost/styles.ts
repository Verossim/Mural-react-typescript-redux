import styled from 'styled-components';
import { shade } from 'polished';

export const Input = styled.input`
    height: 30px;
    padding: 0 24px;
    border: 0;
    border-radius: 3px;

    &::placeholder {
      color: #a8a8b3;
    }
`;

export const Button = styled.button`
    width: 90px;
    margin-left: 15px;
    height: 30px;
    background: #fff;
    border-radius: 3px;
    border: 0;
    color: #3a3a3a;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#fff')};
    }
`;

export const Form = styled.form`
  display: flex;
  padding: 30px;
  height: 16px;
  margin-top: -30px;


  p {
    color: #e8f3fc;
    font-size: 14px;
    font-weight: bold;
  }
`;