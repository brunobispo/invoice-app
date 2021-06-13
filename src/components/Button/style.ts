import styled, { css } from "styled-components";
import color from "color";

export const Container = styled.button<{
  isGroup: boolean;
  variant: "primary" | "secondary";
}>`
  border-radius: 10px;
  border: 0;
  font-family: inherit;
  padding: 10px;
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

      :hover:not(:disabled) {
        background: ${color(background).lightness(70).toString()};
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
`;
