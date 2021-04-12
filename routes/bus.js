var express = require("express");
var router = express.Router();
const Bus = require("../models/Bus");
var moment = require("moment");
const CitiesData = require("./cities.json");

/* GET buses listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/saveAllBuses", function (req, res, next) {
  function generateRandomBusData() {
    let city = JSON.parse(JSON.stringify(CitiesData));

    let cities = city.map((each) => each.city);

    let busesName = [
      "Parveen Travels",
      "VRL Travels",
      "SRS Travels",
      "Prasanna Travels",
      "Orange Travels",
      "Kallada Travels",
      "Jabbar Travels",
      "Jeppiaar Travels",
      "Neeta Travels",
      "Hans Travels",
      "SRM Travels",
      "Paulo Travels",
      "Asian Xpress",
    ];

    let boardingPoint = [
      {
        add_time: 15,
        placename: "N.I.T. Parking, Jagnade Square",
        address: "N.I.T.Parking, Jagnade Square, near 7star Hospital",
      },
      {
        add_time: 30,
        placename: "Ashirwad Talkies",
        address: "Ashirwad Talkies, near Karbala Dargah, Great Road",
      },
      {
        add_time: 45,
        placename: "Loha pool near City Bus Stand",
        address: "Near City Bus Stand-Loha pool",
      },
    ];

    let droppingPoint = [
      {
        remove_time: 30,
        placename: "Namaskar Chowk",
        address: "Namaskar Chowk",
      },
      {
        remove_time: 15,
        placename: "Near Laxmi Nagar",
        address: "Near Laxmi Nagar",
      },
      {
        remove_time: 0,
        placename: "Shivaji Gate Office",
        address: "Shivaji Gate",
      },
    ];

    function getRandomPrice(max, min) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    function getRandomTrue() {
      let value = Math.floor(Math.random() * 2);
      if (value) {
        return true;
      } else {
        return false;
      }
    }

    function getBusData() {
      let data = [];
      for (let cityFrom of cities) {
        for (let cityTo of cities) {
          let boardingPointData = boardingPoint.map((each) => {
            let value = {
              add_time: each.add_time,
              placename: each.placename,
              address: each.address + ", " + cityFrom,
            };
            return value;
          });

          let droppingPointData = droppingPoint.map((each) => {
            let value = {
              remove_time: each.remove_time,
              placename: each.placename,
              address: each.address + ", " + cityTo,
            };
            return value;
          });
          for (let travelName of busesName) {
            if (getRandomTrue() && cityFrom !== cityTo) {
              let value = {
                name: travelName,
                to: cityTo,
                from: cityFrom,
                ac: getRandomTrue(),
                type: "Sleeper(2T)",
                timing: {
                  departure: moment().toISOString(),
                  arrival: moment()
                    .add(getRandomPrice(12, 7), "h")
                    .toISOString(),
                },

                boarding_point: [
                  {
                    add_time: 15,
                    placename: "N.I.T. Parking, Jagnade Square",
                    address:
                      "N.I.T.Parking, Jagnade Square, near 7star Hospital",
                  },
                  {
                    add_time: 30,
                    placename: "Ashirwad Talkies",
                    address:
                      "Ashirwad Talkies, near Karbala Dargah, Great Road",
                  },
                  {
                    add_time: 45,
                    placename: "Loha pool near City Bus Stand",
                    address: "Near City Bus Stand-Loha pool",
                  },
                ],
                dropping_point: [
                  {
                    remove_time: 30,
                    placename: "Namaskar Chowk",
                    address: "Namaskar Chowk",
                  },
                  {
                    remove_time: 15,
                    placename: "Near Laxmi Nagar",
                    address: "Near Laxmi Nagar",
                  },
                  {
                    remove_time: 0,
                    placename: "Shivaji Gate Office",
                    address: "Shivaji Gate",
                  },
                ],
                single_seat_price: getRandomPrice(1001, 950),
                share_seat_price: getRandomPrice(850, 750),
                booked_seat: [],
                amenities: {
                  charging_point: getRandomTrue(),
                  reading_light: getRandomTrue(),
                  track_my_bus: getRandomTrue(),
                  mobile_ticket: getRandomTrue(),
                  newspaper: getRandomTrue(),
                  emergency_contact_number: getRandomTrue(),
                  blankets: getRandomTrue(),
                  pillow: getRandomTrue(),
                  movie: getRandomTrue(),
                  personaltv: getRandomTrue(),
                  wifi: getRandomTrue(),
                  water_bottle: getRandomTrue(),
                  staff_with_mask: getRandomTrue(),
                  hand_sanitiser_provided: getRandomTrue(),
                  regular_temperature_check: getRandomTrue(),
                  deep_cleaned_bus: getRandomTrue(),
                },
              };
              if (getRandomTrue()) {
                data.push(value);
              }
            }
          }
        }
      }

      return data;
    }

    // console.log(getBusData());
    return getBusData();
  }

  const data = generateRandomBusData();
  console.log(data[0]);
  let response = Bus.insertMany(data.slice(0, 10001), {
    limit: null,
    lean: true,
    ordered: false,
  });

  res.send("Saved");
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
    name,
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
      name,
      to,
      from,
      ac,
      type,
      timing: {
        departure: moment().toISOString(),
        arrival: moment().add(8, "h").toISOString(),
      },

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
      const bookedData = await Bus.findByIdAndUpdate(
        { _id: req.body.id },
        { $push: { booked_seat: req.body.data } },
        { new: true, lean: true }
      );

      res.send(bookedData.booked_seat[bookedData.booked_seat.length - 1]);
    }
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = router;
