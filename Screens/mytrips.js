import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput,  View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

const MyTrips = function({navigation}){

 const HOME = function(){
 navigation.navigate('home'); 
 };
 const explore = function(){
    navigation.navigate('explore'); 
    };

        
    const Profile = function(){
    navigation.navigate('profile');
    };

return(
 <View style={styles.container}>
 <StatusBar style='auto' />

<View style={styles.trip}>
    <Text>
        MyTrips Screen
    </Text>
</View>




    <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={HOME} >
           <Image source={require('./../Assets/home.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={explore} >
           <Image source={require('./../Assets/explore.jpg')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem} onPress={MyTrips} >
          <Image source={require('./../Assets/Mytrips.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem} onPress={Profile} >
          <Image source={require('./../Assets/profile.jpg')} />
        </TouchableOpacity>
     </View>
 </View>
);
}

export default MyTrips

const styles = StyleSheet.create({

    container:{
    flex:1,
    backgroundColor:'white',
    },

 trip:{
   alignItems:'center',
   top:'50%',
    },
    footer: {
      flexDirection: 'row',
    
      alignItems: 'center',
      backgroundColor: 'white',
      height: 100, 
      borderTopWidth: 1,
      borderTopColor: '#999', 
      position:'relative',
      top:'192%',
    },
    footerItem: {
        flex: 1,
        alignItems: 'center',
     justifyContent: 'center',
     bottom:16,
    },
    footerText: {
      fontSize: 16,
      fontWeight: 'bold',
    },



});

