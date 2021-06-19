import styled, { css } from "styled-components";

export const Container = styled.li`
  list-style: none;

  & + & {
    margin-top: 7px;
  }
`;

export const Panel = styled.div<{ isElevated: boolean }>`
  display: grid;
  position: relative;
  grid-template-columns:
    minmax(77px, 110px) minmax(55px, 100px)
    minmax(100px, auto) minmax(55px, 100px)
    minmax(60px, 100px) 20px;
  gap: 5px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.paperColor};
  padding: 0 25px;
  height: 49px;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    padding: 0 15px;
    grid-template-columns:
      min(77px, 110px) minmax(50px, auto)
      min(70px, 100px) min(60px, 100px) 20px;
  }

  ${({ isElevated }) =>
    isElevated &&
    css`
      z-index: 2;
      box-shadow: ${({ theme }) => theme.boxShadow};
    `}
`;
