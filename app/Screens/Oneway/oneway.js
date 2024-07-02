import React from 'react';
import  { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput,  View,Image, Pressable, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';


const OneWay = function({ navigation }){
    const RoundTrip = function(){
       navigation.navigate('Home');
     }
     const Multicity = function(){
        navigation.navigate('MultiCity')
      }
    return(
        <View>
           <StatusBar style="auto" />
<View style={styles.top}>

 <TouchableOpacity>
 <Image
style={styles.topback}
 source={require('./../assets/Baackward.png')}
   />
 </TouchableOpacity>
<Text style={styles.book}>
  Book your flight
</Text>
</View>
         <View style={styles.mainbut}>
            <Button  buttonStyle={{ backgroundColor: '#00527E', borderRadius: 8,padding:5 , width:111 }}
             onPress={OneWay} titleStyle={{bottom:1,}}  title='One-Way' />
            <Button  buttonStyle={{ backgroundColor:'#E4EAF1', padding:5  }}
             onPress={RoundTrip} titleStyle={{bottom:1, color:'#434343'}}  title='Round-Trip'/>
            <Button  buttonStyle={{ backgroundColor: '#E4EAF1', padding:5  }} 
            onPress={Multicity} titleStyle={{bottom:1,color:'#434343'}}  title='Multi-City'                 />
         </View>
         <View class='con2' style={styles.container2}>

         <View style={styles.economyParent}>
            <Text style={[styles.economy, styles.economyTypo]}>Economy</Text>
           <TouchableOpacity>
            <Image
              style={styles.chevronBackwardIcon}
              resizeMode="cover"
              source={require('./../assets/backward.png')}
            />
            </TouchableOpacity>
          </View>

            <TextInput style={styles.textinputA} placeholder= 'From' />
            <TextInput style={styles.textinputB} placeholder= 'To' />
       
        <View style={styles.row1}>
          <TextInput style={styles.textinput1} placeholder= 'Departure ' />
          <TextInput style={styles.textinput2} placeholder= 'Passengers' />
        </View>
        
        <View style={styles.row3}>
          <Button buttonStyle={{ backgroundColor: '#00527E', borderRadius: 5, height: 49   }} title='Search Flight' />
        </View>
     </View>

 </View>  






 );
}
export default OneWay
const styles = StyleSheet.create({
    container2: {
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      marginTop:80,
    },
topback:{
height:29,
width:29,
},

book:{
fontSize: 18,
color:'#434343',
},
top:{
display:'flex',
flexDirection:'row',

gap:103,
alignItems:'center',
top:'20%',
left:'3%',
},
    economyParent: {
      width: 121,
      height: 41,
      backgroundColor: '#E4EAF1',
      borderRadius: 7,
      overflow: "hidden",
      marginBottom:-60,
      bottom:'18%',
      right:'30%',
      
    },
    economy: {
      top: 11,
      left: 20,
      width: 68,
      position: "absolute",
    },
    chevronBackwardIcon: {
      top: 13,
      left: 88,
      width: 24,
      height: 24,
      position: "absolute",
    },
    economyTypo: {
      height: 18,
      textAlign: "left",
      fontWeight: "500",
      color:'#434343'
      // color: Color.textColor,
      // fontSize: FontSize.regularSmall_size,
    },
    row1:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      bottom: 1,
      marginTop:50,
      left:7,
    },

    textinputA: {
      border:1,
      borderWidth:1,
      borderColor:'#00527E',
      width:'90%',
      height: 50,
      borderRadius:10,
      paddingLeft:8,
      top:30,
    },
    textinputB: {
      border:1,
      borderWidth:1,
      borderColor:'#00527E',
      width:'90%',
      height: 50,
      borderRadius:10,
      paddingLeft:8,
      top:40,
    },
 
    textinput1: {
      border:1,
      borderWidth:1,
      borderColor:'#00527E',
      width:'43%',
      height: 50,
      borderRadius:10,
      paddingLeft:8,
      right:10,
    },
    textinput2: {
      border:1,
      borderWidth:1,
      borderColor:'#00527E',
      width:'45%',
      height: 50,
      borderRadius:10,
      paddingLeft:8,
      right:3,
    },
    row3:{
       width:'90%',
       marginTop:20,
  },
     
    Ama: {
      fontWeight:'bold',
      color:'#434343',
    },
    GO:{
       fontSize:24,
       fontWeight:'bold',
    },
    column:{
      marginTop:'15%',
      display:"flex",
      flexDirection:'column',
      justifyContent:'space-between',
      color: 'black',
      paddingLeft:'7%',
    },
    mainbut:{
      border:1,
      height:50,
      marginLeft:20,
      width:'90%',
      backgroundColor:'#E4EAF1',
      borderRadius:12,
      marginTop:'25%',
      padding:8,
      display:'flex',
      flexDirection:'row',
      alignItem:'center',
      justifyContent:'space-between',
      
      }, 
      

  });
  