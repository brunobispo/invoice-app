import { forwardRef } from "react";
import { Container, Label } from "./style";

type MoreButtonProps = {
  onClick: () => void;
};

const MoreButton = forwardRef<HTMLButtonElement, MoreButtonProps>(
  ({ onClick }, ref) => (
    <Container ref={ref} onClick={onClick}>
      <Label>…</Label>
    </Container>
  )
);

export default MoreButton;
