import IconButton from "components/atoms/IconButton";
import { ReactComponent as Icon } from "./icon.svg";
import { forwardRef } from "react";

type MoreButtonProps = {
  onClick: () => void;
};

const MoreButton = forwardRef<HTMLButtonElement, MoreButtonProps>(
  ({ onClick }, ref) => (
    <IconButton ref={ref} onClick={onClick}>
      <Icon width={12} height={12} />
    </IconButton>
  )
);

export default MoreButton;
