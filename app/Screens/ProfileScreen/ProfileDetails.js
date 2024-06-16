import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileDetails = ({ navigation }) => {

    const onProfileDetailsPressed = () => {
        navigation.navigate('ProfileDetails'); 
    };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onProfileDetailsPressed}>
          <Icon name="chevron-left" size={20} color="#00527e" />
        </TouchableOpacity>
        <Text style={styles.title}>Profile Details</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit</Text>
          <Icon name="pencil" size={16} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.profilePicture}>
          <Text style={styles.profileInitials}>AA</Text>
        </View>
        <Text style={styles.greeting}>Hello, Ama</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailItem}>
          <Text style={styles.detailLabel}>First Name:</Text> Ama
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.detailLabel}>Last Name:</Text> Amane
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.detailLabel}>Date of Birth:</Text> 01/01/0000
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.detailLabel}>Email:</Text> Ama016@email.com
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.detailLabel}>Phone Number:</Text> +233123456789
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editText: {
    marginRight: 5,
    fontSize: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#00527e',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileInitials: {
    fontSize: 36,
    color: '#fff',
  },
  greeting: {
    fontSize: 18,
    color: '#00527e',
  },
  detailsContainer: {
    marginTop: 20,
  },
  detailItem: {
    fontSize: 16,
    marginBottom: 10,
  },
  detailLabel: {
    fontWeight: 'bold',
  },
});

export default ProfileDetails;
