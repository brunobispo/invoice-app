import { createAction } from "@reduxjs/toolkit";

export const setCurrentMonth = createAction(
  "dashboard/setCurrentMonth",
  (date: Date) => ({ payload: date.toISOString() })
);
