import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Lottie from "lottie-react-native";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const CompletionScreen = () => {
  const navigation = useNavigation();

  const onLogInPressed = () => {
    navigation.navigate("LogIn");
  };

  return (
    <SafeAreaView style={styles.root}>
      <Lottie
        style={styles.animation}
        source={require("../../assets/ConfirmationPulse.json")}
        autoPlay
        loop
      />

      <Text style={styles.text}>
        Your account has been{"\n"}successfully created
      </Text>

      <CustomButton
        text="Next"
        onPress={onLogInPressed}
        bg={"#00527e"}
        style={styles.button}
        txt={"white"}
      />
    </SafeAreaView>
  );
};

export default CompletionScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  animation: {
    width: "100%",
    height: 250,
    top: -60,
  },
  button: {
    position: "absolute",
    width: "80%",
    borderRadius: 5,
    marginBottom: 50,
    bottom: "15%",
  },
  text: {
    color: "black",
    textAlign: "center",
    padding: 10,
    alignItems: "center",
    fontSize: 20,
    marginTop: 20,
    position: "absolute",
    bottom: "40%",
    left: "10%",
    width: "80%",
  },
});
