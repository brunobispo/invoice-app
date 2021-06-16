import styled from "styled-components";
import color from "color";

export const Container = styled.li`
  list-style: none;
`;

export const Button = styled.button<{ isDanger: boolean }>`
  font-size: 14px;
  padding: 10px 15px;
  width: 100%;
  border: none;
  background: none;
  text-align: left;
  color: ${({ isDanger }) => (isDanger ? "#E90000" : "inherit")};

  :hover {
    background: ${({ theme }) =>
      color(theme.primaryColor).lightness(95).toString()};
  }
`;
