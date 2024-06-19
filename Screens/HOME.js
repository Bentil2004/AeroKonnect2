import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput,  View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

const HOME = function({navigation}){
 const explore = function(){
 navigation.navigate('explore'); 
 };

 const mytrips = function(){
    navigation.navigate('MyTrips');
     };
     
     const Profile = function(){
    navigation.navigate('profile');
     };

return(
 <View style={styles.container}>
 <StatusBar style='auto' />

 <View style={styles.trip}>
    <Text>
        Home Screen
    </Text>
</View>

    <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={HOME} >
           <Image source={require('./../Assets/Home.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={explore} >
           <Image source={require('./../Assets/explore.jpg')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem} onPress={mytrips} >
          <Image source={require('./../Assets/mytrips.jpg')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem} onPress={Profile} >
          <Image source={require('./../Assets/profile.jpg')} />
        </TouchableOpacity>
     </View>
 </View>
);
}

export default HOME

const styles = StyleSheet.create({

  trip:{
    alignItems:'center',
    top:'50%',
     },
    container:{
    flex:1,
    backgroundColor:'white',
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

