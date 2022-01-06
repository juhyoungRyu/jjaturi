import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
const Stack = createNativeStackNavigator();
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { firestore } from "../firebase";

const HomeScreen = ({ navigation }) => {
  const [master, setMaster] = useState([]);

  useEffect(() => {
    fetchPosts();
    // return () => {};
  }, []);

  const fetchPosts = () => {
    let data = [];

    firestore
      .collection("product")
      .get()
      .then((res) => {
        res.forEach((doc) => {
          data = [...data, doc.data()];
        });
        setMaster(data);
      })
      .catch((error) => console.log(error.message));
  };

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
              navigation.navigate("buy", { src: master });
            }}
          >
            <View style={styles.icon} />
            <Text>삽니다</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.con}
            onPress={() => {
              navigation.navigate("paint", { src: master });
            }}
          >
            <View style={styles.icon} />
            <Text>페인트</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.con}
            onPress={() => {
              navigation.navigate("tools", { src: master });
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
              navigation.navigate("wallpaper", { src: master });
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

const Buy = ({ route, navigation }) => {
  const { src } = route.params;
  const dataRe1 = src.filter(function (item) {
    return item.category == "삽니다";
  });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
     
      <View>
        {dataRe1.map((obj, key) => (
          <Text key={key}>{obj.name}</Text>
        ))}
      </View>
    </View>
  );
};

const Paint = ({ route, navigation }) => {
  const { src } = route.params;
  const dataRe2 = src.filter(function (item) {
    return item.category == "페인트";
  });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
      <View>
        {dataRe2.map((obj, key) => (
          <Text key={key}>{obj.name}</Text>
        ))}
      </View>
    </View>
  );
};

const Tools = ({ route, navigation }) => {
  const { src } = route.params;
  const dataRe3 = src.filter(function (item) {
    return item.category == "공구";
  });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
     
      <View>
        {dataRe3.map((obj, key) => (
          <Text key={key}>{obj.name}</Text>
        ))}
      </View>
    </View>
  );
};

const WallPaper = ({ route, navigation }) => {
  const { src } = route.params;
  const dataRe4 = src.filter(function (item) {
    return item.category == "벽지";
  });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
      <View>
        {dataRe4.map((obj, key) => (
          <Text key={key}>{obj.name}</Text>
        ))}
      </View>
    </View>
  );
};
const CategoryScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="buy"
        component={Buy}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="paint"
        component={Paint}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="tools"
        component={Tools}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="wallpaper"
        component={WallPaper}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
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
