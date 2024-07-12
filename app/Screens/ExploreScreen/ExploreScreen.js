import * as React from "react";
import {Text,StyleSheet, View, Image,Pressable, ImageBackground, ScrollView, StatusBar} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";



const Explore = () => {
  const navigation = useNavigation();
  const E2 =function(){
    navigation.navigate('explore2')
  }
  const pop = function(){
    navigation.navigate('PopularDestination')
  }
  return (
    <View style={styles.explore}>
    <StatusBar style="auto" />
      <View style={styles.frameParent}>
        <View>
          <View style={styles.frameGroup}>
            <View style={styles.theWorldAwaitsParent}>
              <Text style={[styles.theWorldAwaits, styles.theWorldAwaitsTypo]}>
                The World Awaits
              </Text>
              <Text style={[styles.uncoverYourNext, styles.yourTypo]}>
                Uncover Your Next Escape with AeroKonnect
              </Text>
            </View>
            {/* <Image
              style={styles.searchIcon}
              resizeMode="cover"
              source={require("../assets/search1.png")}
            /> */}
          </View>
        </View>
        <View style={styles.exploreDifferentPartsOfTheParent}>
          <Text
            style={[styles.exploreDifferentParts, styles.theWorldAwaitsTypo]}
          >
            Explore different parts of the world
          </Text>
          <View style={styles.popularDestinations}>
          
          <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
          
            <View style={styles.imageGroup}>
              <ImageBackground
                style={styles.imageIcon}
                resizeMode="cover"
                source={require("../../assets/image.png")}
              >
                <Image
                  style={styles.favoriteIcon}
                  resizeMode="cover"
                  source={require("../../assets/favorite.png")}
                />
              </ImageBackground>
              <View style={styles.tokyoJapanParent}>
              <TouchableOpacity onPress={pop}>
                <Text style={styles.tokyoJapan}>Tokyo, Japan</Text>
                <Text style={styles.forFlight}>
                  <Text style={styles.text}>$659.00</Text>
                  <Text style={styles.text1}>{` `}</Text>
                  <Text style={styles.forFlight1}>for flight</Text>
                </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.imageContainer}>
              <ImageBackground
                style={styles.imageIcon}
                resizeMode="cover"
                source={require("../../assets/image.png")}
              >
                <Image
                  style={styles.favoriteIcon}
                  resizeMode="cover"
                  source={require("../../assets/favorite.png")}
                />
              </ImageBackground>
              <View style={styles.tokyoJapanParent}>
              <TouchableOpacity onPress={pop}>
                <Text style={styles.tokyoJapan}>Tokyo, Japan</Text>
                <Text style={styles.forFlight}>
                  <Text style={styles.text}>$659.00</Text>
                  <Text style={styles.text1}>{` `}</Text>
                  <Text style={styles.forFlight1}>for flight</Text>
                </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.frameView}>
              <ImageBackground
                style={styles.imageIcon}
                resizeMode="cover"
                source={require("../../assets/image.png")}
              >
                <Image
                  style={styles.favoriteIcon}
                  resizeMode="cover"
                  source={require("../../assets/favorite.png")}
                />
              </ImageBackground>
              <View style={styles.tokyoJapanParent}>
              <TouchableOpacity onPress={pop}>
                <Text style={styles.tokyoJapan}>Tokyo, Japan</Text>
                <Text style={styles.forFlight}>
                  <Text style={styles.text}>$659.00</Text>
                  <Text style={styles.text1}>{` `}</Text>
                  <Text style={styles.forFlight1}>for flight</Text>
                </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.frameView}>
              <ImageBackground
                style={styles.imageIcon}
                resizeMode="cover"
                source={require("../../assets/image.png")}
              >
                <Image
                  style={styles.favoriteIcon}
                  resizeMode="cover"
                  source={require("../../assets/favorite.png")}
                />
              </ImageBackground>
              <View style={styles.tokyoJapanParent}>
              <TouchableOpacity onPress={pop}>
                <Text style={styles.tokyoJapan}>Tokyo, Japan</Text>
                <Text style={styles.forFlight}>
                  <Text style={styles.text}>$659.00</Text>
                  <Text style={styles.text1}>{` `}</Text>
                  <Text style={styles.forFlight1}>for flight</Text>
                </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.frameView}>
              <ImageBackground
                style={styles.imageIcon}
                resizeMode="cover"
                source={require("../../assets/image.png")}
              >
                <Image
                  style={styles.favoriteIcon}
                  resizeMode="cover"
                  source={require("../../assets/favorite.png")}
                />
              </ImageBackground>
              <View style={styles.tokyoJapanParent}>
              <TouchableOpacity onPress={pop}>
                <Text style={styles.tokyoJapan}>Tokyo, Japan</Text>
                <Text style={styles.forFlight}>
                  <Text style={styles.text}>$659.00</Text>
                  <Text style={styles.text1}>{` `}</Text>
                  <Text style={styles.forFlight1}>for flight</Text>
                </Text>
                </TouchableOpacity>
              </View>
            </View>
            </ScrollView>
          </View>
           </View>
        <View style={styles.exploreDifferentPartsOfTheParent}>
          <View>
            <Text
              style={[styles.exploreDifferentParts, styles.theWorldAwaitsTypo]}
            >
              Explore map
            </Text>
            <Text style={[styles.findYourPreferred, styles.yourTypo]}>
              Find your preferred destinations on the map and book your next
              flight
            </Text>
          </View>
          <TouchableOpacity onPress={E2}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../../assets/Group 39.png")}
          />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: 0,
    position: "absolute",
    
  },

  theWorldAwaitsTypo: {
   fontWeight: "500",
  },

  theWorldAwaits: {
    lineHeight: 22,
    width: 157,

    textAlign: "left",
  },
  uncoverYourNext: {
    lineHeight: 19,
    width: 396,
  
  },
  theWorldAwaitsParent: {
    width: 350,
  },

  frameGroup: {

  },
  exploreDifferentParts: {
  
    textAlign: "left",
    marginTop:-12,
  },
  favoriteIcon: {
    width: 24,
    height: 24,
    left:-10,
    top:11,
  },
  imageIcon: {

    width: 187,
    height: 128,
    justifyContent: "flex-end",

    overflow: "hidden",
    flexDirection: "row",
  },
  tokyoJapan: {

    textAlign: "left",
  },


  forFlight: {

    textAlign: "left",
  },
  tokyoJapanParent: {
    marginTop: 10,
    alignItems: "left",
  },
  imageParent: {
    top: 40,
  },
  imageGroup: {
  
    top: 0,

  },
  imageContainer: {

    top: 0,
    marginLeft:10,

  },
  frameView: {
  
    top: 0,
    marginLeft:10,
  
    
  },
  popularDestinations: {
    width:'97.5%',
    marginTop: 12,
    display:'flex',
    flexDirection:'row',
    right:5,

  },
  exploreDifferentPartsOfTheParent: {
    marginTop: 34,
  },
  findYourPreferred: {
    marginTop:5,
    width: '90%',
  },
  frameChild: {
    height: 272,
    marginTop: 12,
    width:'90%',
    borderRadius:10,
  },
  frameParent: {
    top: 66,
    left: 10,
    position: "absolute",
  },
  explore: {
    flex: 1,
    top:10,
 
  },
});

