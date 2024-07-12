import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MyAccountUser from './MyAccountUser';
import ChangePassword from './ChangePassword';
import DeleteAccount from './DeleteAccount';
import LogoutModal from './LogoutModal';

const ManageAccount = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    // Handle the actual logout process here
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack(MyAccountUser)}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Manage Account</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(ChangePassword)}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(DeleteAccount)}>
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
      <LogoutModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleLogout}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 200
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: -20,
    paddingBottom: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    marginTop: 10,
  },
  backButton: {
    padding: 10,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#005780',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 20,
    width: '85%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ManageAccount;
