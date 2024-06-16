import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import PhoneInput from 'react-native-phone-number-input';

const SignUpDetailsScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');

  const handleSendVerification = () => {
    const userDetails = {
      firstName,
      lastName,
      dateOfBirth,
      phoneNumber: formattedValue,
    };
    console.warn('User details:', userDetails);
    navigation.navigate('PhoneNumberVerification', { phoneNumber: formattedValue });
  };

  const onTermsandConditionsPressed = () => {
    navigation.navigate('TermsAndConditions');
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    setShowDatePicker(Platform.OS === 'ios');
    setDateOfBirth(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up To AeroKonnect Today</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your first name"
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your last name"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Date of Birth:</Text>
        {Platform.OS === 'ios' ? (
          <DateTimePicker
            style={styles.datePicker}
            value={dateOfBirth}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        ) : (
          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateButton}>
            <Text style={styles.dateButtonText}>{dateOfBirth.toDateString()}</Text>
          </TouchableOpacity>
        )}
        {showDatePicker && Platform.OS === 'android' && (
          <DateTimePicker
            value={dateOfBirth}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Phone Number</Text>
        <PhoneInput
          defaultValue={phoneNumber}
          defaultCode="US"
          layout="first"
          onChangeText={(text) => {
            setPhoneNumber(text);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          withDarkTheme
          withShadow
          autoFocus
          containerStyle={styles.phoneInput}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSendVerification}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      <Text style={styles.bottomText}>
        I accept the following{' '}
        <Text style={styles.link} onPress={onTermsandConditionsPressed}>
          Terms and Conditions.
        </Text>
        {'\n'}
        I want regular updates.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#00527e',
    marginBottom: 40,
    alignSelf: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 16,
  },
  datePicker: {
    width: '30%',
  },
  dateButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
  },
  dateButtonText: {
    fontSize: 16,
  },
  phoneInput: {
    width: '100%',
    padding: 0,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#00527e',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  link: {
    color: '#00527e',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  bottomText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    marginBottom: 20,
  },
});

export default SignUpDetailsScreen;
