import styled from "styled-components";

export const Backdrop = styled.div`
  opacity: 0.5;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: ${({ theme }) => theme.backgroundColor};
`;

export default Backdrop;
