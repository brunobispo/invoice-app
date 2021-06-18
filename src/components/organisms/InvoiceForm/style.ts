import styled, { css } from "styled-components";

const style = css`
  border: none;
  background: none;
  font-family: inherit;
  font-size: 14px;
  padding: 5px;
  margin-left: -5px;

  ::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const Input = styled.input`
  ${style}
`;

export const Select = styled.select`
  ${style}
  appearance: none;
`;
