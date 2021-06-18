import { v4 as uuid } from "uuid";
import { InvoiceType } from "types";
import { createAction } from "@reduxjs/toolkit";

export const newInvoice = createAction(
  "invoices/new",
  (data: Partial<InvoiceType>) => ({
    payload: { ...data, id: uuid() },
  })
);
export const saveInvoice = createAction<InvoiceType>("invoices/save");
export const editInvoice = createAction<string>("invoices/edit");
export const cancelInvoice = createAction("invoices/cancel");
export const deleteInvoice = createAction<string>("invoices/delete");
export const markInvoiceAsPaid = createAction<string>("invoices/markAsPaid");
export const refundInvoice = createAction<string>("invoices/refundInvoice");
