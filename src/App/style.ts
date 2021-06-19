import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.backgroundColor};
    font-family: Roboto, sans-serif;

    @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
      padding-bottom: 35px;
    }
  }
`;
