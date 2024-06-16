import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get('window');

const NextWelcomeScreen = () => {
  const navigation = useNavigation();

  const onSkipPressed = () => {
    navigation.navigate('SignIn');
  };

  const onHomePressed = () => {
    navigation.navigate('BottomTab');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Airplanemodel.jpg")}
        style={styles.AirplaneBG}
        resizeMode="cover"
      />

      <View style={styles.upperTextContainer}>
        <Text style={styles.upperText}>
          AEROKONNECT{"\n"}
          <Text style={styles.slogan}>Seamless Travels, Boundless Horizons</Text>
        </Text>
      </View>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>
          Book. Fly. Enjoy. Discover new Destinations. Effortless reservations,{"\n"} 
          Tailored experiences just for you. Your Adventure Awaits!
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onSkipPressed}>
          <Text style={styles.buttonText}>Join Us Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onHomePressed}>
          <Text style={styles.buttonText}>Go To Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AirplaneBG: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    resizeMode: "cover"
  },
  bottomText: {
    textAlign: 'center',
    color: '#00527E',
    fontSize: 16,
  },
  bottomTextContainer: {
    position: 'absolute',
    bottom: '20%',
    left: '10%',
    width: '80%',
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '10%',
    left: '10%',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#00527E',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  slogan: {
    alignContent: 'center',
    fontSize: 16,
  },
  upperText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#00527E',
    textAlign: 'center',
    marginTop: 100,
    alignContent: 'center',
  }
});

export default NextWelcomeScreen;


