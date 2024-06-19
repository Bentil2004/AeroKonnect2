import React from 'react';
import  { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput,  View, TouchableOpacity,Image } from 'react-native';
import { Button } from 'react-native-elements';

const MultiCity = function({navigation}){

    const [addFlight, setaddFlight] = useState([]);
    const [count, setcount] = useState(3)

    
    const oneway = function (){
        navigation.navigate('Oneway');
    }
    const RoundTrip = function(){
        navigation.navigate('Home');
    }   
    const Flight = function(){
       
      setcount(count+1);
             
      setaddFlight((moreFlight)=> [
  moreFlight,
<View style={styles.box2}>
<TouchableOpacity onPress={''} style={{top:'47%', zIndex:1}}>
           <Image source={require('./../Assets/und.png')}  />  
    </TouchableOpacity>
<Text style={styles.text}>
  Flight {count}
</Text>
<TextInput style={styles.textinputA} placeholder= 'From' />
<TextInput style={styles.textinputB} placeholder= 'To' />
<TextInput textContentType='date' style={styles.textinputC} placeholder= 'Departure' />
</View>

]);
      
    
    
}
return(
 
<View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.column}>
          <Text style={{ color: '#434343' }}>Good Morning,
            <Text style={styles.Ama}> Ama</Text>
          </Text>
          <Text style={styles.GO}>Where are you going?</Text>
        </View>

        <View style={styles.mainbut}>
          <Button buttonStyle={{ backgroundColor: '#E4EAF1', padding: 5 }} onPress={oneway} titleStyle={{ bottom: 1, color: '#434343' }} title='One-Way' />
          <Button buttonStyle={{ backgroundColor: '#E4EAF1', padding: 5 }} onPress={RoundTrip} titleStyle={{ bottom: 1, color: '#434343' }} title='Round-Trip' />
          <Button buttonStyle={{ backgroundColor: '#00527E', borderRadius: 8, padding: 5, width: 111 }} onPress={MultiCity} titleStyle={{ bottom: 1, color: '#fff' }} title='Multi-City' />
        </View>

        <View style={styles.container2}>
          <ScrollView>
            <View style={styles.row2}>
              <TextInput style={styles.textinput1} placeholder='Passenger' />
              <TextInput style={styles.textinput2} placeholder='Cabin Class' />
            </View>
            <View style={styles.box1}>
     <TouchableOpacity onPress={''} style={{top:'47%', zIndex:1}}>
           <Image source={require('./../Assets/und.png')}  />  
    </TouchableOpacity>
              <Text style={styles.text}>Flight 1</Text>

              <TextInput style={styles.textinputA} placeholder='From' />
              <TextInput style={styles.textinputB} placeholder='To' />
              <TextInput style={styles.textinputC} placeholder='Departure ' />
            </View>

            <View style={styles.box2}>
            <TouchableOpacity onPress={''} style={{top:'47%', zIndex:1}}>
           <Image source={require('./../Assets/und.png')}  />  
    </TouchableOpacity>
              <Text style={styles.text}>Flight 2</Text>
              <TextInput style={styles.textinputA} placeholder='From' />
              <TextInput style={styles.textinputB} placeholder='To' />
              <TextInput textContentType='date' style={styles.textinputC} placeholder='Departure' />
            </View>
            {addFlight}

            <View style={styles.butt}>
              <Button buttonStyle={{ backgroundColor: '', width: 193, height: 50, borderColor: '#83B4FD', borderRadius: 10, borderWidth: 2, border: 1 }} onPress={Flight} titleStyle={{ color: '#83B4FD' }} title={'+    Add another flight'} />
            </View>
            <View style={styles.row3}>
              <Button buttonStyle={{ backgroundColor: '#00527E', borderRadius: 5, height: 49 }} title='Search Flight' />
            </View>
          </ScrollView>
        </View>

      </ScrollView>
    </View>


);
}
export default MultiCity

const styles = StyleSheet.create({


container2: {
  
  display:'flex',
  flexDirection:'column',
  
  
      marginTop:23,
    },
butt:{
   marginTop:40,
   left:20,
//    bottom:200,

},
 text:{

    fontWeight:'bold',
    right:'36%',
    fontSize:20,
    bottom:5,
 },
  
 box1:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginTop:-55,
},
 box2:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginTop:20,
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
    textinputC: {
      border:1,
      borderWidth:1,
      borderColor:'#00527E',
      width:'90%',
      height: 50,
      borderRadius:10,
      paddingLeft:8,
      top:20,
    },
    row2:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      bottom:50,
      marginTop:50,
      left:5,
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
        left:20,
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