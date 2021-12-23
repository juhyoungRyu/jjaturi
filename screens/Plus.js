import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
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
  ActivityIndicator,
} from "react-native";
import { firestore } from "../firebase";
import { storage } from "../firebase";
import { LogBox } from "react-native";
import { tk } from "../firebase";

LogBox.ignoreLogs(["Setting a timer"]);

const Plus = () => {
  const navigation = useNavigation();
  const db = firestore;

  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const [gps, setGps] = useState("");
  const [uploading, setUploading] = useState(false);

  const DBURL = "gs://jjaturi-d75ad.appspot.com/image/";

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
      base64: true,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

  const upload = async () => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", photo, true);
      xhr.send(null);
    });

    const dn = Date.now();

    const ref = storage.ref().child("image/" + dn);
    const snapshot = ref.put(blob);

    snapshot.on(
      tk.STATE_CHANGED,
      () => {
        setUploading(true);
      },
      (error) => {
        setUploading(false);
        console.log(error);
        blob.close();
        return;
      },
      () => {
        snapshot.snapshot.ref
          .getDownloadURL()
          .then(async (url) => {
            setUploading(false);
            blob.close();
            console.log(url);
            await db
              .collection("product")
              .add({
                name: name,
                price: price,
                content: content,
                date: new Date(),
                photo: url,
                gps: gps,
                like: 0,
                look: 0,
              })
              .then(() => {
                navigation.replace("Home");
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((e) => {
            console.log(e);
          });
      }
    );
  };

  const onChangeTitle = (payload) => setName(payload);
  const onChangePrice = (payload) => setPrice(payload);
  const onChangeContent = (payload) => setContent(payload);
  const onChangeGps = (payload) => setGps(payload);

  return (
    <View style={{ flex: 3 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Text style={{ fontSize: 20 }}>상품 글쓰기</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="제목"
          onChangeText={onChangeTitle}
          value={name}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="가격"
          keyboardType="number-pad"
          onChangeText={onChangePrice}
          value={price}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="거래 위치"
          onChangeText={onChangeGps}
          value={gps}
        ></TextInput>
        <TextInput
          style={styles.inputCon}
          placeholder="내용"
          maxLength={100}
          multiline={true}
          onChangeText={onChangeContent}
          value={content}
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

        <View style={styles.nav}>
          <TouchableOpacity style={styles.cancleBtn}>
            <Text
              color="#000"
              style={styles.cancleText}
              onPress={() => {
                navigation.replace("Home");
              }}
            >
              취소
            </Text>
          </TouchableOpacity>
          {uploading ? (
            <ActivityIndicator size="large" color="#000" />
          ) : (
            <TouchableOpacity style={styles.pushBtn} onPress={upload}>
              <Text style={styles.pushBtnText}>올리기</Text>
            </TouchableOpacity>
          )}
        </View>
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
    marginTop: 50,
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
    backgroundColor: "#2c97ea",
    borderRadius: 5,
    padding: 15,
    width: "25%",
    marginTop: 10,
    marginLeft: 40,
  },
  pushBtnText: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
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
    // flex: 1,
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
  nav: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 40,
    marginBottom: -40,
  },
  cancleBtn: {
    backgroundColor: "#dc3545",
    borderRadius: 5,
    padding: 15,
    width: "25%",
    marginTop: 10,
    marginRight: 40,
  },
  cancleText: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
  },
});
