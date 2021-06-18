import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "state/store";
import { getInvoices } from "state/invoices/selectors";

export const getCurrentMonth = (state: RootState) =>
  new Date(state.dashboard.currentMonth);

export const getCurrentMonthInvoices = createSelector(
  [getCurrentMonth, getInvoices],
  (currentMonth, invoices) =>
    invoices.filter(
      (invoice) =>
        new Date(invoice.creation).getFullYear() ===
          currentMonth.getFullYear() &&
        new Date(invoice.creation).getMonth() === currentMonth.getMonth()
    )
);

export const getCurrentMonthTotal = createSelector(
  [getCurrentMonthInvoices],
  (invoices) => invoices.reduce((total, item) => total + item.amount, 0)
);

export const getCurrentMonthPending = createSelector(
  [getCurrentMonthInvoices],
  (invoices) =>
    invoices
      .filter((item) => !item.isPaid)
      .reduce((total, item) => total + item.amount, 0)
);

export const getCurrentMonthPaid = createSelector(
  [getCurrentMonthInvoices],
  (invoices) =>
    invoices
      .filter((item) => item.amount > 0 && item.isPaid)
      .reduce((total, item) => total + item.amount, 0)
);

export const getCurrentMonthRefunded = createSelector(
  [getCurrentMonthInvoices],
  (invoices) =>
    invoices
      .filter((item) => item.amount < 0 && item.isPaid)
      .reduce((total, item) => total + item.amount, 0)
);
