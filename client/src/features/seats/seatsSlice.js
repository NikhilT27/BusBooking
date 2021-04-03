import { createSlice } from "@reduxjs/toolkit";

export const seatsSlice = createSlice({
  name: "seats",
  initialState: {
    value: [],
    selectedBus: "",
  },
  reducers: {
    addSeat: (state, action) => {
      let { name, busId } = action.payload;
      if (state.value.includes(name)) {
        let index = state.value.indexOf(name);

        state.value = state.value.filter((arrayItem) => arrayItem !== name);
      } else {
        state.value.push(name);
      }

      if (state.value.length !== 0) {
        state.selectedBus = busId;
      } else {
        state.selectedBus = "";
      }
    },

    emptySeats: (state) => {
      state.value = [];
    },
  },
});

export const { addSeat, emptySeats } = seatsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(addSeat(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.seats.value)`
export const selectSeats = (state) => state.seats.value;
export const selectBus = (state) => state.seats.selectedBus;

export default seatsSlice.reducer;
