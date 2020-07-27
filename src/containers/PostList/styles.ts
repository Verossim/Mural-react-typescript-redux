import styled from 'styled-components';

export const Posts = styled.div`
  margin-top: 80px;
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
  display: block;

  a {
    background: #fff;
    border-radius: 3px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    box-shadow: -12px 7px 32px -11px rgba(138, 130, 138, 1);

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    a + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3a3a3a;
      }

      p {
        font-size: 18px;
        color: #3d3d4d;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #a8a8b3;
    }
  }
`;
