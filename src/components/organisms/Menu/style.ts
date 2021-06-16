import styled from "styled-components";

export const Container = styled.ul<{ x: number; y: number }>`
  position: absolute;
  z-index: 3;
  left: ${({ x }) => x - 175}px;
  top: ${({ y }) => y + 20}px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 5px 0;
  min-width: 190px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.paperColor};
`;

export const Backdrop = styled.div`
  opacity: 0.5;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: ${({ theme }) => theme.backgroundColor};
`;
