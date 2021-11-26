import { AntDesign } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  BackHandler,
  Alert,
} from "react-native";

const Plus = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={{ flex: 3 }}>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="title"></TextInput>
        <TextInput style={styles.input} placeholder="price"></TextInput>
        <TextInput
          style={styles.inputCon}
          placeholder="content"
          maxLength={100}
          multiline={true}
        ></TextInput>
        <TouchableOpacity style={styles.pushBtn}>
          <Text style={styles.pushBtnText}>올리기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCon}>
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

export default Plus;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  input: {
    width: "80%",
    margin: 10,
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
    padding: 12,
    width: "20%",
    marginTop: 10,
  },
  pushBtnText: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
  },
  btnCon: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  btn: {
    fontSize: 30,
    marginBottom: 40,
  },
});
