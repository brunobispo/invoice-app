import styled, { css } from "styled-components";

const breakpoint = "600px";

export const Container = styled.ul`
  background: ${({ theme }) => theme.paperColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  align-items: center;
  padding: 25px;
  margin: 0;

  @media screen and (max-width: ${breakpoint}) {
    flex-wrap: wrap;
  }
`;

export const Item = styled.li<{ isFeatured?: boolean }>`
  flex: 1;
  padding: 0 10px;
  list-style: none;
  text-align: center;

  ${({ isFeatured }) =>
    isFeatured &&
    css`
      @media screen and (max-width: ${breakpoint}) {
        flex: 100%;
      }
    `}
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

  ${({ isFeatured }) =>
    !isFeatured &&
    css`
      @media screen and (max-width: ${breakpoint}) {
        font-size: 18px;
      }
    `}
`;
