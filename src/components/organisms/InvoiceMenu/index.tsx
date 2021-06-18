import { useRef, useState } from "react";
import { InvoiceType } from "types";
import MoreButton from "components/molecules/MoreButton";
import MenuItem from "components/molecules/MenuItem";
import Menu from "components/organisms/Menu";

type InvoiceMenuProps = Pick<InvoiceType, "amount" | "isPaid"> & {
  onEdit: () => void;
};

const InvoiceMenu = ({ amount, isPaid, onEdit }: InvoiceMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ellipse = useRef<HTMLButtonElement>(null);

  return (
    <>
      <MoreButton ref={ellipse} onClick={() => setIsOpen(true)} />
      <Menu isOpen={isOpen} anchor={ellipse} onClose={() => setIsOpen(false)}>
        {!isPaid && (
          <MenuItem onClick={() => setIsOpen(false)}>
            Mark as {amount > 0 ? "paid" : "refunded"}
          </MenuItem>
        )}
        {isPaid && amount > 0 && (
          <MenuItem onClick={() => setIsOpen(false)}>Refund</MenuItem>
        )}
        <MenuItem
          onClick={() => {
            setIsOpen(false);
            onEdit();
          }}
        >
          Edit
        </MenuItem>
        <MenuItem onClick={() => setIsOpen(false)} isDanger>
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};

export default InvoiceMenu;
