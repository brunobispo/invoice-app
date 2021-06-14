import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const theme = {
  pageMaxWidth: "720px",
  backgroundColor: "#EBEBEB",
  primaryColor: "#707070",
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);

export default ThemeProvider;
