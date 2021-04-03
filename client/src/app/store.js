import { configureStore } from "@reduxjs/toolkit";
import seatsReducer from "../features/seats/seatsSlice";

export default configureStore({
  reducer: {
    seats: seatsReducer,
  },
});
