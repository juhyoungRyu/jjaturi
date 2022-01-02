import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
  Image,
  StatusBar,
} from "react-native";

import { firestore } from "../firebase";

const SearchScreen = ({ navigation }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [searcher, setSearcher] = useState("");

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
        setFilteredData(data);
        setMasterData(data);
      })
      .catch((error) => console.log(error.message));
  };

  const ItemView = ({ item }) => {
    console.log(item);
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("detail", {
            name: item.name,
            price: item.price,
            gps: item.gps,
            content: item.content,
            like: item.like,
            look: item.look,
            photo: item.photo,
            user: item.user,
            num: item.number,
            category: item.category,
            url: item.url,
          });
        }}
        style={styles.itemCon}
      >
        <View style={{ width: "60%" }}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>{item.price}원</Text>
          <Text style={styles.itemGps}>{item.gps}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const ItemSeperatorView = () => {
    return (
      <View
        style={{ height: 0.5, width: "100%", backgroundColor: "c8c8c8" }}
      ></View>
    );
  };

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setSearcher(text);
      setFilteredData(masterData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 2 }}>
      <View style={styles.container}>
        <StatusBar hidden={true}></StatusBar>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            borderBottomWidth: 1,
            borderColor: "#D3D3D3",
          }}
        >
          <TouchableOpacity
            style={styles.nav}
            onPress={() => {
              navigation.replace("Home");
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <TextInput
            style={styles.textInputStyle}
            value={searcher}
            placeholder="무엇을 찾고계신가요?"
            underlineColorAndroid="transparent"
            onChangeText={(text) => {
              setSearcher(text);
              searchFilter(text);
            }}
          ></TextInput>
        </View>
        <FlatList
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeperatorView}
          renderItem={ItemView}
          style={styles.list}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
};
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  itemStyle: {
    padding: 15,
  },
  textInputStyle: {
    height: 60,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    backgroundColor: "#D3D3D3",
    marginBottom: 20,
    width: "85%",
    marginLeft: 10,
    color: "black",
    borderRadius: 15,
    borderColor: "transparent",
    marginBottom: 5,
  },
  nav: {
    marginLeft: 10,
  },
  list: {
    marginTop: 10,
  },
  itemName: {
    marginLeft: 20,
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 15,
    marginLeft: 20,
  },
  itemGps: {
    fontSize: 15,
    marginLeft: 20,
  },
  itemCon: {
    borderBottomWidth: 1,
    borderColor: "#D3D3D3",
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15,
  },
});
