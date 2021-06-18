import { createReducer } from "@reduxjs/toolkit";
import { setCurrentMonth } from "./actions";

type DashboardState = {
  currentMonth: string;
};

const initialState: DashboardState = {
  currentMonth: new Date().toISOString(),
};

export default createReducer(initialState, (builder) => {
  builder.addCase(setCurrentMonth, (state, { payload }) => {
    state.currentMonth = payload;
  });
});
