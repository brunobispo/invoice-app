import styled from "styled-components";

export const Container = styled.li<{ isOpen: boolean }>`
  display: grid;
  position: relative;
  grid-template-columns: 100px 100px auto 100px 100px 15px;
  gap: 5px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.paperColor};
  padding: 15px 25px;
  z-index: ${({ isOpen }) => (isOpen ? "2" : "auto")};

  & + & {
    margin-top: 7px;
  }
`;

export const Item = styled.div`
  font-size: 14px;
`;
