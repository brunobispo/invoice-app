import styled from "styled-components";

export const Container = styled.span<{ isPositive: boolean; isPaid: boolean }>`
  color: ${({ isPaid, isPositive }) =>
    isPaid ? (isPositive ? "#55C000" : "#B20000") : "#A8A8A8"};
`;
