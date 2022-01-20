import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  BackHandler,
} from "react-native";
import { auth, du } from "../firebase";

const Account = ({ navigation }) => {
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
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity
          style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
          onPress={() => {
            navigation.replace("appSet");
          }}
        >
          <AntDesign
            name="arrowleft"
            size={20}
            color="black"
            style={{ marginLeft: 20 }}
          />
          <Text style={styles.title}>계정 관리</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <TouchableOpacity
          style={styles.inList}
          onPress={() => {
            navigation.replace("editInfo");
          }}
        >
          <FontAwesome5
            name="user-edit"
            size={28}
            color="#555"
            style={{ marginRight: 10 }}
          />
          <Text style={{ fontSize: 25, marginLeft: 10, color: "#555" }}>
            정보 수정
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inList}
          onPress={() => {
            // console.log("work");
            Alert.alert("로그아웃", "정말 로그아웃 하시겠습니까?", [
              {
                text: "아니요",
              },
              {
                text: "네",
                onPress: () => {
                  auth.signOut();
                  navigation.replace("Login");
                },
              },
            ]);
          }}
        >
          <MaterialIcons
            name="logout"
            size={28}
            color="#555"
            style={{ marginRight: 10 }}
          />
          <Text style={{ fontSize: 25, marginLeft: 10, color: "#555" }}>
            로그아웃
          </Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity
        onPress={() => {
          Alert.alert("계정 삭제", "정말 계정을 삭제하시겠습니까?", [
            {
              text: "아니요",
            },
            {
              text: "예",
              onPress: () => {
                auth.currentUser.delete().then(() => {
                  navigation.replace("signIn");
                });
              },
            },
          ]);
        }}
        style={{ flex: 0.4, alignItems: "center", justifyContent: "center" }}
      >
        <Text style={{ color: "#dc3545", fontSize: 20, marginTop: 70 }}>
          계정 삭제
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Account;

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
  list: {
    flex: 0.5,
  },
  inList: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
  },
  test: {},
});
