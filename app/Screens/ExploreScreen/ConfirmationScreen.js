import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const TripDetails = () => {
  const [isPassengerDetailsVisible, setIsPassengerDetailsVisible] = useState(false);
  const [passengerAnimatedHeight] = useState(new Animated.Value(0));

  const [isPriceDetailsVisible, setIsPriceDetailsVisible] = useState(false);
  const [priceAnimatedHeight] = useState(new Animated.Value(0));

  const trip = {
    departureAirportCode: "KUM",
    arrivalAirportCode: "ACC",
    departureDate: "Thur, May 29, 2024",
    departureTime: "12:20",
    arrivalDate: "Thur, May 29, 2024",
    arrivalTime: "01:00",
    duration: "30m",
    flightClass: "Economy",
    stop: "Nonstop",
    flightNumber: "AK000",
    aircraftType: "Boeing 737",
    bookingStatus: "Confirmed",
  };

  const passenger = {
    name: "AMA DOE",
    ticketNumber: "ABC1234567890",
    seat: "12B",
  };

  const priceDetails = {
    baseFare: "GHC 600",
    taxes: "GHC 100",
    total: "GHC 700",
  };

  const togglePassengerDetails = () => {
    const finalValue = isPassengerDetailsVisible ? 0 : 150;
    setIsPassengerDetailsVisible(!isPassengerDetailsVisible);
    Animated.timing(passengerAnimatedHeight, {
      toValue: finalValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const togglePriceDetails = () => {
    const finalValue = isPriceDetailsVisible ? 0 : 100;
    setIsPriceDetailsVisible(!isPriceDetailsVisible);
    Animated.timing(priceAnimatedHeight, {
      toValue: finalValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.overlay}>
          <Text style={styles.bookingConfirmed}>Your booking is confirmed</Text>
          <Text style={styles.dateText}>{trip.departureDate}</Text>
          <View style={styles.flightInfo}>
            <Text style={styles.airportCode}>{trip.departureAirportCode}</Text>
            <FontAwesome5 name="plane" size={10} style={styles.planeIcon} />
            <Text style={styles.airportCode}>{trip.arrivalAirportCode}</Text>
          </View>
          <Text style={styles.duration}>{trip.duration}</Text>
          <Text style={styles.timeRange}>
            {trip.departureTime} to {trip.arrivalTime}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Booking reference</Text>
          <Text style={styles.bookingReference}>OKRSPT</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Flight Details</Text>
          <Text style={styles.detailText}>Departure Time: {trip.departureTime}</Text>
          <Text style={styles.detailText}>Departure Date: {trip.departureDate}</Text>
          <Text style={styles.detailText}>Arrival Time: {trip.arrivalTime}</Text>
          <Text style={styles.detailText}>Arrival Date: {trip.arrivalDate}</Text>
          <Text style={styles.detailText}>Duration: {trip.duration}</Text>
          <Text style={styles.detailText}>Class: {trip.flightClass}</Text>
          <Text style={styles.detailText}>Stop: {trip.stop}</Text>
          <Text style={styles.detailText}>Flight Number: {trip.flightNumber}</Text>
          <Text style={styles.detailText}>Aircraft Type: {trip.aircraftType}</Text>
          <Text style={styles.detailText}>Booking Status: {trip.bookingStatus}</Text>
        </View>
        <View style={styles.section}>
          <TouchableOpacity onPress={togglePassengerDetails} style={styles.toggleButton}>
            <Text style={styles.sectionTitle}>Passenger Details</Text>
            <Ionicons 
              name={isPassengerDetailsVisible ? "chevron-up" : "chevron-down"} 
              size={24} 
              color="#333333" 
            />
          </TouchableOpacity>
          <Animated.View style={{ height: passengerAnimatedHeight, overflow: "hidden" }}>
            <View>
              <Text style={styles.detailText}>Passenger 1</Text>
              <Text style={styles.detailText}>Name: {passenger.name}</Text>
              <Text style={styles.detailText}>Ticket Number: {passenger.ticketNumber}</Text>
              <Text style={styles.detailText}>Seat: {passenger.seat}</Text>
            </View>
          </Animated.View>
        </View>
        <View style={styles.section}>
          <TouchableOpacity onPress={togglePriceDetails} style={styles.toggleButton}>
            <Text style={styles.sectionTitle}>Price Details</Text>
            <Ionicons 
              name={isPriceDetailsVisible ? "chevron-up" : "chevron-down"} 
              size={24} 
              color="#333333" 
            />
          </TouchableOpacity>
          <Animated.View style={{ height: priceAnimatedHeight, overflow: "hidden" }}>
            <View>
              <Text style={styles.detailText}>Base Fare: {priceDetails.baseFare}</Text>
              <Text style={styles.detailText}>Taxes, Fees & Charges: {priceDetails.taxes}</Text>
              <Text style={styles.detailText}>Total: {priceDetails.total}</Text>
            </View>
          </Animated.View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.doneButton}>
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    padding: 10,
  },
  overlay: {
    backgroundColor: "#00527E",
    padding: 20,
    alignItems: "center",
  },
  bookingConfirmed: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
  },
  dateText: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  flightInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  airportCode: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
  },
  planeIcon: {
    marginHorizontal: 10,
    color: "white",
  },
  duration: {
    color: "#fff",
    fontSize: 16,
    marginTop: 10,
  },
  timeRange: {
    color: "#fff",
    fontSize: 14,
  },
  section: {
    backgroundColor: "#ffffff",
    padding: 15,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333333",
  },
  bookingReference: {
    fontSize: 16,
    color: "#00527E",
  },
  detailText: {
    fontSize: 16,
    color: "#555555",
    marginBottom: 4,
  },
  buttonContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  doneButton: {
    backgroundColor: "#00527E",
    paddingVertical: 18,
    paddingHorizontal: 120,
    borderRadius: 10,
  },
  doneButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  toggleButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default TripDetails;
