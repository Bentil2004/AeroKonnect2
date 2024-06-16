import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, useWindowDimensions, Alert } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import * as AuthSession from 'expo-auth-session';
import * as AppleAuthentication from 'expo-apple-authentication';
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import HorizontalLine from "../../components/HorizontalLine/OrDivider";
import CustomImageButton from "../../components/CustomImageButton";

const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';

const SignUpScreen = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordRepeat, setPasswordRepeat] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordRepeatError, setPasswordRepeatError] = useState("");
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordRepeatVisibility = () => {
    setShowPasswordRepeat(!showPasswordRepeat);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateForm = () => {
    let valid = true;

    if (!validateEmail(Email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!validatePassword(Password)) {
      setPasswordError("Password must be at least 8 characters long");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (Password !== PasswordRepeat) {
      setPasswordRepeatError("Passwords do not match");
      valid = false;
    } else {
      setPasswordRepeatError("");
    }

    return valid;
  };

  const onSignUpDetailsPressed = () => {
    if (validateForm()) {
      navigation.navigate('SignUpDetails');
    }
  };

  const onTermsandConditionsPressed = () => {
    navigation.navigate('TermsAndConditions');
  };

  const LogInPressed = () => {
    navigation.navigate('LogIn');
  };

  const onSignInApple = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [AppleAuthentication.AppleAuthenticationScope.FULL_NAME, AppleAuthentication.AppleAuthenticationScope.EMAIL],
      });
      console.log('Apple login success:', credential);
    } catch (error) {
      console.error('Apple login error:', error);
      Alert.alert('Error', 'Failed to sign in with Apple');
    }
  };

  const onSignInGoogle = async () => {
    try {
      const redirectUrl = AuthSession.getRedirectUrl();
      const result = await AuthSession.startAsync({
        authUrl:
          `https://accounts.google.com/o/oauth2/v2/auth?response_type=code` +
          `&client_id=${GOOGLE_CLIENT_ID}` +
          `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
          `&scope=openid%20profile%20email`,
      });

      if (result.type === 'success') {
        console.log('Google login success:', result.params);
      } else if (result.type === 'cancel') {
        console.log('Google login canceled');
      }
    } catch (error) {
      console.error('Google login error:', error);
      Alert.alert('Error', 'Failed to sign in with Google');
    }
  };

  const onSignInFacebook = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

      if (result.isCancelled) {
        console.log('Facebook login canceled');
      } else {
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
          throw new Error('Something went wrong obtaining access token');
        }

        const accessToken = data.accessToken.toString();
        const responseInfoCallback = (error, result) => {
          if (error) {
            console.log(error);
            Alert.alert('Error', 'Failed to fetch user info');
          } else {
            console.log('Facebook login success:', result);
          }
        };

        const infoRequest = new GraphRequest('/me', {
          accessToken: accessToken,
          parameters: {
            fields: {
              string: 'id, name, email',
            },
          },
        }, responseInfoCallback);

        new GraphRequestManager().addRequest(infoRequest).start();
      }
    } catch (error) {
      console.error('Facebook login error:', error);
      Alert.alert('Error', 'Failed to sign in with Facebook');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.root}>
        <Text style={styles.title}>
          <Text style={styles.UpText}> Travel Around The World With Ease</Text>{"\n"}
          Sign Up with AeroKonnect Today!
        </Text>

        <View style={styles.inputContainer}>
          <CustomInput
            placeholder="Email"
            value={Email}
            setValue={setEmail}
            bordercolor={passwordError ? "red" : "#7D7D7D"}
            borderRadius={15}
            iconName={"mail"}
          />
        </View>
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        <View style={styles.passwordInputContainer}>
          <CustomInput
            placeholder="Enter Password"
            value={Password}
            setValue={setPassword}
            secureTextEntry={!showPassword}
            bordercolor={passwordError ? "red" : "#7D7D7D"}
            borderRadius={15}
            iconName={"lock-closed"}
          />
          <MaterialCommunityIcons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="#7D7D7D"
            style={styles.eyeIcon}
            onPress={togglePasswordVisibility}
          />
        </View>
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

        <View style={styles.passwordInputContainer}>
          <CustomInput
            placeholder="Confirm Password"
            value={PasswordRepeat}
            setValue={setPasswordRepeat}
            secureTextEntry={!showPasswordRepeat}
            bordercolor={passwordError? "red" : "#7D7D7D"}
            borderRadius={15}
            iconName={"lock-closed"}
          />
          <MaterialCommunityIcons
            name={showPasswordRepeat ? "eye-off" : "eye"}
            size={24}
            color="#7D7D7D"
            style={styles.eyeIcon}
            onPress={togglePasswordRepeatVisibility}
          />
        </View>
        {passwordRepeatError ? <Text style={styles.errorText}>{passwordRepeatError}</Text> : null}

        <CustomButton
          text="Next"
          onPress={onSignUpDetailsPressed}
          bg={"#00527e"}
          txt={"white"}
        />
      </View>

      <HorizontalLine/>

      <View style={[styles.buttonRow, isLandscape && styles.buttonRowLandscape]}>
        <CustomImageButton
          onPress={onSignInApple}
          imageSource={require("../../assets/CustomLogoImages/Apple.png")}
          bgColor={"#E4EAF1"}
          txtColor={"black"}
          style={styles.imageButton}
        />

        <CustomImageButton
          onPress={onSignInGoogle}
          imageSource={require("../../assets/CustomLogoImages/Google.png")}
          bgColor={"#E4EAF1"}
          style={styles.imageButton}
        />

        <CustomImageButton
          onPress={onSignInFacebook}
          imageSource={require("../../assets/CustomLogoImages/Facebook.png")}
          bgColor={"#E4EAF1"}
          style={styles.imageButton}
        />
      </View>

      <Text style={styles.text}>
        Already have an account?{"\n"}
        <Text style={styles.Link} onPress={LogInPressed}>
          Log in
        </Text>
      </Text>

      <View style={[styles.bottomTextContainer, isLandscape && styles.bottomTextContainerLandscape]}>
        <Text style={styles.bottomText}>
          By clicking on the next button you agree to the{"\n"}
          <Text style={styles.Link} onPress={onTermsandConditionsPressed}>
            Terms and Conditions.
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  root: {
    alignItems: "center",
    padding: 20,
    marginTop: 100,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  buttonRowLandscape: {
    marginVertical: 10,
  },
  imageButton: {
    width: 100,
    height: 65,
    marginHorizontal: 3,
    borderRadius: 6,
    gap: 0.8,
    padding:10,
    opacity: 1,
  },
  Link: {
    color: "#00527e",
  },
  text: {
    textAlign: "center",
    marginVertical: 20,
    bottom: "3%",
  },
  bottomTextContainer: {
    alignItems: "center",
    padding: 20,
    bottom: "2%",
  },
  bottomTextContainerLandscape: {
    paddingBottom: 20,
  },
  bottomText: {
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 20,
    top: -30,
    color: "#00527e",
    textAlign: "center",
  },
  UpText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#00527E',
    textAlign: 'center',
    marginTop: 100,
    alignContent: 'center',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  eyeIcon: {
    marginLeft: -35,
    alignItems: 'center',
    marginTop: -20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginTop: -30,
    fontSize: 12,
    marginBottom: 5
  },
});

export default SignUpScreen;
