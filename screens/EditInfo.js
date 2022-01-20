import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Image,
  Alert,
} from "react-native";
import { auth } from "../firebase";

const EditInfo = ({ navigation }) => {
  const [name, setName] = useState(auth.currentUser.displayName);
  const [chat, setChat] = useState(auth.currentUser.photoURL.substring(6));
  const [photo, setPhoto] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true}></StatusBar>
      <View style={styles.nav}>
        <TouchableOpacity
          style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
          onPress={() => {
            navigation.replace("account");
          }}
        >
          <AntDesign
            name="arrowleft"
            size={20}
            color="black"
            style={{ marginLeft: 20 }}
          />
          <Text style={styles.title}>정보 수정</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.photoCon}>
        {photo ? (
          <Image source={{ uri: photo }} style={styles.pickSize} />
        ) : (
          <View style={styles.pickSize} />
        )}

        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => {
            Alert.alert("죄송합니다", "아직 준비중입니다 :)");
            // pickImage();
          }}
        >
          <Text style={{ fontSize: 17, color: "rgb(72,156,203)" }}>
            사진 바꾸기
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.1 }} />
      <View style={styles.inputCon}>
        <View style={styles.inputCC}>
          <Feather
            name="arrow-right-circle"
            size={24}
            color="black"
            style={{ marginLeft: -20 }}
          />
          <TextInput
            style={styles.input}
            placeholder="아이디"
            value={name}
            onChangeText={(text) => {
              setName(text);
            }}
          />
        </View>
        <View style={styles.inputCC}>
          <Feather
            name="arrow-right-circle"
            size={24}
            color="black"
            style={{ marginLeft: -20 }}
          />
          <TextInput
            style={styles.input}
            placeholder="오픈채팅 링크"
            value={chat}
            onChangeText={(text) => {
              setChat(text);
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            auth.currentUser
              .updateProfile({
                displayName: auth.currentUser.displayName,
                photoURL: auth.currentUser.photoURL.substring(0, 6) + chat,
              })
              .then(() => {
                alert("성공!");
                console.log(auth.currentUser.photoURL);
              });
          }}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
            수정
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 24,
    marginLeft: 10,
  },
  photoCon: {
    flex: 0.3,
    // backgroundColor: "teal",
    justifyContent: "center",
    alignItems: "center",
  },
  inputCon: {
    flex: 0.5,
    alignItems: "center",
    // backgroundColor: "teal",
  },
  inputCC: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "teal",
  },
  input: {
    width: "100%",
    marginLeft: 10,
    borderBottomWidth: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  btn: {
    padding: 12,
    backgroundColor: "rgb(72,156,203)",
    borderRadius: 20,
    width: "30%",
    marginTop: 40,
  },
  pickSize: {
    backgroundColor: "grey",
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});
