import { createSlice } from "@reduxjs/toolkit";

export const seatsSlice = createSlice({
  name: "seats",
  initialState: {
    value: [],
    selectedBus: "",
    selectedBusData: {},
    seatType: "ALL",
    bookedSeats: [],
    passengerData: [],
    contactData: {},
    date: "",
  },
  reducers: {
    addSeat: (state, action) => {
      let { name, data } = action.payload;
      if (state.value.includes(name)) {
        let index = state.value.indexOf(name);

        state.value = state.value.filter((arrayItem) => arrayItem !== name);
      } else {
        state.value.push(name);
      }

      if (state.value.length !== 0) {
        state.selectedBusData = data;
      } else {
        let emptyData = {};

        state.selectedBusData = emptyData;
      }
    },

    emptySeats: (state) => {
      state.value = [];
    },

    addSeatType: (state, action) => {
      state.seatType = action.payload;
    },

    addDate: (state, action) => {
      state.date = action.payload;
    },

    addBookedSeats: (state, action) => {
      state.bookedSeats = action.payload;
    },

    emptyBookedSeats: (state) => {
      state.bookedSeats = [];
    },

    addPassengerData: (state, action) => {
      let contains = state.passengerData.some((elem) => {
        return JSON.stringify(action.payload) === JSON.stringify(elem);
      });

      if (!contains) {
        let indexValue = state.passengerData.findIndex(
          (element) => element.seatno === action.payload.seatno
        );
        if (indexValue === -1) {
          state.passengerData.push(action.payload);
        } else {
          state.passengerData[indexValue] = action.payload;
        }
      }
    },

    addContactData: (state, action) => {
      state.contactData = action.payload;
    },

    emptyAll: (state) => {
      state.value = [];
      state.selectedBus = "";
      state.seatType = "ALL";
      state.bookedSeats = [];
      state.passengerData = [];
      state.contactData = {};
    },

    addSelectedBus: (state, action) => {
      state.selectedBus = action.payload;
    },

    removeSelectedBus: (state) => {
      state.selectedBus = "";
    },
  },
});

export const {
  addSeat,
  emptySeats,
  emptyAll,
  addSeatType,
  addBookedSeats,
  emptyBookedSeats,
  addPassengerData,
  addContactData,
  addDate,
  addSelectedBus,
  removeSelectedBus,
} = seatsSlice.actions;

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
export const selectSeatType = (state) => state.seats.seatType;
export const selectBookedSeats = (state) => state.seats.bookedSeats;
export const selectPassengerData = (state) => state.seats.passengerData;
export const selectContactData = (state) => state.seats.contactData;
export const selectSelectedBusData = (state) => state.seats.selectedBusData;
export const selectDate = (state) => state.seats.date;

export default seatsSlice.reducer;
