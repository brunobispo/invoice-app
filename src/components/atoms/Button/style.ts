import styled, { css } from "styled-components";
import color from "color";

export const Container = styled.button<{
  isGroup: boolean;
  variant: "primary" | "secondary";
  isCompact: boolean;
  isResponsive: boolean;
}>`
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  margin: 0;
  font-family: inherit;
  font-size: 14px;
  padding: 10px ${({ isCompact }) => (isCompact ? "10px" : "20px")};
  font-weight: 500;

  :disabled {
    color: inherit;
  }

  ${({ variant, theme }) => {
    const background = {
      primary: theme.primaryColor,
      secondary: color(theme.primaryColor).lightness(80).toString(),
    }[variant];

    return css`
      background: ${background};
      color: ${color(background).isDark() ? "white" : "black"};

      :hover:not(:disabled) {
        background: ${color(background).darken(0.15).toString()};
      }

      :active:not(:disabled) {
        background: ${color(background).darken(0.3).toString()};
      }
    `;
  }}

  ${({ isGroup }) =>
    isGroup &&
    css`
      :not(:first-child) {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }

      :not(:last-child) {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }
    `}

  ${({ isResponsive }) =>
    isResponsive &&
    css`
      @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
        flex: 1;
      }
    `}
`;
