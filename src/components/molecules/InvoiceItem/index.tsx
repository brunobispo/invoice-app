import { useRef, useState } from "react";

import { InvoiceType } from "types";
import AmountText from "components/atoms/AmountText";
import MoreButton from "components/atoms/MoreButton";
import StatusText from "components/atoms/StatusText";
import MenuItem from "components/molecules/MenuItem";
import Menu from "components/organisms/Menu";

import { Container, Item } from "./style";

const InvoiceItem = ({ creation, id, client, amount, isPaid }: InvoiceType) => {
  const button = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container isOpen={isOpen}>
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

      <MoreButton ref={button} onClick={() => setIsOpen(true)} />
      <Menu isOpen={isOpen} anchor={button} onClose={() => setIsOpen(false)}>
        {!isPaid && <MenuItem>Mark as {amount > 0 ? "paid" : "refunded"}</MenuItem>}
        {isPaid && amount > 0 && <MenuItem>Refund</MenuItem>}
        <MenuItem isDanger>Delete</MenuItem>
      </Menu>
    </Container>
  );
};

export default InvoiceItem;
