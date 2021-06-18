import { InvoiceType } from "types";
import { createReducer } from "@reduxjs/toolkit";
import {
  cancelInvoice,
  deleteInvoice,
  markInvoiceAsPaid,
  newInvoice,
  saveInvoice,
} from "./actions";

type InvoicesState = {
  list: { [key: string]: InvoiceType };
  creating: InvoiceType["id"] | null;
  editing: InvoiceType | null;
};

const items = [
  {
    creation: new Date(),
    client: "Bruno Bispo",
    id: "bf67e1af6346e6a15318553a35d3a828941d552d",
    amount: 23.32,
    isPaid: false,
  },
  {
    creation: new Date(),
    client: "Bruno Bispo",
    id: "cf67e1af6346e6a15318553a35d3a828941d552d",
    amount: 23.32,
    isPaid: true,
  },
  {
    creation: new Date(),
    client: "Bruno Bispo",
    id: "ff67e1af6346e6a15318553a35d3a828941d552d",
    amount: -23.32,
    isPaid: true,
  },
];

const initialState: InvoicesState = {
  list: items.reduce<InvoicesState["list"]>((map, item) => {
    map[item.id] = item;
    return map;
  }, {}),
  editing: null,
  creating: null,
};

export default createReducer(initialState, (builder) => {
  builder.addCase(newInvoice, (state, { payload }) => {
    state.creating = payload.id;
  });

  builder.addCase(saveInvoice, (state, { payload }) => {
    state.list[payload.id] = payload;
  });

  builder.addCase(cancelInvoice, (state) => {
    state.creating = null;
    state.editing = null;
  });

  builder.addCase(deleteInvoice, (state, { payload }) => {
    delete state.list[payload];
  });

  builder.addCase(markInvoiceAsPaid, (state, { payload }) => {
    state.list[payload].isPaid = true;
  });
});
