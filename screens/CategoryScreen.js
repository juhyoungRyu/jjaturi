import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

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
            <Image
              style={styles.icon}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/jjaturi-d75ad.appspot.com/o/default%2Fme.png?alt=media&token=8aeeb9a2-11de-4d9d-8470-a2c741391067",
              }}
            />
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
            <Image
              style={styles.icon}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/jjaturi-d75ad.appspot.com/o/default%2Fpaint.png?alt=media&token=0d4d037d-3de7-4ad9-b070-2b99e8552f94",
              }}
            />
            <Text>페인트</Text>
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
            <Image
              style={styles.icon}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/jjaturi-d75ad.appspot.com/o/default%2Fwallpaper.png?alt=media&token=0a7c5bbf-f2c3-4752-8e8b-8e90ee476149",
              }}
            />
            <Text>벽지</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.con}
            onPress={() => {
              navigation.navigate("plus", {
                cat: "공구",
              });
            }}
          >
            <Image
              style={styles.icon}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/jjaturi-d75ad.appspot.com/o/default%2Ftool1.png?alt=media&token=0dbc307c-add2-4662-b98e-f4d09a1a4b05",
              }}
            />
            <Text>공구</Text>
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
    height: 100,
    width: 100,
    marginBottom: 5,
    borderRadius: 60,
    resizeMode: "contain",
  },
  con: {
    alignItems: "center",
    width: "30%",
  },
});
