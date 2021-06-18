import IconButton from "components/atoms/IconButton";
import { ReactComponent as Icon } from "./icon.svg";
import { forwardRef } from "react";

type MoreButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

const MoreButton = forwardRef<HTMLButtonElement, MoreButtonProps>(
  ({ onClick, disabled = false }, ref) => (
    <IconButton ref={ref} onClick={onClick} disabled={disabled}>
      <Icon width={15} height={15} />
    </IconButton>
  )
);

export default MoreButton;
