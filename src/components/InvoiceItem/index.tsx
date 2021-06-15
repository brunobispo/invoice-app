import { InvoiceType } from "types";
import StatusText from "components/StatusText";
import AmountText from "components/AmountText";

import { Container, Item } from "./style";

const InvoiceItem = ({ creation, id, client, amount, isPaid }: InvoiceType) => (
  <Container>
    <Item aria-label="Date">
      {creation.toLocaleString("en-US", { day: "2-digit", month: "short" })}
    </Item>
    <Item aria-label="Id">{id.substr(0, 7)}</Item>
    <Item aria-label="Client">{client}</Item>
    <Item aria-label="Amount">
      <AmountText amount={amount} />
    </Item>
    <Item aria-label="Status">
      <StatusText amount={amount} isPaid={isPaid} />
    </Item>
  </Container>
);

export default InvoiceItem;
