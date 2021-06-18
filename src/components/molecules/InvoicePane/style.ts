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
  grid-template-columns: 110px 100px auto 100px 100px 15px;
  gap: 5px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.paperColor};
  padding: 0 25px;
  height: 49px;
  align-items: center;

  ${({ isElevated }) =>
    isElevated &&
    css`
      z-index: 2;
      box-shadow: ${({ theme }) => theme.boxShadow};
    `}
`;
