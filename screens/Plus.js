import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  button,
  TouchableOpacity,
} from "react-native";

const Plus = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="title"></TextInput>
      <TextInput style={styles.input} placeholder="content"></TextInput>
      <TextInput style={styles.input} placeholder="price"></TextInput>
      <TouchableOpacity>
        <Text style={styles.pushBtn}>올리기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Plus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    margin: 10,
    padding: 7,
    borderWidth: 1,
    borderRadius: 5,
  },
  pushBtn: {
    backgroundColor: "#dc3545",
    borderRadius: 5,
    padding: 10,
    width: "15%",
    textAlign: "center",
    color: "white",
    marginTop: 10,
  },
});
