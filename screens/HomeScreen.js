import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
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
  const [hope, setHope] = useState([]);
  const [modalSet, setModalSet] = useState(false);

  let save = [];

  const handlePlus = () => {
    navigation.replace("plus");
  };

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    firestore
      .collection("product")
      .get()
      .then((res) => {
        res.forEach((doc) => {
          // save = [...save, doc.data()];
          save = [...save, doc.data()];
          setHope(save);
        });
      })
      .catch((error) => console.log(error));
  };

  const loadFunc = () => {
    hope.forEach((pd) => {
      console.log(pd);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity>
          <Text style={styles.title}>JJATURI</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scvcon}>
        {hope.map((pd, key) => (
          <TouchableOpacity key={key}>
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
              >
                <View style={styles.ext}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Foundation
                      name="heart"
                      size={15}
                      color="black"
                      style={{ marginRight: 10 }}
                    />
                    <Text>{pd.like}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: 10,
                    }}
                  >
                    <AntDesign
                      name="eye"
                      size={15}
                      color="black"
                      style={{ marginRight: 10 }}
                    />
                    <Text>{pd.look}</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.bottom}>
        <View style={styles.home}>
          <TouchableOpacity>
            <AntDesign name="home" size={24} color="#000" style={styles.btn} />
          </TouchableOpacity>
        </View>

        <View style={styles.add}>
          <TouchableOpacity
            onPress={() => {
              handlePlus();
            }}
          >
            <View style={styles.plusBtn}>
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
              navigation.replace("out");
            }}
          >
            <AntDesign name="user" size={24} color="#000" style={styles.btn} />
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
    flexDirection: "row",
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: "grey",
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
    borderTopWidth: 1,
    borderColor: "#444",
  },
  btn: {
    fontSize: 23,
    marginTop: 14,
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
    alignItems: "center",
  },
  ext: {
    textAlign: "center",
    flexDirection: "row",
    marginTop: 90,
    marginRight: 10,
  },
});
