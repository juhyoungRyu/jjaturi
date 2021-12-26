import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DetailScreen = ({ route, navigation }) => {
  const { name, price, content, gps, photo, look, like, test } = route.params;

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>name : {name}</Text>
      <Text style={{ fontSize: 30 }}>price : {price}</Text>
      <Text>It works</Text>
      <TouchableOpacity onPress={() => navigation.replace("Home")}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
