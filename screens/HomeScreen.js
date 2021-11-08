import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity>
          <Text style={styles.title}>JJATURI</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
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
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    padding: 15,
  },
  text: {
    backgroundColor: "#666",
    color: "#222",
    textAlign: "center",
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
});
