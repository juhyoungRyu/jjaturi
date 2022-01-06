import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CategoryScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 10 }}>
      <View style={styles.title}>
        <Text style={styles.name}>카테고리 페이지</Text>
      </View>
      <View style={styles.category}>
        <View style={styles.row1}>
          <TouchableOpacity
            style={styles.con}
            onPress={() => {
              navigation.navigate("plus", {
                cat: "삽니다",
              });
            }}
          >
            <View style={styles.icon} />
            <Text>삽니다</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.con}
            onPress={() => {
              navigation.navigate("plus", {
                cat: "페인트",
              });
            }}
          >
            <View style={styles.icon} />
            <Text>페인트</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.con}
            onPress={() => {
              navigation.navigate("plus", {
                cat: "공구",
              });
            }}
          >
            <View style={styles.icon} />
            <Text>공구</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
          <TouchableOpacity
            style={styles.con}
            onPress={() => {
              navigation.navigate("plus", {
                cat: "벽지",
              });
            }}
          >
            <View style={styles.icon} />
            <Text>벽지</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.con}
            onPress={() => {
              alert("준비중입니다!");
            }}
          >
            <View style={styles.icon} />
            <Text>Coming Soon!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  title: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    marginTop: 10,
  },
  category: {
    flex: 9,
  },
  name: {
    fontSize: 25,
    marginLeft: 20,
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    // alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    // alignItems: "center",
    marginTop: 20,
  },
  icon: {
    padding: 40,
    backgroundColor: "grey",
    width: "20%",
    marginBottom: 5,
    borderRadius: 50,
  },
  con: {
    alignItems: "center",
    width: "30%",
  },
});
