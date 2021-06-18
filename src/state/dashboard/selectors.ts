import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "state/store";
import { getInvoices } from "state/invoices/selectors";

export const getCurrentMonthInvoices = createSelector(
  [(state: RootState) => state.dashboard.currentMonth, getInvoices],
  (currentMonth, invoices) =>
    invoices.filter(
      (invoice) =>
        invoice.creation.getFullYear() === currentMonth.getFullYear() &&
        invoice.creation.getMonth() === currentMonth.getMonth()
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
