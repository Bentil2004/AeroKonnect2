import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput,  View, Image, ScrollView, TouchableOpacity, Modal, Picker } from 'react-native';
import { Button } from 'react-native-elements';

const Explore = function({navigation}){
 const hOME = function(){
 navigation.navigate('home'); 
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

 <View style={styles.column}>
          <Text style={styles.Ama}>The World Awaits </Text>
          <Text style={styles.GO}>Uncover Your Next Escape with AeroKonnect</Text>
</View>
  <View style={styles.line}></View>
 <View style={styles.container2}>

  <View style={styles.con}>
    <Text style={{right:'8%', fontSize:18, fontWeight:'bold',color:'#434343',}}>Explore different parts of the world</Text>
  </View>
  <View style={styles.pic}>
  <ScrollView horizontal setshowsHorizontalScrollIndicator={false}>
   <Image source={require('./../Assets/tok.png')}/>  
   <Image source={require('./../Assets/tok.png')}/>  
   <Image source={require('./../Assets/tok.png')}/>  

 
  </ScrollView>
  </View>



 </View>








    <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={hOME} >
           <Image source={require('./../Assets/home.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={Explore} >
           <Image source={require('./../Assets/Explore.png')} />
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

export default Explore

const styles = StyleSheet.create({

pic:{
display:'flex',
// flexDirection:'row',
justifyContent:'space-between',
// position:'relative',
top:'3%',

// right:'42%',


},

  con:{
  top:'2.5%',
  },
  
line:{
borderTopWidth:1,
borderTopColor:'#434343',
top:'1%',
marginLeft:20,
 marginRight:20,




},
  container2: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
 
    
  },
  GO:{
    fontSize:16,
    // fontWeight:'bold',
 },
 column:{
   marginTop:'15%',
   display:"flex",
   flexDirection:'column',
   justifyContent:'space-between',
   color: 'black',
   paddingLeft:'7%',
 },
  Ama: {
    fontWeight:'bold',
    color:'#434343',
    fontSize:18,
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
      position:'static',
      top:'120%',
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

