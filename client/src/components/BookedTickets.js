import React from "react";
import { useLocation } from "react-router-dom";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import busLogo from "../images/buslogo.png";
import phoneLogo from "../images/telephone.png";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
  },
  section: {
    margin: 10,
    padding: 10,

    flexGrow: 1,
  },
  ticketBox: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    margin: 10,
  },
  titleBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  logoBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },

  companyTitle: {
    fontSize: 18,
    color: "#be3421",
  },
  queryBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  phoneLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  queryTitle: {
    fontSize: 11,
    fontWeight: "700",
  },
  queryNumber: {
    fontSize: 10,
  },

  travelInfoBox: {
    marginTop: 10,
    padding: 10,
    borderWidth: 3,
    borderColor: "yellow",
    backgroundColor: "#fce3e6",
    borderRight: 0,
    borderLeft: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  travelInfoText: {
    fontSize: 11,
    fontWeight: "700",
  },

  passengerInfoBox: {
    marginTop: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#c4ddff",
    borderRight: 0,
    borderLeft: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  passengerInfoTextTitle: {
    fontSize: 10,
    color: "blue",
    textDecoration: "underline",
    fontWeight: "700",
    marginBottom: 5,
  },

  passengerInfoText: {
    fontSize: 11,
    fontWeight: "700",
  },

  busDetailTextTitle: {
    fontSize: 10,
    color: "blue",
    textDecoration: "underline",
    fontWeight: "700",
    marginBottom: 5,
  },

  busDetailText: {
    fontSize: 11,
    fontWeight: "700",
  },

  busDetailTextAddressTitle: {
    fontSize: 11,
    fontWeight: "700",
    marginRight: 10,
  },

  busDetailTextAddress: {
    fontSize: 11,
    fontWeight: "700",
    width: "80%",
  },

  busDetailOne: {
    marginTop: 10,
    borderWidth: 1,
    borderLeft: 0,
    borderRight: 0,
    borderBottom: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  busDetailTwo: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  busDetailSubBox: {
    width: "27%",
    margin: 10,
  },

  busDetailAddress: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

const MyDocument = ({ ticketInfo, totalCost, busData }) => (
  <Document>
    <Page pageNumber={1} size="A4" style={styles.page}>
      <View style={styles.ticketBox}>
        <View style={styles.titleBox}>
          <View style={styles.logoBox}>
            <Image src={busLogo} style={styles.logo} />
            <Text style={styles.companyTitle}>NonRedBus</Text>
          </View>
          <View style={styles.queryBox}>
            <Image src={phoneLogo} style={styles.phoneLogo} />
            <View>
              <Text style={styles.queryTitle}>Travel Related Queries</Text>
              <Text style={styles.queryNumber}>9405135957</Text>
            </View>
          </View>
        </View>
        <View style={styles.travelInfoBox}>
          <Text style={styles.travelInfoText}>
            {busData.from} to {busData.to}
          </Text>
          <Text style={styles.travelInfoText}>{ticketInfo[0].date}</Text>
          <Text style={styles.travelInfoText}>{busData.name}</Text>
        </View>
        {ticketInfo.map((each) => {
          return (
            <View key="each._id" style={styles.passengerInfoBox}>
              <View>
                <Text style={styles.passengerInfoTextTitle}>
                  Passenger Name
                </Text>
                <Text style={styles.passengerInfoText}>{each.name}</Text>
              </View>
              <View>
                <Text style={styles.passengerInfoTextTitle}>
                  thunderbirdBus ticket #
                </Text>
                <Text style={styles.passengerInfoText}>{each._id}</Text>
              </View>
              <View>
                <Text style={styles.passengerInfoTextTitle}>Seat Numbers</Text>
                <Text style={styles.passengerInfoText}>{each.seatno}</Text>
              </View>
              <View>
                <Text style={styles.passengerInfoTextTitle}>Age</Text>
                <Text style={styles.passengerInfoText}>{each.age}</Text>
              </View>
            </View>
          );
        })}

        <View>
          <View style={styles.busDetailOne}>
            <View style={styles.busDetailSubBox}>
              <Text style={styles.busDetailTextTitle}>Bus Type</Text>
              <Text style={styles.busDetailText}>
                {busData.type} {busData.ac ? "AC" : "Non AC"}
              </Text>
            </View>
            <View style={styles.busDetailSubBox}>
              <Text style={styles.busDetailTextTitle}>Reporting Time</Text>
              <Text style={styles.busDetailText}>
                {" "}
                {ticketInfo[0].boarding_time}
              </Text>
            </View>
            <View style={styles.busDetailSubBox}>
              <Text style={styles.busDetailTextTitle}>Boarding Point</Text>
              <View>
                <View style={styles.busDetailAddress}>
                  <Text style={styles.busDetailTextAddressTitle}>
                    Location:
                  </Text>
                  <Text style={styles.busDetailTextAddress}>
                    {ticketInfo[0].boarding_point + ", " + busData.from}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.busDetailTwo}>
            <View style={styles.busDetailSubBox}>
              <Text style={styles.busDetailTextTitle}>Total Fare</Text>
              <Text style={styles.busDetailText}>Rs. {totalCost}</Text>
            </View>
            <View style={styles.busDetailSubBox}>
              <Text style={styles.busDetailTextTitle}>Departure Time</Text>
              <Text style={styles.busDetailText}>
                {" "}
                {ticketInfo[0].dropping_time}
              </Text>
            </View>
            <View style={styles.busDetailSubBox}>
              <Text style={styles.busDetailTextTitle}>Departure Point</Text>
              <View>
                <View style={styles.busDetailAddress}>
                  <Text style={styles.busDetailTextAddressTitle}>
                    Location:
                  </Text>
                  <Text style={styles.busDetailTextAddress}>
                    {ticketInfo[0].dropping_point + ", " + busData.to}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default function BookedTickets() {
  const location = useLocation();
  let ticketInfo = location.state.tickets;
  let totalCost = location.state.total;
  let busData = location.state.data;

  console.log(ticketInfo);
  return (
    <div className="bookedTickets">
      <PDFViewer width="90%" height="100%">
        <MyDocument
          ticketInfo={ticketInfo}
          totalCost={totalCost}
          busData={busData}
        />
      </PDFViewer>
    </div>
  );
}
