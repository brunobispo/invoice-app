import { Container, Button } from "./style";

type MenuItemProps = {
  children: React.ReactNode;
  isDanger?: boolean;
};

const MenuItem = ({ children, isDanger = false }: MenuItemProps) => (
  <Container>
    <Button isDanger={isDanger}>{children}</Button>
  </Container>
);

export default MenuItem;
