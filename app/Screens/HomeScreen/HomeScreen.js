import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity, FlatList, Image, Animated } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { data, data2, data3, recreationalSitesData } from "../../Data";
import { GestureHandlerRootView, TapGestureHandler, State } from "react-native-gesture-handler";

const { height } = Dimensions.get("window");

const HomeScreen = () => {
  const navigation = useNavigation();
  const [likedItems, setLikedItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(null);

  const scrollY = useRef(new Animated.Value(0)).current;

  const onBellOutlinePressed = () => {
    navigation.navigate("Notification");
  };

  const handleDoubleTap = (id) => {
    setLikedItems((prevLikedItems) => ({
      ...prevLikedItems,
      [id]: !prevLikedItems[id],
    }));
  };

  // Search Queries
  const updateSearch = (text) => {
    setSearchQuery(text);
    // Filter data based on search query
    const filtered = data.concat(data2, data3, recreationalSitesData).filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered.length > 0 ? filtered : null);
  };

  const renderItem = ({ item }) => (
    <View>
      <View style={styles.itemContainer}>
        <TapGestureHandler
          onHandlerStateChange={({ nativeEvent }) => {
            if (nativeEvent.state === State.ACTIVE) {
              handleDoubleTap(item.id);
            }
          }}
          numberOfTaps={2}
        >
          <View>
            <Image source={item.imageUrl} style={styles.image} />
            <TouchableOpacity
              style={[
                styles.heartIcon,
                likedItems[item.id] && styles.heartIconLiked,
              ]}
            >
              <MaterialCommunityIcons
                name="heart"
                size={18}
                color={likedItems[item.id] ? "red" : "white"}
              />
            </TouchableOpacity>
          </View>
        </TapGestureHandler>
        <TouchableOpacity
          onPress={() => navigation.navigate('PopularDestination', { destination: item })}
        >
          <Text>{item.name}</Text>
          <Text>Price ${item.id}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const getKeyExtractor = (prefix) => (item) => `${prefix}-${item.id}`;

  const navigateToChatScreen = () => {
    navigation.navigate('AIChat');
  };

  const Book = function(){
    navigation.navigate('Oneway');
  }; 

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.Text}>
            Good Morning, Ama{"\n"}
            <Text style={styles.text}>Where are you going?</Text>
          </Text>
          <TouchableOpacity onPress={onBellOutlinePressed}>
            <MaterialCommunityIcons name="bell-outline" size={24} color="#7D7D7D" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <CustomInput
            placeholder="Search for your next destination"
            bordercolor="#7D7D7D"
            borderRadius="7"
            iconName="search"
            icon={<MaterialCommunityIcons name="magnify" size={20} color="#7D7D7D" />}
            onChangeText={updateSearch} 
          />
        </View>

        <TouchableOpacity onPress={Book} style={styles.bookFlightButton}>
          <View style={styles.bookFlightButtonContent}>
            <Image source={require("../../assets/images/inclined.png")} style={styles.bookFlightButtonImage} />
            <Text style={styles.bookFlightButtonText}>Book a flight</Text>
          </View>
        </TouchableOpacity>

        <Animated.ScrollView
          contentContainerStyle={styles.scrollContainer}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        >
          {/* Render filtered or original data based on search */}
          {searchQuery.length > 0 && filteredData ? (
            <>
              <Text style={styles.sectionTitle}>Search Results</Text>
              <FlatList
                data={filteredData}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={getKeyExtractor("search")}
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContainer}
              />
            </>
          ) : (
            <>
              {/* First FlatList */}
              <Text style={styles.sectionTitle}>Popular Destinations</Text>
              <FlatList
                data={data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={getKeyExtractor("popular")}
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContainer}
              />

              {/* Second FlatList */}
              <Text style={styles.sectionTitle}>Good Deals Just For You</Text>
              <Text style={styles.writing}>
                Save 20% on Flights to Europe! Book your summer getaway now
              </Text>
              <FlatList
                data={data2}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={getKeyExtractor("deals")}
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContainer}
              />

              {/* Third FlatList */}
              <Text style={styles.sectionTitle}>Trip Inscription</Text>
              <Text style={styles.writing}>
                Experience the world through new cultures and breathtaking landscapes.
              </Text>
              <FlatList
                data={data3}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={getKeyExtractor("trips")}
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContainer}
              />

              {/* Fourth FlatList */}
              <Text style={styles.sectionTitle}>Recreational Sites Around the World</Text>
              <FlatList
                data={recreationalSitesData}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={getKeyExtractor("recreational")}
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContainer}
              />
            </>
          )}
        </Animated.ScrollView>
        <TouchableOpacity style={styles.aiIcon} onPress={navigateToChatScreen}>
          <Image source={require("../../assets/aiassistant.png")} style={styles.aiImage} />
        </TouchableOpacity>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  Text: {
    fontSize: 20,
    fontWeight: "300",
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  bookFlightButton: {
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    borderColor: "#00527e",
    borderWidth: 1.5,
    justifyContent: "center",
    marginHorizontal: 16,
    marginBottom: 20,
  },
  bookFlightButtonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  bookFlightButtonImage: {
    width: 18,
    left: -5,
    height: 18,
    marginRight: 8,
  },
  bookFlightButtonText: {
    color: "#00527e",
    fontSize: 16,
  },
  flatListContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  itemContainer: {
    position: "relative",
    paddingBottom: 30,
  },
  image: {
    width: 187,
    height: 128,
    borderRadius: 6,
    resizeMode: "cover",
    marginHorizontal: 4,
  },
  heartIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    borderRadius: 12,
    padding: 4,
  },
  heartIconLiked: {
    //backgroundColor: "red",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
    marginTop: 20,
  },
  writing: {
    fontSize: 15,
    marginLeft: 16,
    marginTop: 20,
  },
  aiIcon: {
    position: "absolute",
    bottom: 100,
    right: 20,
    zIndex: 10,
  },
  aiImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
});

export default HomeScreen;
