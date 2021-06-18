import { useRef, useState } from "react";
import { connect } from "react-redux";

import { InvoiceType } from "types";
import MoreButton from "components/molecules/MoreButton";
import MenuItem from "components/molecules/MenuItem";
import Menu from "components/molecules/Menu";
import { RootState, AppDispatch } from "state/store";
import { editInvoice, markInvoiceAsPaid, refundInvoice } from "state/invoices";

type InvoiceMenuProps = Pick<InvoiceType, "id" | "amount" | "isPaid"> & {
  onEdit: () => void;
  onRefund: () => void;
  onMarkAsPaid: () => void;
};

const InvoiceMenu = ({
  amount,
  isPaid,
  onEdit,
  onRefund,
  onMarkAsPaid,
}: InvoiceMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ellipse = useRef<HTMLButtonElement>(null);

  return (
    <>
      <MoreButton ref={ellipse} onClick={() => setIsOpen(true)} />
      <Menu isOpen={isOpen} anchor={ellipse} onClose={() => setIsOpen(false)}>
        {!isPaid && (
          <MenuItem
            onClick={() => {
              setIsOpen(false);
              onMarkAsPaid();
            }}
          >
            Mark as {amount > 0 ? "paid" : "refunded"}
          </MenuItem>
        )}
        {isPaid && amount > 0 && (
          <MenuItem
            onClick={() => {
              setIsOpen(false);
              onRefund();
            }}
          >
            Refund
          </MenuItem>
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
  onMarkAsPaid: () => dispatch(markInvoiceAsPaid(ownProps.id)),
  onRefund: () => dispatch(refundInvoice(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceMenu);
