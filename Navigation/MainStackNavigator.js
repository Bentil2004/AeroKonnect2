import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../app/Screens/SplashScreen/SplashScreen";
import SignUpDetailsScreen from "../app/Screens/SignUpDetailsScreen/SignUpDetailsScreen";
import CompletionScreen from "../app/Screens/CompletionScreen/CompletionScreen";
import SignUpScreen from "../app/Screens/SignUpScreen/SignUpScreen";
import BottomTabNavigator from "../NavigationHome/BottomTabNavigator";
import NextWelcomeScreen from "../app/Screens/NextWelcomeScreen/NextWelcomeScreen";
import ForgotPasswordScreen from "../app/Screens/ForgotPassword/ForgotPasswordScreen";
import ForgotPasswordEmail from "../app/Screens/ForgotPassword/ForgotPasswordEmail";
import TermsAndConditions from "../app/Screens/TermsAndConditions/TermsAndConditions";
import SignInScreen from "../app/Screens/SignInScreen/SignInScreen";
import LogInScreen from "../app/Screens/LogInScreen/LogInScreen";
import ForgotPasswordPhone from "../app/Screens/ForgotPassword/ForgotPasswordPhone";
import Notification from "../app/Screens/Notification/Notification";
import PhoneNumberVerificationScreen from "../app/Screens/PhoneNumberVerification/PhoneNumberVerificationScreen";
import PhoneNumberVerificationScreenForgotPassword from "../app/Screens/PhoneNumberVerificationForgotPassword/PhoneNumberVerificationScreenForgotPassword";
import EmailVerificationScreen from "../app/Screens/EmailVerification/EmailVerificationScreen";
import ResetPasswordScreen from "../app/Screens/ResetPasswordScreen/ResetPasswordScreen";
import PopularDestinationScreen from "../app/Screens/PopularDestination/PopularDestinationScreen";
import MyTripScreen from "../app/Screens/MyTripScreen/MyTrip";
import UpcomingTripsScreen from "../app/Screens/MyTripScreen/UpcomingTripsScreen";
import ToDoScreen from "../app/Screens/PopularDestination/ToDoScreen";
import PaymentMethodsScreen from "../app/Screens/ProfileScreen/PaymentMethodsScreen";
import ProfileScreen from "../app/Screens/ProfileScreen/ProfileScreen";
import MyAccount from "../app/Screens/ProfileScreen/MyAccount";
import MyAccountUser from "../app/Screens/ProfileScreen/MyAccountUser";
import ManageAccount from "../app/Screens/ProfileScreen/ManageAccount";
import ProfileDetails from "../app/Screens/ProfileScreen/ProfileDetails";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignUpDetails" component={SignUpDetailsScreen} />
        <Stack.Screen name="CompletionScreen" component={CompletionScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
        <Stack.Screen name="NextWelcome" component={NextWelcomeScreen} />
        <Stack.Screen name="MyTripScreen" component={MyTripScreen} />
        <Stack.Screen name="UpcomingTrips" component={UpcomingTripsScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="PaymentMethods" component={PaymentMethodsScreen} />
        <Stack.Screen name="MyAccounts" component={MyAccount} />
        <Stack.Screen name="MyAccountUser" component={MyAccountUser} />
        <Stack.Screen name="ManageAccount" component={ManageAccount} />
        <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
        <Stack.Screen
          name="ForgotPasswordEmail"
          component={ForgotPasswordEmail}
        />
        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
        />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen
          name="ForgotPasswordPhone"
          component={ForgotPasswordPhone}
        />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen
          name="PhoneNumberVerification"
          component={PhoneNumberVerificationScreen}
        />
        <Stack.Screen
          name="PhoneNumberVerificationForgotPassword"
          component={PhoneNumberVerificationScreenForgotPassword}
        />
        <Stack.Screen
          name="EmailVerification"
          component={EmailVerificationScreen}
        />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen
          name="PopularDestination"
          component={PopularDestinationScreen}
        />
        <Stack.Screen name="ToDo" component={ToDoScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
