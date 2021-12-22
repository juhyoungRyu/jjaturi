import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { auth } from "../firebase";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [em, setEm] = useState("");

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, pw)
      .then(() => navigation.replace("main"))
      .catch((error) => {
        setEm(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>계정 만들기</Text>
      <View style={{ flexDirection: "row", marginBottom: 40 }}>
        <FontAwesome5 name="user-circle" size={24} color="#444" />
        <TextInput
          placeholder="이름 (실명)"
          maxLength={4}
          style={styles.input}
        />
      </View>

      <View style={{ flexDirection: "row", marginBottom: 40 }}>
        <MaterialCommunityIcons name="email-outline" size={24} color="#444" />
        <TextInput placeholder="이메일" maxLength={40} style={styles.input} />
      </View>

      <View style={{ flexDirection: "row", marginBottom: 80 }}>
        <FontAwesome name="lock" size={24} color="#444" />
        <TextInput placeholder="비밀번호" maxLength={30} style={styles.input} />
      </View>

      <Text style={styles.btn}>계정 생성</Text>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    marginBottom: 70,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    fontSize: 14,
    width: "61%",
    marginLeft: 12,
  },
  btn: {
    backgroundColor: "blue",
    color: "white",
    borderRadius: 5,
    padding: 10,
    fontSize: 20,
    width: "55%",
    textAlign: "center",
  },
});
