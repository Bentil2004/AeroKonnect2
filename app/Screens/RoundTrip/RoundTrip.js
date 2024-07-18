import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { useState } from 'react';

const RoundTrip = function ({ navigation }) {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const swapContent = () => {
    const temp = input1;
    setInput1(input2);
    setInput2(temp);
  };

  const oneway = function () {
    navigation.navigate('Oneway');
  };
  const Multicity = function () {
    navigation.navigate('MultiCity');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.top}>
      <Text style={styles.backButton} onPress={() => navigation.navigate('BottomTab')}>←</Text>
        <Text style={styles.book}>Book your flight</Text>
      </View>

      <View style={styles.mainbut}>
        <Button
          buttonStyle={{ backgroundColor: '#E4EAF1', padding: 5 }}
          onPress={oneway}
          titleStyle={{ bottom: 1, color: '#434343' }}
          title='One-Way'
        />
        <Button
          buttonStyle={{ backgroundColor: '#00527E', borderRadius: 8, padding: 5, width: 111 }}
          onPress={RoundTrip}
          titleStyle={{ bottom: 1 }}
          title='Round-Trip'
        />
        <Button
          buttonStyle={{ backgroundColor: '#E4EAF1', padding: 5 }}
          onPress={Multicity}
          titleStyle={{ bottom: 1, color: '#434343' }}
          title='Multi-City'
        />
      </View>

      <View style={styles.container2}>
        <TextInput
          style={styles.textinputA}
          placeholder='From'
          value={input1}
          onChangeText={text => setInput1(text)}
        />
        <TouchableOpacity onPress={swapContent} style={styles.swapButton}>
          <Image source={require('../../assets/und.png')} style={styles.swapIcon} />
        </TouchableOpacity>
        <TextInput
          style={styles.textinputB}
          placeholder='To'
          value={input2}
          onChangeText={text => setInput2(text)}
        />

        <View style={styles.row1}>
          <TextInput style={styles.textinput1} placeholder='Departure' />
          <TextInput style={styles.textinput2} placeholder='Return' />
        </View>
        <View style={styles.row2}>
          <TextInput style={styles.textinput1} placeholder='Passenger' />
          <TextInput style={styles.textinput2} placeholder='Cabin Class' />
        </View>
        <View style={styles.row3}>
          <Button buttonStyle={{ backgroundColor: '#00527E', borderRadius: 5, height: 49 }} title='Search Flight' />
        </View>
      </View>
    </View>
  );
};

export default RoundTrip;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 15,
  },
  topback: {
    height: 29,
    width: 29,
  },
  book: {
    fontSize: 18,
    color: '#434343',
  },
  backButton: {
    // position: 'absolute',
     left: 10,
     fontSize: 29,
     color: 'black',
   },
  top: {
    display: 'flex',
    flexDirection: 'row',
    gap: 99,
    alignItems: 'center',
    top: '20%',
    left: '3%',
  },
  mainbut: {
    border: 1,
    height: 50,
    marginLeft: 20,
    width: '90%',
    backgroundColor: '#E4EAF1',
    borderRadius: 12,
    marginTop: '25%',
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textinputA: {
    borderWidth: 1,
    borderColor: '#00527E',
    width: '90%',
    height: 50,
    borderRadius: 10,
    paddingLeft: 8,
    marginBottom: 10,
  },
  textinputB: {
    borderWidth: 1,
    borderColor: '#00527E',
    width: '90%',
    height: 50,
    borderRadius: 10,
    paddingLeft: 8,
    marginTop: 10,
  },
  swapButton: {
    position: 'absolute',
    top: 45,
    zIndex: 1,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 15,
  },
  swapIcon: {
    width: 30,
    height: 30,
  },
  row1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 27,
    marginTop: 50,
  },
  textinput1: {
    borderWidth: 1,
    borderColor: '#00527E',
    width: '43%',
    height: 50,
    borderRadius: 10,
    paddingLeft: 8,
    marginRight: 10,
  },
  textinput2: {
    borderWidth: 1,
    borderColor: '#00527E',
    width: '43%',
    height: 50,
    borderRadius: 10,
    paddingLeft: 8,
    marginLeft: 10,
  },
  row2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 15,
  },
  row3: {
    width: '90%',
    marginTop: 20,
  },
  Ama: {
    fontWeight: 'bold',
    color: '#434343',
  },
  GO: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  column: {
    marginTop: '15%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: 'black',
    paddingLeft: '7%',
  },
});
