import { v4 as uuid } from "uuid";
import { InvoiceType } from "types";
import * as isoDate from "helpers/isoDate";

const invoices: { [key: string]: InvoiceType } = {};
const firstNames = ["Bruno", "Mark", "Anne", "Zuke"];
const lastNames = ["Bispo", "Marley", "Jobs", "Gates"];
const now = new Date();

function shuffle(values: any[]) {
  return values[Math.round(Math.random() * (values.length - 1))];
}

for (let i = 0; i < 100; i++) {
  const id = uuid();
  const client = `${shuffle(firstNames)} ${shuffle(lastNames)}`;
  const amount = Math.random() * 5000 - 2500;
  const isPaid = shuffle([true, false]);
  const creation = isoDate.format(
    new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + Math.random() * (30 * 6) - 30 * 3
    )
  );

  invoices[id] = { id, creation, client, amount, isPaid };
}

export default invoices;
