import React from "react";
import { StyleSheet, Text, View } from "react-native";

const test = () => {
  const testArray = [{ name: "mouse" }, { name: "usb" }];

  const testF = () => {
    testArray.map((val, key) => {
      console.log("hello");
    });
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35 }} onPress={() => testF()}>
        start
      </Text>
      {testArray.map((val, key) => (
        <Text key={key}>{val.name}</Text>
      ))}
    </View>
  );
};

export default test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
