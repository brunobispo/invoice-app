import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { Container } from "./style";
import Backdrop from "components/atoms/Backdrop";

type MenuProps = {
  children: React.ReactNode;
  isOpen: boolean;
  anchor: React.RefObject<HTMLElement>;
  onClose: () => void;
};

const Menu = ({ children, isOpen, onClose, anchor }: MenuProps) => {
  const [rect, setRect] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isOpen && anchor.current)
      setRect(anchor.current.getBoundingClientRect());
  }, [isOpen, anchor]);

  return isOpen
    ? createPortal(
        <>
          <Backdrop onClick={onClose} />
          <Container y={rect.top} x={rect.left}>
            {children}
          </Container>
        </>,
        document.body
      )
    : null;
};

export default Menu;
