import styled from "styled-components";

const Section = styled.section<{ alignItems?: "right" | "left" }>`
  max-width: ${(props) => props.theme.pageMaxWidth};
  margin: 0 auto;
  margin-bottom: 10px;
  text-align: ${({ alignItems }) => alignItems};
`;

export default Section;
