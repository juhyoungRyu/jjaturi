import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { auth } from "../firebase";

const My = () => {
  const navigation = useNavigation();
  const [tftf, setTftf] = useState(false);

  // const handleSignOut = () => {
  //   auth
  //     .signOut()
  //     .then(() => {
  //       navigation.replace("Login");
  //       console.log("sign out");
  //     })
  //     .catch((error) => alert(error.message));
  // };

  const tf = () => {
    const t = auth.currentUser.photoURL.substring(6, 7);
    if (t == "i") {
      setTftf(false);
    } else if (t == "h") {
      setTftf(true);
    }
  };

  useEffect(() => {
    tf();
  }, [tftf]);

  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <View style={styles.top}>
          <View style={styles.topNav}>
            <Text style={{ marginLeft: 30, fontSize: 22 }}>마이페이지</Text>
            <TouchableOpacity
              onPress={() => {
                console.log(auth.currentUser.photoURL.substring(6, 7));
                console.log(tftf);
              }}
            >
              <AntDesign
                name="setting"
                size={27}
                color="black"
                style={{ marginRight: 30 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.profile}>
            <View style={styles.photo} />
            <View
              style={{
                flexDirection: "column",
                marginTop: 0,
              }}
            >
              <View
                onPress={() => {
                  console.log(auth.currentUser.photoURL);
                }}
              >
                <Text style={{ fontSize: 18, color: "black" }}>
                  {auth.currentUser.displayName}
                </Text>
                <Text style={{ fontSize: 13, color: "#444" }}>
                  #{auth.currentUser.photoURL.substring(0, 6)}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 15,
                  alignItems: "center",
                }}
              >
                {tftf ? (
                  <AntDesign name="checkcircle" size={13} color="#888" />
                ) : (
                  <Feather name="alert-circle" size={13} color="black" />
                )}
                {tftf ? (
                  <Text style={{ fontSize: 12, color: "#444", marginLeft: 5 }}>
                    채팅링크 등록 완료
                  </Text>
                ) : (
                  <Text style={{ fontSize: 12, color: "#444", marginLeft: 5 }}>
                    채팅링크 미등록
                  </Text>
                )}
              </View>
            </View>
            <TouchableOpacity
              style={{ width: "100%" }}
              onPress={() => {
                navigation.replace("editInfo");
              }}
            >
              <Text style={styles.editBtn}>정보 수정</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.two}>
        <View style={styles.buttonCon}>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "rgb(72,156,203)",
                padding: 15,
                borderRadius: 30,
              }}
            >
              <FontAwesome name="shopping-basket" size={24} color="white" />
              <Text style={{ color: "white", marginLeft: 13, fontSize: 18 }}>
                판매 목록
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "rgb(72,156,203)",
                padding: 15,
                borderRadius: 30,
              }}
            >
              <Entypo name="heart" size={24} color="white" />
              <Text style={{ color: "white", marginLeft: 13, fontSize: 18 }}>
                관심 목록
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.manual}>
          <TouchableOpacity
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Ionicons
              name="document-text-outline"
              size={29}
              color="#444"
              style={{ marginTop: 20 }}
            />
            <Text
              style={{
                fontSize: 22,
                color: "#444",
                marginLeft: 10,
                marginTop: 20,
              }}
            >
              앱 설명서
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.setting}>
          <TouchableOpacity
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
            }}
            onPress={() => {
              navigation.replace("appSet");
            }}
          >
            <Ionicons
              name="settings"
              size={29}
              color="#444"
              style={{ marginTop: 20 }}
            />
            <Text
              style={{
                fontSize: 22,
                color: "#333",
                marginLeft: 10,
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              앱 설정
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.three}>
        <TouchableOpacity
          onPress={() => {
            navigation.replace("Home");
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginLeft: 15,
            }}
          >
            <AntDesign
              name="home"
              size={24}
              color="#000"
              style={{ marginBottom: 5, marginTop: 10 }}
            />
            <Text>홈</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <AntDesign
              name="user"
              size={24}
              color="#000"
              style={{ marginBottom: 5, marginTop: 10 }}
            />
            <Text>마이페이지</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default My;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  one: {
    flex: 0.22,
    borderBottomWidth: 1,
    borderColor: "#444",
  },
  two: {
    flex: 0.7,
  },
  three: {
    flex: 0.08,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  profile: {
    width: "100%",
    flexDirection: "row",
    marginTop: 35,
    alignItems: "flex-start",
  },
  photo: {
    padding: 40,
    backgroundColor: "#888",
    width: "10%",
    borderRadius: 60,
    marginLeft: 30,
    marginRight: 10,
  },
  editBtn: {
    padding: 10,
    backgroundColor: "rgb(72,156,203)",
    borderRadius: 30,
    fontSize: 18,
    color: "white",
    width: "22%",
    textAlign: "center",
    marginTop: 15,
    marginLeft: 55,
  },
  buttonCon: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
    marginBottom: 15,
  },
  manual: {
    borderTopWidth: 1,
    marginBottom: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  setting: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});
