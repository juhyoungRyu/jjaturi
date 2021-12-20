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
  const [hope, setHope] = useState([]);
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
        <TouchableOpacity style={styles.plus} onPress={handlePlus}>
          <AntDesign name="pluscircleo" size={24} color="#000"></AntDesign>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scvcon}>
        {hope.map((pd, key) => (
          <View key={key} style={styles.write}>
            <Image
              style={styles.photo}
              source={{
                uri: pd.photo,
              }}
            />
            <View style={styles.writeInner}>
              <Text style={styles.innerName}>{pd.name}</Text>
              <Text style={styles.innerPrice}>{pd.price}원</Text>
              <Text style={styles.innerContent}>{pd.content}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.bottom}>
        <TouchableOpacity>
          <AntDesign name="home" size={24} color="#000" style={styles.btn} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => loadFunc()}>
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
    marginLeft: 35,
  },
  innerName: {
    fontSize: 20,
  },
  innerPrice: {
    fontSize: 12,
  },
  innerContent: {
    fontSize: 10,
  },
  scvcon: {
    alignItems: "center",
  },
});
