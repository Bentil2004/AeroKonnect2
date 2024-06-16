import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';

const PaymentMethodsScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Payment Methods</Text>
        <Text style={styles.subtitle}>
          Secure and Easy Payment: Complete your booking quickly and safely using your preferred payment method.
        </Text>

        <Text style={styles.sectionTitle}>Choose your payment method:</Text>
        <View style={styles.paymentMethods}>
          <Image source={require('../../assets/images/visa.png')} style={styles.paymentIcon} />
          <Image source={require('../../assets/images/mastercard.png')} style={styles.paymentIcon} />
          <Image source={require('../../assets/images/paypal.png')} style={styles.paymentIcon} />
          <Image source={require('../../assets/images/my_mtn.png')} style={styles.paymentIcon} />
          <Image source={require('../../assets/images/vodafone.png')} style={styles.paymentIcon} />
          <Image source={require('../../assets/images/bank.png')} style={styles.paymentIcon} />
        </View>

        <Text style={styles.sectionTitle}>Enter your card details</Text>
        <TextInput style={styles.input} placeholder="Name on Card" />
        <TextInput style={styles.input} placeholder="Card Number" keyboardType="numeric" />
        <View style={styles.row}>
          <TextInput style={[styles.input, styles.halfInput]} placeholder="MM/YY" keyboardType="numeric" />
          <TextInput style={[styles.input, styles.halfInput]} placeholder="CVV" keyboardType="numeric" />
        </View>
        <TextInput style={styles.input} placeholder="Zip Code" keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Country" />
        <TextInput style={styles.input} placeholder="City" />
        <TextInput style={styles.input} placeholder="Address" />

        <View style={styles.row}>
          <TouchableOpacity style={styles.checkboxContainer}>
            <Image source={require('../../assets/images/checkbox_unchecked.png')} style={styles.checkboxIcon} />
            <Text style={styles.checkboxText}>Save this card for future bookings</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit Payment</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Your payment information is encrypted and securely processed
        </Text>
        
        <Text style={styles.successMessage}>
          Your card has been successfully added
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#ffff',
  },
  title: {
    fontSize: 24,
    justifyContent: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  paymentMethods: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  paymentIcon: {
    width: 50,
    height: 50,
    margin: 8,
  },
  input: {
    height: 40,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkboxIcon: {
    width: 20,
    height: 20,
  },
  checkboxText: {
    marginLeft: 8,
    color: '#00527e',
  },
  submitButton: {
    backgroundColor: '#00527e',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  footerText: {
    fontSize: 12,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 16,
  },
  successMessage: {
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default PaymentMethodsScreen;
