import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalDropdown from 'react-native-modal-dropdown';

const CountryLanguageSelection = ({ navigation }) => {
  const [countrySearch, setCountrySearch] = useState('');
  const [languageSearch, setLanguageSearch] = useState('');

  const countries = ['United States', 'Canada', 'United Kingdom', 'Australia'];
  const languages = ['English', 'Spanish', 'French', 'German'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Country & Language</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <Text style={styles.label}>Search a Country & Currency</Text>
          <View style={styles.searchBar}>
            <ModalDropdown
              options={countries}
              style={styles.dropdown}
              dropdownStyle={styles.dropdownStyle}
              textStyle={styles.dropdownText}
              onSelect={(index, value) => setCountrySearch(value)}
              renderButtonText={(text) => <Text>{text}</Text>}
            >
              <TextInput
                style={styles.input}
                placeholder="Search"
                value={countrySearch}
                editable={false}
              />
            </ModalDropdown>
            <Icon name="search" size={20} color="#000" />
          </View>
        </View>
        <View style={styles.searchContainer}>
          <Text style={styles.label}>Choose a language</Text>
          <View style={styles.searchBar}>
            <ModalDropdown
              options={languages}
              style={styles.dropdown}
              dropdownStyle={styles.dropdownStyle}
              textStyle={styles.dropdownText}
              onSelect={(index, value) => setLanguageSearch(value)}
              renderButtonText={(text) => <Text>{text}</Text>}
            >
              <TextInput
                style={styles.input}
                placeholder="Search"
                value={languageSearch}
                editable={false}
              />
            </ModalDropdown>
            <Icon name="search" size={20} color="#000" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    backgroundColor: '#00527E',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 10,
    marginTop: 70,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 30,
    marginTop: 70,
    alignSelf: 'center'
  },
  content: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
  },
  dropdown: {
    flex: 1,
  },
  dropdownStyle: {
    width: '90%',
    marginTop: 10,
  },
  dropdownText: {
    fontSize: 16,
    padding: 10,
  },
});

export default CountryLanguageSelection;
