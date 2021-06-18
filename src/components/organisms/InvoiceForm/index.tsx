import { InvoiceType } from "types";
import Cell from "components/atoms/Cell";
import { Input, Select } from "./style";
import isoDate from "helpers/isoDate";
import { useState } from "react";
import SaveButton from "components/molecules/SaveButton";

type InvoiceFormProps = {
  initialData: InvoiceType;
  onSubmit: (data: InvoiceType) => void;
};

const InvoiceForm = ({ initialData, onSubmit }: InvoiceFormProps) => {
  const [data, setData] = useState(() => ({
    id: initialData.id,
    creation: isoDate(initialData.creation),
    client: initialData.client,
    amount: initialData.amount.toString(),
    isPaid: initialData.isPaid ? "1" : "0",
  }));

  const isValid = Boolean(
    data.creation && data.client && parseFloat(data.amount)
  );

  const handleSubmit = () => {
    onSubmit({
      id: data.id,
      client: data.client,
      creation: new Date(data.creation),
      amount: parseFloat(data.amount),
      isPaid: data.isPaid === "1",
    });
  };

  return (
    <>
      <Input
        type="date"
        placeholder="Date"
        value={data.creation}
        onChange={(event) =>
          setData((data) => ({ ...data, creation: event.target.value }))
        }
      />
      <Cell aria-label="Id">{data.id.substr(0, 7)}</Cell>
      <Input
        type="text"
        placeholder="Client"
        value={data.client}
        onChange={(event) =>
          setData((data) => ({ ...data, client: event.target.value }))
        }
      />
      <Input
        type="number"
        placeholder="Amount"
        value={data.amount}
        min="1"
        step="any"
        onChange={(event) =>
          setData((data) => ({ ...data, amount: event.target.value }))
        }
      />
      <Select
        value={data.isPaid}
        onChange={(event) => {
          setData((data) => ({ ...data, isPaid: event.target.value }));
        }}
      >
        <option value={0}>Pending</option>
        <option value={1}>
          {parseFloat(data.amount) > 0 ? "Paid" : "Refunded"}
        </option>
      </Select>

      <SaveButton onClick={handleSubmit} disabled={!isValid} />
    </>
  );
};

export default InvoiceForm;
