import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  table {
  border-collapse: collapse;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  body {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    color: ${({ theme }) => theme.colors.primayText};
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;
