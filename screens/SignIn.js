import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../firebase";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import firebase from "../firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [userName, setUserName] = useState("");
  const [em, setEm] = useState("");
  const navigation = useNavigation();

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, pw)
      .then(() => {
        navigation.replace("Home");
      })
      .catch((error) => {
        setEm(error.message);
        console.log(em);
      });

    if (pw.length <= 6) {
      alert("비밀번호는 최소 6글자 이상이여야 합니다");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>
      <View style={{ flexDirection: "row", marginBottom: 40 }}>
        <FontAwesome5 name="user-circle" size={24} color="#444" />
        <TextInput
          placeholder="이름 (실명)"
          maxLength={4}
          style={styles.input}
          value={userName}
          onChangeText={(text) => setUserName(text)}
        />
      </View>

      <View style={{ flexDirection: "row", marginBottom: 40 }}>
        <MaterialCommunityIcons name="email-outline" size={24} color="#444" />
        <TextInput
          placeholder="이메일"
          maxLength={40}
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
      </View>

      <View style={{ flexDirection: "row", marginBottom: 50 }}>
        <FontAwesome name="lock" size={24} color="#444" />
        <TextInput
          secureTextEntry
          placeholder="비밀번호"
          maxLength={30}
          style={styles.input}
          value={pw}
          onChangeText={(text) => setPw(text)}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          handleSignUp();
        }}
      >
        <Text style={styles.btn}>계정 생성</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.replace("Login");
        }}
      >
        <Text style={styles.wantSignUp}>계정이 있으신가요?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 80,
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
    width: "55%",
    color: "white",
    backgroundColor: "#6a75a3",
    textAlign: "center",
    fontSize: 20,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 65,
  },
  back: {},
  wantSignUp: {
    color: "#6a75a3",
    fontWeight: "900",
    fontSize: 15,
    marginTop: 20,
  },
});
