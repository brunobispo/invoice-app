import { connect } from "react-redux";

import { InvoiceType } from "types";
import AmountText from "components/atoms/AmountText";
import StatusText from "components/atoms/StatusText";
import Cell from "components/atoms/Cell";
import InvoicePane from "components/molecules/InvoicePane";
import InvoiceMenu from "components/organisms/InvoiceMenu";
import date from "helpers/date";
import { RootState } from "state/store";

const InvoiceItem = ({ creation, id, client, amount, isPaid }: InvoiceType) => (
  <InvoicePane>
    <Cell aria-label="Date">{date(creation)}</Cell>
    <Cell aria-label="Id">{id.substr(0, 7)}</Cell>
    <Cell aria-label="Client">{client}</Cell>
    <Cell aria-label="Amount">
      <AmountText amount={amount} />
    </Cell>
    <Cell aria-label="Status">
      <StatusText amount={amount} isPaid={isPaid} />
    </Cell>
    <InvoiceMenu id={id} />
  </InvoicePane>
);

type ConnectedInvoiceItemProps = {
  id: InvoiceType["id"];
};

const mapStateToProps = (
  state: RootState,
  ownProps: ConnectedInvoiceItemProps
) => {
  const { creation, id, client, amount, isPaid } =
    state.invoices.list[ownProps.id];
  return { creation, id, client, amount, isPaid };
};

export default connect(mapStateToProps)(InvoiceItem);
