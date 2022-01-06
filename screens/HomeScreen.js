import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

// import { AntDesign } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { auth, firestore, firebase } from "../firebase";

const HomeScreen = ({ navigation }) => {
  const [hope, setHope] = useState([]);

  useEffect(() => {
    load();
    return () => {
      console.log("Clean Up");
    };
    console.log("실행 안됨");
  }, []);

  const load = () => {
    let save = [];

    firestore
      .collection("product")
      .get()
      .then((res) => {
        res.forEach((doc) => {
          save = [...save, doc.data()];
        });
        setHope(save);
      })
      .catch((error) => console.log(error.message));
  };

  const handlePlus = () => {
    navigation.replace("category");
  };

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => {
            console.log(hope);
          }}
        >
          <Text style={styles.title}>JJATURI</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.replace("category2");
          }}
        >
          <Entypo name="menu" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.replace("search");
          }}
        >
          <AntDesign
            name="search1"
            size={24}
            color="black"
            style={{ marginRight: 40 }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scvcon}>
        {hope.map((pd, key) => (
          <TouchableOpacity
            style={{ width: "100%", alignItems: "center" }}
            key={key}
            onPress={() => {
              navigation.navigate("detail", {
                name: pd.name,
                price: pd.price,
                gps: pd.gps,
                content: pd.content,
                like: pd.like,
                look: pd.look,
                photo: pd.photo,
                user: pd.user,
                num: pd.number,
                category: pd.category,
                url: pd.url,
              });
            }}
          >
            <View style={styles.write}>
              <Image
                style={styles.photo}
                source={{
                  uri: pd.photo,
                }}
              />
              <View style={styles.writeInner}>
                <Text style={styles.innerName}>{pd.name}</Text>
                <Text style={styles.innerGps}>{pd.gps}</Text>
                <Text style={styles.innerPrice}>{pd.price}원</Text>
                {/* <Text style={styles.innerContent}>{pd.content}</Text> */}
              </View>
              <View
                style={{
                  justifyContent: "flex-end",
                  flexDirection: "row",
                  width: "50%",
                }}
              ></View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.bottom}>
        <View style={styles.home}>
          <TouchableOpacity
            style={{ alignItems: "center", marginLeft: 17 }}
            onPress={() => {
              console.log(auth.currentUser);
            }}
          >
            <AntDesign name="home" size={24} color="#000" style={styles.btn} />
            <Text style={{ marginTop: -10 }}>홈</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.add}>
          <TouchableOpacity
            onPress={() => {
              handlePlus();
            }}
          >
            <View style={{ marginLeft: 15 }}>
              <AntDesign
                name="pluscircleo"
                size={30}
                color="black"
                style={styles.btn}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.mypage}>
          <TouchableOpacity
            onPress={() => {
              navigation.replace("my");
            }}
            style={{ alignItems: "center" }}
          >
            <AntDesign name="user" size={24} color="#000" style={styles.btn} />
            <Text style={{ marginTop: -10 }}>마이페이지</Text>
          </TouchableOpacity>
        </View>
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
    flex: 0.1,
    flexDirection: "row",
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: "grey",
    alignItems: "center",
    justifyContent: "space-between",
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
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    // padding: 10,
    borderTopWidth: 1,
    borderColor: "#444",
  },
  btn: {
    fontSize: 23,
    marginTop: 5,
    marginBottom: 14,
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
    fontSize: 14,
    fontWeight: "600",
  },
  date: {
    color: "blue",
    fontSize: 13,
  },
  photo: {
    width: 110,
    height: 110,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  write: {
    flexDirection: "row",
    marginTop: 5,
    // backgroundColor: "red",
    borderColor: "grey",
    width: "95%",
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  writeInner: {
    justifyContent: "space-evenly",
    marginLeft: 15,
  },
  innerName: {
    fontSize: 20,
    marginTop: -10,
  },
  innerPrice: {
    fontSize: 18,
    marginTop: -15,
  },
  innerContent: {
    fontSize: 10,
  },
  innerGps: {
    fontSize: 13,
    marginBottom: 20,
    marginTop: -19,
  },
  scvcon: {
    flex: 0.8,
    alignItems: "center",
  },
  ext: {
    textAlign: "center",
    flexDirection: "row",
    marginTop: 90,
    marginRight: 10,
  },
});
