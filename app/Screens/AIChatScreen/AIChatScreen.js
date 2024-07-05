import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Image,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const AIChatScreen = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const flatListRef = useRef(null);

  const query = async (data) => {
    console.log("Request Payload:", data);
    
    const response = await fetch(
      "https://api-inference.huggingface.co/models/google/flan-t5-small",
      {
        headers: {
          Authorization: "Bearer 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",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    console.log("Raw Response:", result);
    return result;
  };

  const sendMessage = async () => {
    if (inputMessage.trim() === "") return;

    const newMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      time: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);
    setInputMessage("");

    setLoading(true);

    try {
      const response = await query({ inputs: inputMessage });

      console.log("API Response:", response);

      const aiMessage = {
        id: Date.now().toString(),
        text: response.generated_text?.trim() || "No response text found",
        sender: "ai",
        time: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage = {
        id: Date.now().toString(),
        text: "Sorry, I couldn't fetch a response. Please try again.",
        sender: "ai",
        time: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    setLoading(false);
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  const renderMessageItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === "user" ? styles.userMessage : styles.aiMessage,
      ]}
    >
      {item.sender === "ai" && (
        <Image
          source={require("../../assets/aiassistant.png")}
          style={styles.aiImage1}
        />
      )}
      <Text style={[styles.messageText, item.sender === "ai" && styles.aiText]}>
        {item.text}
      </Text>
      <Text style={styles.messageTime}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Image
          source={require("../../assets/aiassistant.png")}
          style={styles.aiImage}
        />
        <Text style={styles.headerTitle}>AI Assistant</Text>
      </View>

      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
        onContentSizeChange={() =>
          flatListRef.current?.scrollToEnd({ animated: true })
        }
      />

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#2073cc" />
        </View>
      )}

      <KeyboardAvoidingView behavior="padding" style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Send a message"
          value={inputMessage}
          onChangeText={setInputMessage}
          onSubmitEditing={sendMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <MaterialCommunityIcons name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00527e",
    paddingVertical: 40,
    paddingHorizontal: 15,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 10,
  },
  aiImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: 10,
  },
  aiImage1: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  messagesList: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  messageContainer: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    maxWidth: "75%",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#2073cc",
  },
  aiMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#e1e1e1",
  },
  messageText: {
    fontSize: 17,
    color: "#fff",
    marginLeft: 10,
    maxWidth: "85%",
  },
  aiText: {
    color: "#000",
  },
  messageTime: {
    fontSize: 10,
    color: "#e1e1e1",
    marginTop: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00527e",
    padding: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  input: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 5,
    backgroundColor: "#fff",
    borderColor: "#00527e",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 40,
    marginTop: 20,
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#2073cc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 25,
  },
  loadingContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
});

export default AIChatScreen;
