import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';

const SeatSelection = ({ route }) => {
  //const { userName } = route.params; 
  const [selectedSeat, setSelectedSeat] = useState(null);

  const seats = [
    'available', 'not-available', 'not-available', 'available', 'available', 'not-available', 
    'available', 'not-available', 'not-available', 'premium', 'not-available', 'not-available',
    'available', 'not-available', 'not-available', 'premium', 'not-available', 'not-available', 
    'available', 'not-available', 'not-available', 'premium', 'not-available', 'not-available',
    'available', 'not-available', 'not-available', 'available', 'not-available', 'not-available', 
    'available', 'not-available', 'not-available', 'available', 'not-available', 'not-available',
    'available', 'not-available', 'not-available', 'exit', 'not-available', 'not-available', 
    'available', 'not-available', 'not-available', 'available', 'not-available', 'not-available',
  ];

  const seatTypes = {
    available: '#d3d3d3', 
    premium: '#FFD700',  
    yourSeat: '#1E90FF',   
    notAvailable: '#4169E1', 
    exit: '#FF6347',      
  };

  const getSeatColor = (seat) => {
    switch (seat) {
      case 'available':
        return seatTypes.available;
      case 'premium':
        return seatTypes.premium;
      case 'not-available':
        return seatTypes.notAvailable;
      case 'exit':
        return seatTypes.exit;
      default:
        return seatTypes.available;
    }
  };

  const handleSeatSelection = (seat) => {
    setSelectedSeat(seat);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select seat</Text>
      <Text style={styles.userName}>Ama Atta</Text>
      <Text style={styles.seatStatus}>Seat: {selectedSeat || 'Not selected'}</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.seatContainer}>
          {seats.map((seat, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.seat,
                { backgroundColor: seat === selectedSeat ? seatTypes.yourSeat : getSeatColor(seat) },
              ]}
              onPress={() => handleSeatSelection(seat)}
              disabled={seat === 'not-available'}
            >
              <Text style={styles.seatText}>{seat === 'available' ? '12' : seat === 'premium' ? '12B' : '12B'}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: seatTypes.available }]} />
          <Text style={styles.legendText}>Available seat</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: seatTypes.premium }]} />
          <Text style={styles.legendText}>Premium seat</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: seatTypes.notAvailable }]} />
          <Text style={styles.legendText}>Not available seat</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: seatTypes.exit }]} />
          <Text style={styles.legendText}>Exit seat</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save a seat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    marginBottom: 5,
  },
  seatStatus: {
    fontSize: 18,
    marginBottom: 20,
  },
  seatContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  seat: {
    width: Dimensions.get('window').width / 6 - 10,
    height: Dimensions.get('window').width / 6 - 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  seatText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  legendText: {
    fontSize: 14,
  },
  saveButton: {
    padding: 15,
    backgroundColor: '#87CEEB',
    borderRadius: 5,
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SeatSelection;
