import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ExploreScreen = () => {
  const navigation = useNavigation();

  const onPassengersDetailsPressed = () => {
    navigation.navigate("PassengersDetails");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPassengersDetailsPressed}>
        <Text style={styles.New}>Testing New Page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"violet"
  },
  New: {
    color: 'red',
    fontSize: 40,
  },
});

export default ExploreScreen;
