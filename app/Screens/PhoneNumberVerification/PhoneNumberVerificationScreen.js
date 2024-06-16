import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PhoneNumberVerificationScreen = ({ route, navigation }) => {
  const { phoneNumber } = route.params;

  const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);

  const inputRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(interval);
        }
        return prevTimer > 0 ? prevTimer - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleVerificationCodeChange = (index, value) => {
    const newVerificationCode = [...verificationCode];
    newVerificationCode[index] = value;
    setVerificationCode(newVerificationCode);

    if (value !== '' && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleVerifyCode = () => {
    const code = verificationCode.join('');
    console.warn('Verification code entered:', code);
    navigation.navigate('CompletionScreen');
  };

  const handleResend = () => {
    console.warn('Resend verification code');
    setTimer(60); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify your phone number</Text>
      <Text style={styles.subtitle}>Code sent to {phoneNumber}</Text>

      <View style={styles.inputContainer}>
        {[0, 1, 2, 3].map((index) => (
          <TextInput
            key={index}
            ref={el => inputRefs.current[index] = el}
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            value={verificationCode[index]}
            onChangeText={(value) => handleVerificationCodeChange(index, value)}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.resendLink} onPress={handleResend}>
        <Text style={styles.resendText}>Resend</Text>
      </TouchableOpacity>

      <Text style={styles.timer}>{timer === 0 ? 'Resend' : `Resend in ${timer} seconds`}</Text>

      <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  input: {
    width: '20%',
    height: 50,
    fontSize: 24,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  resendLink: {
    marginVertical: 10,
  },
  resendText: {
    color: '#A8E78A',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  timer: {
    color: 'gray',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#00527e',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PhoneNumberVerificationScreen;
