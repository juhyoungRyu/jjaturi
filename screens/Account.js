import React from "react";
import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { auth } from "../firebase";

const Account = ({ navigation }) => {
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
            auth.signOut();
            navigation.replace("Login");
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
