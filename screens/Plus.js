import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

const Plus = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="title"></TextInput>
      <TextInput style={styles.input} placeholder="price"></TextInput>
      <TextInput
        style={styles.inputCon}
        placeholder="content"
        maxLength={100}
        multiline={true}
      ></TextInput>
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
    margin: 5,
    padding: 7,
    borderWidth: 1,
    borderRadius: 5,
  },
  inputCon: {
    width: "80%",
    height: "9%",
    margin: 10,
    padding: 7,
    borderWidth: 1,
    borderRadius: 5,
    textAlignVertical: "top",
  },
  pushBtn: {
    backgroundColor: "#dc3545",
    borderRadius: 5,
    padding: 10,
    width: "15%",
    textAlign: "center",
    color: "white",
    marginTop: 20,
  },
});
