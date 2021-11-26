import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { firestore } from "../firebase";

const HomeScreen = () => {
  const navigation = useNavigation();
  const db = firestore;

  const handlePlus = () => {
    navigation.replace("plus");
  };

  const ref = () => {
    firestore
      .collection("product")
      .get()
      .then((res) => {
        res.forEach((doc) => {
          const dt = doc.data();
          console.log(doc.data());
          console.log(dt.가격);
          console.log(dt.내용);
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={ref}>
          <Text style={styles.title}>JJATURI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.plus} onPress={handlePlus}>
          <AntDesign name="pluscircleo" size={24} color="#000"></AntDesign>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.product}>
          <Image style={styles.thumbnail}></Image>
          <Text style={styles.name}>피스마이너스원</Text>
          <Text style={styles.date}>2021년 11월 27일</Text>
          <Text style={styles.price}>500,000원</Text>
          <Text style={styles.like}>🤍0</Text>
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <TouchableOpacity>
          <AntDesign name="home" size={24} color="#000" style={styles.btn} />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign
            name="message1"
            size={24}
            color="#000"
            style={styles.btn}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.replace("out");
          }}
        >
          <AntDesign name="user" size={24} color="#000" style={styles.btn} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    flexDirection: "row",
    marginTop: 20,
  },
  title: {
    justifyContent: "flex-start",
    fontSize: 28,
    padding: 15,
  },
  product: {
    backgroundColor: "#666",
    color: "#222",
    alignItems: "center",
    fontSize: 40,
    padding: 10,
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    padding: 10,
  },
  btn: {
    fontSize: 23,
    marginTop: 14,
    marginBottom: 14,
  },
  plus: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 25,
  },
  thumbnail: {
    width: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  date: {
    color: "blue",
    fontSize: 13,
  },
});
