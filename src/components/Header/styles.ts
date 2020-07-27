import styled from 'styled-components';

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
