import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { auth } from "../firebase";

export default function LoadingScreen() {
  const navigation = useNavigation();
  const user = auth.currentUser;

  auth.onAuthStateChanged((user) => {
    user ? navigation.replace("Home") : navigation.replace("Login");
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="black" />
      <Text style={styles.loading}>Loading</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    margin: 5,
    marginTop: 10,
    fontSize: 15,
  },
});
