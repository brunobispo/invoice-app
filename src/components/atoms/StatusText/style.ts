import styled from "styled-components";

export const Container = styled.span<{ isPositive: boolean; isPaid: boolean }>`
  color: ${({ theme, isPaid, isPositive }) =>
    isPaid
      ? isPositive
        ? theme.paidColor
        : theme.refundedColor
      : theme.pendingColor};
`;
