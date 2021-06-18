import { Container, Button } from "./style";

type MenuItemProps = {
  children: React.ReactNode;
  isDanger?: boolean;
  onClick: () => void;
};

const MenuItem = ({ children, onClick, isDanger = false }: MenuItemProps) => (
  <Container>
    <Button onClick={onClick} isDanger={isDanger}>
      {children}
    </Button>
  </Container>
);

export default MenuItem;
