import { forwardRef } from "react";
import { Container } from "./style";

type MoreButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
};

const IconButton = forwardRef<HTMLButtonElement, MoreButtonProps>(
  ({ onClick, children, disabled = false }, ref) => (
    <Container ref={ref} onClick={onClick} disabled={disabled}>
      {children}
    </Container>
  )
);

export default IconButton;
