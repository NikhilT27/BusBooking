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
    const busData = await Bus.find({ to: req.query.to, from: req.query.from });
    if (busData) {
      res.send(busData);
    }
  } catch (error) {
    throw new Error(error);
  }
});

router.post("/saveBus", async function (req, res, next) {
  var {
    to,
    from,
    ac,
    type,
    boarding_point,
    dropping_point,
    single_seat_price,
    share_seat_price,
    booked_seat,
    amenities,
  } = req.body.data;
  try {
    const newSaveBus = new Bus({
      to,
      from,
      ac,
      type,
      timing: [
        {
          departure: new Date().toISOString(),
          arrival: new Date().toISOString(),
        },
      ],
      boarding_point,
      dropping_point,
      single_seat_price,
      share_seat_price,
      booked_seat,
      amenities,
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
