import * as React from "react";
import { InvoiceType } from "types";
import { AppDispatch, RootState } from "state/store";
import InvoiceItem from "components/organisms/InvoiceItem";
import InvoiceForm from "components/organisms/InvoiceForm";

import { Container, Title, Header } from "./style";
import { connect } from "react-redux";
import { cancelInvoice, saveInvoice } from "state/invoices";

type InvoiceListProps = {
  items: Pick<InvoiceType, "id">[];
  creating: Partial<InvoiceType> | null;
  editing: InvoiceType | null;
  onSave: (data: InvoiceType) => void;
  onCancel: () => void;
};

const InvoiceList = ({
  items,
  creating,
  editing,
  onSave,
  onCancel,
}: InvoiceListProps) => {
  return (
    <Container>
      <Header aria-hidden>
        <Title>Date</Title>
        <Title>Id</Title>
        <Title>Client</Title>
        <Title>Amount</Title>
        <Title>Status</Title>
      </Header>

      {creating && (
        <InvoiceForm
          initialData={creating}
          onSubmit={onSave}
          onCancel={onCancel}
        />
      )}

      {items.map((item) => (
        <React.Fragment key={item.id}>
          {editing?.id !== item.id ? (
            <InvoiceItem id={item.id} />
          ) : (
            <InvoiceForm
              initialData={editing}
              onSubmit={onSave}
              onCancel={onCancel}
            />
          )}
        </React.Fragment>
      ))}
    </Container>
  );
};

const mapStateToProps = ({ invoices }: RootState) => ({
  creating: invoices.creating,
  editing: invoices.editingId ? invoices.list[invoices.editingId] : null,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onSave: (data: InvoiceType) => dispatch(saveInvoice(data)),
  onCancel: () => dispatch(cancelInvoice()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceList);
