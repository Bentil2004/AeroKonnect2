import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ToDoScreen = ({ route }) => {
  const { activity } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
        <Text style={styles.headerTitle}>{activity.title}</Text>
      </TouchableOpacity>
      
      <Image source={activity.image} style={styles.image} />
      <View style={styles.contentContainer}>
        <ScrollView>
        <Text style={styles.title}>{activity.title}</Text>
        <Text style={styles.description}>{activity.description}</Text>
        <Text style={styles.subtitle}>You can do many things when you visit Mount Fuji</Text>
      <Text style={styles.sectionTitle}>1. Climb Mount Fuji:</Text>
      <Text style={styles.listItem}>• Summit Hike: Tackle the Yoshida, Subashiri, Gotemba, or Fujinomiya trails to reach the summit.</Text>
      <Text style={styles.listItem}>• Sunrise Hike: Start your hike at night to witness the sunrise from the summit, known as "Goraiko."</Text>
      <Text style={styles.sectionTitle}>2. Visit the Fuji Five Lakes:</Text>
      <Text style={styles.listItem}>• Lake Kawaguchi: Enjoy scenic views, boating, and hot springs.</Text>
      <Text style={styles.listItem}>• Lake Yamanaka: Ideal for water sports and bird watching.</Text>
      <Text style={styles.listItem}>• Lake Saiko: Known for camping and the Aokigahara forest.</Text>
      <Text style={styles.listItem}>• Lake Shoji: The smallest lake, perfect for a peaceful retreat.</Text>
      <Text style={styles.listItem}>• Lake Motosu: Famous for the view depicted on the 1,000 yen bill.</Text>
        </ScrollView>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 20,
    marginLeft: 10,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  listItem: {
    fontSize: 16,
    marginVertical: 4,
  },

});

export default ToDoScreen;
