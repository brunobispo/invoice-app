import styled from "styled-components";

export const Container = styled.ul<{ x: number; y: number }>`
  position: absolute;
  z-index: 3;
  left: ${({ x }) => x - 175}px;
  top: ${({ y }) => y + 20}px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin: 0;
  padding: 5px 0;
  min-width: 190px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.paperColor};
`;
