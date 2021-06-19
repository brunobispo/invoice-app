import styled from "styled-components";

export const Container = styled.button`
  font-family: inherit;
  font-size: 14px;
  font-weight: bold;
  border: 0;
  background: none;
  padding: 0;
  width: 25px;
  height: 25px;
  display: inline-flex;
  align-items: center;

  :hover {
    opacity: 0.5;
  }

  :disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;
