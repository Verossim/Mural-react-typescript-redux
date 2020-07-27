import styled from 'styled-components';
import { shade } from 'polished';

export const Cadastro = styled.div`
  margin-top: 80px;
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
  display: block;

  input {
    height: 30px;
    padding: 0 24px;
    border: 0;
    border-radius: 3px;
    margin-top: 15px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  form {
    display: flex;
    flex: 1;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    padding: 24px;
    width: 400px;
  }

  button {
    width: 90px;
    height: 30px;
    background: #2ca114;
    border-radius: 3px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#2ca114')};
    }
  }
`;
