import { useRef, useState } from "react";
import { connect } from "react-redux";

import { InvoiceType } from "types";
import MoreButton from "components/molecules/MoreButton";
import MenuItem from "components/molecules/MenuItem";
import Menu from "components/organisms/Menu";
import { RootState, AppDispatch } from "state/store";
import { editInvoice } from "state/invoices";

type InvoiceMenuProps = Pick<InvoiceType, "id" | "amount" | "isPaid"> & {
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

type ConnectedInvoiceMenuProps = {
  id: InvoiceType["id"];
};

const mapStateToProps = (
  state: RootState,
  ownProps: ConnectedInvoiceMenuProps
) => ({
  amount: state.invoices.list[ownProps.id].amount,
  isPaid: state.invoices.list[ownProps.id].isPaid,
});

const mapDispatchToProps = (
  dispatch: AppDispatch,
  ownProps: ConnectedInvoiceMenuProps
) => ({
  onEdit: () => dispatch(editInvoice(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceMenu);
