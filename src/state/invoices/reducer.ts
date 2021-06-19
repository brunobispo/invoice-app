import { InvoiceType } from "types";
import { createReducer } from "@reduxjs/toolkit";
import {
  cancelInvoice,
  deleteInvoice,
  editInvoice,
  markInvoiceAsPaid,
  newInvoice,
  refundInvoice,
  saveInvoice,
} from "./actions";
import invoices from "mocks/invoices";

type InvoicesState = {
  list: { [key: string]: InvoiceType };
  creating: Partial<InvoiceType> | null;
  editingId: InvoiceType["id"] | null;
};

const initialState: InvoicesState = {
  list: invoices,
  editingId: null,
  creating: null,
};

export default createReducer(initialState, (builder) => {
  builder.addCase(newInvoice, (state, { payload }) => {
    state.creating = payload;
  });

  builder.addCase(editInvoice, (state, { payload }) => {
    state.creating = null;
    state.editingId = payload;
  });

  builder.addCase(saveInvoice, (state, { payload }) => {
    state.list[payload.id] = payload;
    state.editingId = null;
    state.creating = null;
  });

  builder.addCase(cancelInvoice, (state) => {
    state.creating = null;
    state.editingId = null;
  });

  builder.addCase(deleteInvoice, (state, { payload }) => {
    delete state.list[payload];
  });

  builder.addCase(markInvoiceAsPaid, (state, { payload }) => {
    state.list[payload].isPaid = true;
  });

  builder.addCase(refundInvoice, (state, { payload }) => {
    state.list[payload].amount *= -1;
    state.list[payload].isPaid = false;
  });
});
