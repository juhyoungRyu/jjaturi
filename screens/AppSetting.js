import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  BackHandler,
} from "react-native";

const AppSetting = ({ navigation }) => {
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
            navigation.replace("my");
          }}
        >
          <AntDesign
            name="arrowleft"
            size={20}
            color="black"
            style={{ marginLeft: 20 }}
          />
          <Text style={styles.title}>앱 설정</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <TouchableOpacity
          style={styles.inList}
          onPress={() => {
            navigation.replace("account");
          }}
        >
          <FontAwesome5
            name="address-card"
            size={28}
            color="#555"
            style={{ marginRight: 10 }}
          />
          <Text style={{ fontSize: 25, marginLeft: 10, color: "#555" }}>
            계정 관리
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.inList}
          onPress={() => {
            alert("아직 사용할 수 없어요!");
          }}
        >
          <Text style={{ fontSize: 25, marginLeft: 10, color: "#555" }}>
            Coming Soon
          </Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={styles.inList}
          onPress={() => {
            alert("아직 사용할 수 없어요!");
          }}
        >
          <Text style={{ fontSize: 25, marginLeft: 10, color: "#555" }}>
            Coming Soon
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default AppSetting;

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
    flex: 0.9,
  },
  inList: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
  },
});
