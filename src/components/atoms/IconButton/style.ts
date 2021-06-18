import styled from "styled-components";

export const Container = styled.button`
  font-family: inherit;
  font-size: 14px;
  font-weight: bold;
  border: 0;
  background: none;
  padding: 0;
  width: 15px;
  display: inline-flex;

  :hover {
    opacity: 0.5;
  }

  :disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;
