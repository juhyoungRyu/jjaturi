import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
} from "react-native";

// import { useEffect, useState } from "react/cjs/react.production.min";
import { firestore } from "../firebase";

const SearchScreen = () => {
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
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          value={searcher}
          placeholder="search Here"
          underlineColorAndroid="transparent"
          onChangeText={(text) => {
            setSearcher(text);
            searchFilter(text);
          }}
        ></TextInput>
        <FlatList
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeperatorView}
          renderItem={ItemView}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
};
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
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
    borderColor: "#009688",
    backgroundColor: "white",
  },
});
