import { configureStore } from "@reduxjs/toolkit";
import invoices from "./invoices";
import dashboard from "./dashboard";

export const store = configureStore({
  reducer: {
    invoices,
    dashboard,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
