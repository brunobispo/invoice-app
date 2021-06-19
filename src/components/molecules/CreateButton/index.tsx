import Button from "components/atoms/Button";
import { Container } from "./style";

type CreateButtonProps = {
  onClick: () => void;
};

const CreateButton = ({ onClick }: CreateButtonProps) => (
  <Container alignItems="right">
    <Button isResponsive onClick={onClick}>
      + Create Invoice
    </Button>
  </Container>
);

export default CreateButton;
