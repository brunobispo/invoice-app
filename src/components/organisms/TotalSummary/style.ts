import styled from "styled-components";

export const Container = styled.ul`
  background: ${({ theme }) => theme.paperColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  margin: 0;
`;

export const Item = styled.li`
  list-style: none;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 14px;
  margin: 0 0 7px 0;
`;

export const Value = styled.span<{
  isFeatured?: boolean;
  variant?: "paid" | "refunded" | "pending";
}>`
  font-size: ${({ isFeatured }) => (isFeatured ? "36px" : "24px")};
  font-weight: 300;
  color: ${({ variant, theme }) =>
    variant
      ? {
          pending: theme.pendingColor,
          paid: theme.paidColor,
          refunded: theme.refundedColor,
        }[variant]
      : "inherit"};
`;
