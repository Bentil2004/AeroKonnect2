import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput,  View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';





const RoundTrip = function ({ navigation }){

  const oneway = function (){
  navigation.navigate('Oneway');
 }
  const Multicity = function(){
    navigation.navigate('MultiCity')
  }


 return (
   <View>
    <StatusBar style="auto" />
   
       <View style={styles.column}>
          <Text style={{color:'#434343'}}>Good Morning,
               <Text style={styles.Ama}> Ama</Text>
           </Text>
           <Text style={styles.GO}>Where are you going?</Text>
     </View> 
     <View style={styles.mainbut}>
        <Button  buttonStyle={{ backgroundColor:'#E4EAF1', padding:5  }} onPress={oneway} titleStyle={{bottom:1, color:'#434343'}} title='One-Way' />
        <Button  buttonStyle={{ backgroundColor: '#00527E', borderRadius: 8,padding:5 , width:111,  }} onPress={RoundTrip} titleStyle={{bottom:1,}}  title='Round-Trip'/>
        <Button buttonStyle={{ backgroundColor: '#E4EAF1', padding:5  }} onPress={Multicity} titleStyle={{bottom:1,color:'#434343'}}  title='Multi-City'                 />
     </View>
     <ScrollView>
     <View style={styles.container2}>
     
     <TouchableOpacity onPress={''} style={{top:'20%', zIndex:1}}>
    <Image source={require('./../Assets/und.png')}  />  
    </TouchableOpacity>
  
          <TextInput style={styles.textinputA} placeholder= 'From' />
          <TextInput style={styles.textinputB} placeholder= 'To' />

        <View style={styles.row1}>
          <TextInput style={styles.textinput1} placeholder= 'Departure' />
          <TextInput style={styles.textinput2} placeholder= 'Return' />
        </View>
         <View style={styles.row2}>
          <TextInput style={styles.textinput1} placeholder= 'Passenger' />
          <TextInput style={styles.textinput2} placeholder= 'Cabin Class' />
        </View>
        <View style={styles.row3}>
          <Button buttonStyle={{ backgroundColor: '#00527E', borderRadius: 5, height:49  }} title='Search Flight' />
        </View>
     </View>

       </ScrollView>
  </View>
  ); 
}


export default RoundTrip

const styles = StyleSheet.create({
  container2: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginTop:23,
  },

 Globe: {
  fontWeight:'bold',
  fontSize:15,
  left:20,
},
flight: {
left:20,
fontSize:12,
color:'black',
top:10,
},

  row1:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    bottom: 27,
    marginTop:50,
  },
  textinputA: {
    border:1,
    borderWidth:1,
    borderColor:'#00527E',
    width:'90%',
    height: 50,
    borderRadius:10,
    paddingLeft:8,
  },
  textinputB: {
    border:1,
    borderWidth:1,
    borderColor:'#00527E',
    width:'90%',
    height: 50,
    borderRadius:10,
    paddingLeft:8,
    top:10,
  },
  row2:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    bottom:15,
    // marginTop:50,
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
    width:'43%',
    height: 50,
    borderRadius:10,
    paddingLeft:8,
    left:10,
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
    marginTop:'5%',
    padding:8,
    display:'flex',
    flexDirection:'row',
    alignItem:'center',
    justifyContent:'space-between',
    
    }, 
    
});

  





