import Cell from "components/atoms/Cell";
import styled from "styled-components";

export const Container = styled.section`
  margin: 0;
  padding: 0;
`;

export const Title = styled(Cell).attrs({ as: "h3" })`
  font-weight: bold;
  font-size: 12px;
  margin: 0;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns:
    minmax(77px, 110px) minmax(55px, 100px)
    minmax(100px, auto) minmax(55px, 100px)
    minmax(60px, 100px) 20px;
  gap: 5px;
  padding: 0 25px;
  margin-bottom: 10px;

  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    padding: 0 15px;
    grid-template-columns:
      min(77px, 110px) minmax(50px, auto)
      min(70px, 100px) min(60px, 100px) 20px;
  }
`;
