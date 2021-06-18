import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const theme = {
  pageMaxWidth: "720px",
  backgroundColor: "#EBEBEB",
  primaryColor: "#707070",
  borderRadius: "10px",
  paperColor: "#FFF",
  paidColor: "#55C000",
  refundedColor: "#B30000",
  pendingColor: "#B8B8B8",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);

export default ThemeProvider;
