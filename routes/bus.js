var express = require("express");
var router = express.Router();
const Bus = require("../models/Bus");

/* GET buses listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/search", async function (req, res, next) {
  console.log(req.query.to);
  console.log(req.query.from);

  try {
    const busData = await Bus.find({ to: req.query.to });
    if (busData) {
      res.send(busData);
    }
  } catch (error) {
    throw new Error(error);
  }
});

router.post("/saveBus", async function (req, res, next) {
  var data = req.body.data;
  try {
    const newSaveBus = new Bus({
      to: "Nagpur",
      from: "Nanded",
      ac: true,
      type: "Sleeper(2T)",
      timing: [
        {
          departure: new Date().toISOString(),
          arrival: new Date().toISOString(),
        },
      ],
      boarding_point: [
        {
          add_time: 30,
          placename: "Laxmi",
          address: "Near Wadekar Nursing Home, Brahmapuri",
        },
      ],
      dropping_point: [
        {
          remove_time: 30,
          placename: "Namaskar Chowk",
          address: "Namaskar Chowk, Nanded",
        },
      ],
      single_seat_price: 1000,
      share_seat_price: 800,
      booked_seat: [
        {
          name: "Nikhil Thakare",
          gender: "male",
          age: 23,
          email: "nikhilthakare14@gmail.com",
          phone: 9405135957,
          boarding_point: "Laxmi Nagar",
          dropping_point: "Namaskar Chowk",
          seatno: "C01",
        },
      ],
      amenities: {
        charging_point: true,
        reading_light: true,
        track_my_bus: true,
        mobile_ticket: true,
        newspaper: true,
        emergency_contact_number: true,
        blankets: true,
        pillow: true,
        cctv: true,
        movie: true,
        personaltv: true,
        wifi: true,
        water_bottle: true,
        staff_with_mask: true,
        hand_sanitiser_provided: true,
        regular_temperature_check: true,
        deep_cleaned_bus: true,
      },
    });

    const savedBus = await newSaveBus.save();
    console.log(savedBus);
    res.send(savedBus);
  } catch (error) {
    throw new Error(error);
  }

  res.send(req.body);
});

router.post("/bookticket", async function (req, res, next) {
  try {
    const busData = await Bus.find({ _id: req.body.id });

    if (busData != []) {
      const bookedData = await Bus.updateOne(
        { _id: req.body.id },
        { $push: { booked_seat: req.body.data } }
      );

      res.send(bookedData);
    }
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = router;
