import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const MyAccount = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('LogIn');
  };

  const handleCreateAccount = () => {
    navigation.navigate('SignUp');
  };

  const onProfileScreenPressed = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.backButton} onPress={onProfileScreenPressed}>
          <Ionicons name="chevron-back" size={24} color="#00527e" />
        </TouchableOpacity>
        <Image
          source={require('../../assets/Logo69.png')}
          style={styles.image}
          resizeMode="contain" 
        />
        <Text style={styles.welcome}>Welcome! Please sign up to access to enjoy the full mobile experience</Text>
        <View style={styles.benefitsContainer}>
          <Text style={styles.benefitsTitle}>Benefits of having an account:</Text>
          <View style={styles.benefitsList}>
            <Text style={styles.benefitsItem}>• Save your trips</Text>
            <Text style={styles.benefitsItem}>• Manage bookings</Text>
            <Text style={styles.benefitsItem}>• Access exclusive offers</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#00527e' }]}
            onPress={handleCreateAccount}
          >
            <Text style={styles.buttonText}>Create an Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#00527e' }]}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  welcome: {
    fontSize: 18,
    marginBottom: 20,
    fontSize: 21,
    textAlign: 'center', 
  },
  benefitsContainer: {
    marginBottom: 30,
    padding: 30,
    backgroundColor: '#E4EAF1',
    borderColor: '#E4EAF1',
    borderRadius: 10,
    width: 356,
    height: 150,
  },
  benefitsTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  benefitsList: {
    marginLeft: 20,
  },
  benefitsItem: {
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center', 
  },
  button: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#00527e',
    borderRadius: 10,
    width: 350,
    height: 56,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: -20,
    left: 20,
  },
  backText: {
    fontSize: 20,
    color: 'black',
  },
});

export default MyAccount;
