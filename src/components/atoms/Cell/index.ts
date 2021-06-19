import styled, { css } from "styled-components";

export const Cell = styled.div<{ hideMobile?: boolean }>`
  font-size: 14px;

  ${({ hideMobile }) =>
    hideMobile &&
    css`
      @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
        display: none;
      }
    `}
`;

export default Cell;
