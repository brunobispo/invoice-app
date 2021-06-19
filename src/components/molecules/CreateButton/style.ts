import styled from "styled-components";
import Section from "components/atoms/Section";

export const Container = styled(Section)`
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    display: flex;
    margin: 0;
    padding: 10px;
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
