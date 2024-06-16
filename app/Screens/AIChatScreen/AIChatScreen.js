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
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const AIChatScreen = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const flatListRef = useRef(null);

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

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: inputMessage,
          max_tokens: 150,
        },
        {
          headers: {
            Authorization: `Bearer YOUR_OPENAI_API_KEY`,
            'Content-Type': 'application/json',
          },
        }
      );

      const aiMessage = {
        id: Date.now().toString(),
        text: response.data.choices[0].text.trim(),
        sender: "ai",
        time: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);

      flatListRef.current?.scrollToEnd({ animated: true });
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  };

  const renderMessageItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === "user" ? styles.userMessage : styles.aiMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.messageTime}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Image source={require("../../assets/aiassistant.png")} style={styles.aiImage} />
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
  messagesList: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  messageContainer: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    maxWidth: "75%",
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
  },
  messageTime: {
    fontSize: 12,
    color: "#e1e1e1",
    alignSelf: "flex-end",
    marginTop: 5,
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
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#00527e",
    paddingHorizontal: 15,
    paddingVertical: 30,
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#2073cc",
    borderRadius: 10,
    padding: 10,
  },
});

export default AIChatScreen;

