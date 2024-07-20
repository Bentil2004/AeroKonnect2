import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://ucusngylouypldsoltnd.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjdXNuZ3lsb3V5cGxkc29sdG5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcyNjgxMDksImV4cCI6MjAzMjg0NDEwOX0.cQlMeHLv1Dd6gksfz0lO6Sd3asYfgXZrkRuCxIMnwqw";
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  

const EmailVerificationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params;

  const [verificationCode, setVerificationCode] = useState('');

  const verifyCode = async () => {
    try {
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: verificationCode,
        type: 'magiclink'
      });

      if (error) throw error;

      navigation.navigate('ResetPassword', { email });
    } catch (error) {
      Alert.alert('Invalid Code', 'Please enter the correct verification code.');
    }
  };

  const resendCode = async () => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) throw error;
      Alert.alert('Code Sent', 'A new verification code has been sent to your email.');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const isVerificationCodeEmpty = verificationCode.length === 0;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Email Verification</Text>
        <Text style={styles.subtitle}>Please enter the verification code sent to {email}</Text>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#707070" style={styles.icon} />
          <TextInput
            placeholder="Verification Code"
            placeholderTextColor="#707070"
            style={styles.input}
            value={verificationCode}
            onChangeText={setVerificationCode}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity
          style={[styles.button, isVerificationCodeEmpty ? styles.buttonInitial : styles.buttonFilled]}
          onPress={verifyCode}
          disabled={isVerificationCodeEmpty} 
        >
          <Text style={styles.buttonText}>Verify Code</Text>
        </TouchableOpacity>
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Haven't gotten the code yet? </Text>
          <TouchableOpacity onPress={resendCode}>
            <Text style={styles.resendButtonText}>Resend Mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  icon: {
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonInitial: {
    backgroundColor: '#add8e6',
  },
  buttonFilled: {
    backgroundColor: '#00527E', 
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  resendContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resendText: {
    color: 'gray',
  },
  resendButtonText: {
    color: '#00527E', 
    fontWeight: 'bold',
  },
});

export default EmailVerificationScreen;
