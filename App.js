import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RoundTrip from './Screens/RoundTrip'; 
import Oneway from   './Screens/BookFlight/oneway'; 
import MultiCity from './Screens/Multicity';
import explore from './Screens/Explore';
import home from './Screens/HOME';
import MyTrips from './Screens/mytrips';
import profile from './Screens/profile';


const Stack = createStackNavigator();

function StackNavigator() {
  return (
<NavigationContainer>
      <Stack.Navigator initialRouteName="explore" screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Home" component={RoundTrip} />
         <Stack.Screen name="Oneway" component={Oneway} />
         <Stack.Screen name="MultiCity" component={MultiCity} />
         <Stack.Screen name="explore" component={explore} />
         <Stack.Screen name="home" component={home} />
         <Stack.Screen name="MyTrips" component={MyTrips} />
         <Stack.Screen name="profile" component={profile} />

      </Stack.Navigator>
 </NavigationContainer>
  );
}
export default  StackNavigator;


  



