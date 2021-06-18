import { useState } from "react";

import { InvoiceType } from "types";
import AmountText from "components/atoms/AmountText";
import StatusText from "components/atoms/StatusText";
import Backdrop from "components/atoms/Backdrop";
import Cell from "components/atoms/Cell";
import InvoiceMenu from "components/organisms/InvoiceMenu";
import InvoiceForm from "components/organisms/InvoiceForm";
import date from "helpers/date";

import { Container, Panel } from "./style";

const InvoiceItem = ({ creation, id, client, amount, isPaid }: InvoiceType) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Container>
      {isEditing && <Backdrop onClick={() => setIsEditing(false)} />}

      <Panel isElevated={isEditing}>
        {!isEditing ? (
          <>
            <Cell aria-label="Date">{date(creation)}</Cell>
            <Cell aria-label="Id">{id.substr(0, 7)}</Cell>
            <Cell aria-label="Client">{client}</Cell>
            <Cell aria-label="Amount">
              <AmountText amount={amount} />
            </Cell>
            <Cell aria-label="Status">
              <StatusText amount={amount} isPaid={isPaid} />
            </Cell>
            <InvoiceMenu
              amount={amount}
              isPaid={isPaid}
              onEdit={() => setIsEditing(true)}
            />
          </>
        ) : (
          <InvoiceForm
            initialData={{ creation, id, client, amount, isPaid }}
            onSubmit={console.log}
          />
        )}
      </Panel>
    </Container>
  );
};

export default InvoiceItem;
