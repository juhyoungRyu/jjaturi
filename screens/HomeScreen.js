import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handlePlus = () => {
    navigation.replace("plus");
  };

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity>
          <Text style={styles.title}>JJATURI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.plus} onPress={handlePlus}>
          <AntDesign name="pluscircleo" size={24} color="#000"></AntDesign>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.product}>
          <Text>이름</Text>
          <Text>가격</Text>
          <Text>이름</Text>
          <Text>🤍0</Text>
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
});
