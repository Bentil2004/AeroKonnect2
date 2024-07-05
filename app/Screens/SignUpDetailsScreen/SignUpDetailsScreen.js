import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Platform, ActivityIndicator, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import PhoneInput from 'react-native-phone-number-input';
import CheckBox from 'react-native-check-box';
import RNPickerSelect from 'react-native-picker-select';

const SignUpDetailsScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [regularUpdates, setRegularUpdates] = useState(false);
  const [nationality, setNationality] = useState('');

  const firstNameInputRef = useRef(null);

  useEffect(() => {
    if (firstNameInputRef.current) {
      firstNameInputRef.current.focus();
    }
  }, []);

  const handleSendVerification = () => {
    if (!firstName || !lastName || !formattedValue || !nationality || !acceptTerms) {
      Alert.alert('Error', 'Please fill all fields and accept the Terms and Conditions.');
      return;
    }

    setLoading(true);
    const userDetails = {
      firstName,
      lastName,
      dateOfBirth,
      phoneNumber: formattedValue,
      nationality,
      acceptTerms,
      regularUpdates,
    };
    console.warn('User details:', userDetails);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate('PhoneNumberVerification', { phoneNumber: formattedValue });
    }, 1000);
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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Sign Up for AeroKonnect Today!</Text>

        <View style={styles.inputContainer}>
          <TextInput
            ref={firstNameInputRef}
            style={styles.input}
            placeholder="First name"
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Last name"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Date of Birth</Text>
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
          <PhoneInput
            defaultValue={phoneNumber}
            defaultCode="GH"
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

        <View style={styles.inputContainer}>
          <RNPickerSelect
            onValueChange={(value) => setNationality(value)}
            items={[
              { label: 'Ghana', value: 'Ghana' },
              { label: 'Nigeria', value: 'Nigeria' },
              { label: 'United States', value: 'United States' },
              { label: 'Canada', value: 'Canada' },
              { label: 'France', value: 'France' },
              { label: 'Germany', value: 'Germany' },
              { label: 'United Kingdom', value: 'United Kingdom' },
              { label: 'Italy', value: 'Italy' },
              { label: 'Spain', value: 'Spain' },
              { label: 'Australia', value: 'Australia' },
              { label: 'Japan', value: 'Japan' },
              { label: 'China', value: 'China' },
              { label: 'India', value: 'India' },
              { label: 'Russia', value: 'Russia' },
              { label: 'Brazil', value: 'Brazil' },
            ]}
            style={pickerSelectStyles}
            placeholder={{
              label: 'Select your nationality',
              value: null,
              color: '#9EA0A4',
            }}
          />
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            isChecked={acceptTerms}
            onClick={() => setAcceptTerms(!acceptTerms)}
          />
          <Text style={styles.checkboxText}>I accept the Terms and Conditions.</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            isChecked={regularUpdates}
            onClick={() => setRegularUpdates(!regularUpdates)}
          />
          <Text style={styles.checkboxText}>I want regular updates</Text>
        </View>

        {loading ? (
          <ActivityIndicator size="small" color="#00527e" />
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleSendVerification}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
  },
  scrollContainer: {
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
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 16,
  },
  datePicker: {
    width: '100%',
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 16,
  },
  link: {
    color: '#00527e',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30,
    marginBottom: 20,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30,
    marginBottom: 20,
  },
});

export default SignUpDetailsScreen;
