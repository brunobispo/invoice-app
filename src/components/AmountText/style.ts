import styled from "styled-components";

export const Container = styled.span<{ isPositive: boolean }>`
  color: ${({ isPositive }) => (isPositive ? "inherit" : "#B20000")};
`;
