import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { auth } from "../firebase";

const DetailScreen = ({ route, navigation }) => {
  const { name, price, content, gps, photo, look, like, user, num, category } =
    route.params;
  const [ht, setHt] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.imageCon}>
        <Image
          style={styles.photo}
          source={{
            uri: photo,
          }}
        />
      </View>
      <View style={styles.profileView}>
        <View
          style={{
            padding: 40,
            backgroundColor: "grey",
            borderRadius: 40,
            marginLeft: 10,
          }}
        />
        <View style={{ flexDirection: "column", marginLeft: 10, marginTop: 5 }}>
          {/* 유저 정보 컨테이너 */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              marginBottom: 5,
            }}
          >
            {/* 닉네임, 아이디  */}
            <Text style={styles.userName}>{user}</Text>
            <Text style={styles.userId}>#{num}</Text>
            {/* 유저 정보 컨테이너 */}
          </View>
          <Text style={styles.userGps}>{gps}</Text>
          <Text style={styles.userCat}>{category}</Text>
        </View>
        <Text style={styles.chatBtn}>채팅하기</Text>
      </View>
      <ScrollView style={styles.contentView}>
        <View style={styles.product}>
          <View style={{ marginLeft: 20, marginBottom: 20 }}>
            <Text style={styles.contentName}>{name}</Text>
            <Text style={styles.contentValue}>{content}</Text>
          </View>
        </View>
        <View style={styles.nextPro}>
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 120,
            }}
          >
            Comming Soon
          </Text>
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 220,
            }}
          >
            Comming Soon
          </Text>
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <View style={styles.htPrice}>
          <TouchableOpacity
            onPress={() => {
              if (ht == true) {
                setHt(false);
              } else {
                setHt(true);
              }
            }}
          >
            {ht ? (
              <AntDesign
                name="heart"
                size={24}
                color="red"
                style={{ marginRight: 20 }}
              />
            ) : (
              <AntDesign
                name="hearto"
                size={24}
                color="red"
                style={{ marginRight: 20 }}
              />
            )}
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 5,
              fontWeight: "700",
              marginBottom: 5,
            }}
          >
            {price}원
          </Text>
        </View>
        <Text style={styles.btn}>채팅하기</Text>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imageCon: {
    flex: 0.7,
    width: "100%",
    marginTop: 40,
  },
  photo: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  profileView: {
    flex: 0.23,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 20,
    borderBottomWidth: 1,
  },
  contentView: {
    flex: 0.3,
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    width: "100%",
  },
  bottom: {
    flex: 0.15,
    flexDirection: "row",
    borderTopWidth: 1,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
    borderColor: "rgb(90,90,90)",
  },
  userName: {
    fontSize: 19,
    marginRight: 4,
  },
  userId: {
    fontSize: 11,
    color: "rgb(90,90,90)",
  },
  userGps: {
    fontSize: 17,
    color: "rgb(90,90,90)",
  },
  contentName: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 40,
    fontWeight: "700",
  },
  contentValue: {
    fontSize: 18,
    marginBottom: 10,
  },
  product: {
    borderBottomWidth: 1,
  },
  htPrice: {
    flexDirection: "row",
    width: "30%",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 15,
    marginRight: 40,
    marginLeft: 20,
  },
  btn: {
    padding: 11,
    backgroundColor: "rgb(72,156,203)",
    borderRadius: 20,
    width: "30%",
    textAlign: "center",
    color: "white",
    marginLeft: 30,
  },
  chatBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(72,156,203)",
    color: "white",
    borderRadius: 20,
    padding: 10,
    width: "22%",
    textAlign: "center",
    marginTop: 15,
    marginLeft: 90,
  },
  userCat: {
    fontSize: 13,
    color: "rgb(90,90,90)",
  },
});
