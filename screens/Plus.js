import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
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
  Image,
} from "react-native";

const Plus = () => {
  const [photo, setPhoto] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

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
        <View style={styles.picker}>
          {photo && <Image source={{ uri: photo }} style={styles.pickSize} />}
          {photo ? null : (
            <Feather
              style={styles.camera}
              name="camera"
              size={26}
              color="black"
            />
          )}
        </View>

        <TouchableOpacity style={{ padding: 40 }} onPress={pickImage}>
          <Text style={styles.take}>Take a Picture</Text>
        </TouchableOpacity>

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
  picker: {
    backgroundColor: "#cccccc",
    width: "80%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
  },
  camera: {
    textAlign: "center",
  },
  take: {
    color: "#BA0000",
    fontSize: 20,
    marginTop: -10,
    marginBottom: 10,
  },
  pickSize: {
    width: "100%",
    height: "100%",
    // resizeMode: "contain",
  },
});
