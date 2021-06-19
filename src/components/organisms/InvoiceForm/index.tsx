import { InvoiceType } from "types";
import Cell from "components/atoms/Cell";
import { Input, Select } from "./style";
import { useState } from "react";
import SaveButton from "components/molecules/SaveButton";
import InvoicePane from "components/molecules/InvoicePane";
import * as isoDate from "helpers/isoDate";
import * as shortDate from "helpers/shortDate";

type InvoiceFormProps = {
  initialData: Partial<InvoiceType>;
  onSubmit: (data: InvoiceType) => void;
  onCancel: () => void;
};

const InvoiceForm = ({ initialData, onSubmit, onCancel }: InvoiceFormProps) => {
  const [data, setData] = useState(() => ({
    id: initialData.id ?? "",
    creation:
      (initialData.creation &&
        shortDate.format(isoDate.parse(initialData.creation))) ??
      "",
    client: initialData.client ?? "",
    amount: initialData.amount?.toString() ?? "",
    isPaid: initialData.isPaid ? "1" : "0",
  }));

  const isValid = Boolean(
    data.id &&
      data.client &&
      shortDate.parse(data.creation).getTime() &&
      data.client &&
      data.amount &&
      parseFloat(data.amount)
  );

  const handleSubmit = () => {
    onSubmit({
      id: data.id,
      client: data.client,
      creation: isoDate.format(shortDate.parse(data.creation)),
      amount: parseFloat(data.amount),
      isPaid: data.isPaid === "1",
    });
  };

  return (
    <InvoicePane isElevated onClose={onCancel}>
      <Input
        type="text"
        autoFocus
        placeholder="mm/dd/yyyy"
        value={data.creation}
        onChange={(event) =>
          setData((data) => ({ ...data, creation: event.target.value }))
        }
      />
      <Cell hideMobile aria-label="Id">
        {data.id?.substr(0, 7)}
      </Cell>
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
          {!data.amount || parseFloat(data.amount) > 0 ? "Paid" : "Refunded"}
        </option>
      </Select>

      <SaveButton onClick={handleSubmit} disabled={!isValid} />
    </InvoicePane>
  );
};

export default InvoiceForm;
