const { model, Schema } = require("mongoose");

const busSchema = new Schema({
  name: String,
  to: String,
  from: String,
  ac: Boolean,
  type: String,
  timing: { departure: String, arrival: String },
  boarding_point: [
    {
      add_time: Number,
      placename: String,
      address: String,
    },
  ],
  dropping_point: [{ remove_time: Number, placename: String, address: String }],
  single_seat_price: Number,
  share_seat_price: Number,
  booked_seat: [
    {
      name: String,
      gender: String,
      age: Number,
      email: String,
      phone: Number,
      boarding_point: String,
      dropping_point: String,
      boarding_time: String,
      dropping_time: String,
      price: String,
      date: String,
      seatno: String,
    },
  ],
  amenities: {
    charging_point: Boolean,
    reading_light: Boolean,
    track_my_bus: Boolean,
    mobile_ticket: Boolean,
    newspaper: Boolean,
    emergency_contact_number: Boolean,
    blankets: Boolean,
    pillow: Boolean,
    cctv: Boolean,
    movie: Boolean,
    personaltv: Boolean,
    wifi: Boolean,
    water_bottle: Boolean,
    staff_with_mask: Boolean,
    hand_sanitiser_provided: Boolean,
    regular_temperature_check: Boolean,
    deep_cleaned_bus: Boolean,
  },
});

module.exports = model("Bus", busSchema);
