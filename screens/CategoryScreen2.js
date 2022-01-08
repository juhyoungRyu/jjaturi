import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
const Stack = createNativeStackNavigator();
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { firestore } from "../firebase";
import { AntDesign } from "@expo/vector-icons";

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
              navigation.navigate("paint", { src: master });
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
          <TouchableOpacity
            style={styles.con}
            onPress={() => {
              navigation.navigate("tools", { src: master });
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
        <View style={styles.row2}>
          <TouchableOpacity
            style={styles.con}
            onPress={() => {
              navigation.navigate("wallpaper", { src: master });
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
              alert("준비중입니다!");
            }}
          >
            <View style={styles.cms} />
            <Text>Coming Soon!</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.replace("Home");
          }}
          style={{
            flex: 4,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 300,
          }}
        >
          <AntDesign name="closecircleo" size={27} color="black" />
        </TouchableOpacity>
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
          <View key={key} style={styles.paintCon}>
            <Text>{obj.name}</Text>
            <Text>{obj.price}</Text>
            <Text>{obj.gps}</Text>
          </View>
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
    height: 100,
    width: 100,
    marginBottom: 5,
    borderRadius: 60,
    resizeMode: "contain",
  },
  cms: {
    height: 100,
    width: 100,
    marginBottom: 5,
    backgroundColor: "grey",
    borderRadius: 100,
  },
  con: {
    alignItems: "center",
    width: "30%",
  },
  paintCon: {},
});
