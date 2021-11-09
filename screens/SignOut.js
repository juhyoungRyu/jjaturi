import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { auth } from "../firebase";
import LoginScreen from "./LoginScreen";

const SignOut = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
        console.log("sign out");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
        <Text style={styles.email}>Email : {auth.currentUser?.email}</Text>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container3}>
        <TouchableOpacity>
          <AntDesign
            name="close"
            size={24}
            color="#000"
            style={styles.btn}
            onPress={() => {
              navigation.replace("Home");
            }}
          ></AntDesign>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignOut;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  container2: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    alignItems: "center",
    borderRadius: 15,
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  email: {
    textAlign: "center",
    width: "80%",
    marginTop: 50,
    fontSize: 17,
    fontWeight: "300",
    borderRadius: 15,
  },
  container3: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  btn: {
    fontSize: 30,
    marginBottom: 40,
  },
});