export default Explore;



























































































// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, TextInput,  View, Image, ScrollView, TouchableOpacity, Modal, Picker } from 'react-native';
// import { Button } from 'react-native-elements';

// const Explore = function({navigation}){
//  const hOME = function(){
//  navigation.navigate('home'); 
//  };

//  const mytrips = function(){
// navigation.navigate('MyTrips');
//  };
 
//  const Profile = function(){
// navigation.navigate('profile');
//  };
// return(
//  <View style={styles.container}>
//  <StatusBar style='auto' />

//  <View style={styles.column}>
//           <Text style={styles.Ama}>The World Awaits </Text>
//           <Text style={styles.GO}>Uncover Your Next Escape with AeroKonnect</Text>
// </View>
//   <View style={styles.line}></View>
//  <View style={styles.container2}>

//   <View style={styles.con}>
//     <Text style={{right:'8%', fontSize:18, fontWeight:'bold',color:'#434343',}}>Explore different parts of the world</Text>
//   </View>
//   {/* <View style={styles.pic}>
//   <ScrollView horizontal setshowsHorizontalScrollIndicator={false}>
//    <Image source={require('../Assets/tok.png')}/>  
 

 
//   </ScrollView>
//   </View> */}



//  </View>








//     <View style={styles.footer}>
//         <TouchableOpacity style={styles.footerItem} onPress={hOME} >
//            <Image source={require('./../Assets/home.jpg')} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerItem} onPress={Explore} >
//            <Image source={require('./../Assets/Explore.png')} />
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.footerItem} onPress={mytrips} >
//           <Image source={require('./../Assets/mytrips.jpg')} />
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.footerItem} onPress={Profile} >
//           <Image source={require('./../Assets/profile.jpg')} />
//         </TouchableOpacity>
//      </View>
//  </View>
// );
// }

// export default Explore

// const styles = StyleSheet.create({

// pic:{
// display:'flex',
// // flexDirection:'row',
// justifyContent:'space-between',
// // position:'relative',
// top:'3%',

// // right:'42%',


// },

//   con:{
//   top:'2.5%',
//   },
  
// line:{
// borderTopWidth:1,
// borderTopColor:'#434343',
// top:'1%',
// marginLeft:20,
//  marginRight:20,




// },
//   container2: {
//     display:'flex',
//     flexDirection:'column',
//     alignItems:'center',
 
    
//   },
//   GO:{
//     fontSize:16,
//     // fontWeight:'bold',
//  },
//  column:{
//    marginTop:'15%',
//    display:"flex",
//    flexDirection:'column',
//    justifyContent:'space-between',
//    color: 'black',
//    paddingLeft:'7%',
//  },
//   Ama: {
//     fontWeight:'bold',
//     color:'#434343',
//     fontSize:18,
//   },
//     container:{
//     flex:1,
//     backgroundColor:'white',
//     },
//     footer: {
//       flexDirection: 'row',
    
//       alignItems: 'center',
//       backgroundColor: 'white',
//       height: 100, 
//       borderTopWidth: 1,
//       borderTopColor: '#999', 
//       position:'static',
//       top:'120%',
//     },
//     footerItem: {
//         flex: 1,
//         alignItems: 'center',
//      justifyContent: 'center',
//      bottom:16,
//     },
//     footerText: {
//       fontSize: 16,
//       fontWeight: 'bold',
//     },



// });

