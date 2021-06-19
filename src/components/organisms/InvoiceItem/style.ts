import styled from "styled-components";

export const Container = styled.li`
  list-style: none;

  & + & {
    margin-top: 7px;
  }
`;
