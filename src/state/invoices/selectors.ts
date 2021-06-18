import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "state/store";

export const getInvoices = createSelector(
  [(state: RootState) => state.invoices.list],
  (invoiceMap) => Object.values(invoiceMap)
);
