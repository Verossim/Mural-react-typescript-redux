import styled from 'styled-components';
import { shade } from 'polished';

export const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #124b77;
  height: 46px;

  a {
    color: #e8f3fc;
    padding-left: 15px;
    text-decoration: none;
    font-weight: bold;
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;

  input {
    height: 30px;
    padding: 0 24px;
    border: 0;
    border-radius: 3px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 90px;
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
  }
`;

export const Profile = styled.div`
  display: flex;
  width: 90px;
  align-items: center;
  padding-right: 15px;
  justify-content: space-between;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  height: 16px;
  margin-top: -30px;

  p {
    color: #e8f3fc;
    font-size: 14px;
    font-weight: bold;
  }
`;
