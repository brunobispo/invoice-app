import { createReducer } from "@reduxjs/toolkit";
import { setCurrentMonth } from "./actions";

type DashboardState = {
  currentMonth: Date;
};

const initialState: DashboardState = {
  currentMonth: new Date(),
};

export default createReducer(initialState, (builder) => {
  builder.addCase(setCurrentMonth, (state, { payload }) => {
    state.currentMonth = payload;
  });
});
