import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import My from "./screens/My";
import Plus from "./screens/Plus";
import SignIn from "./screens/SignIn";
import test from "./screens/test";
import LoadingScreen from "./screens/LoadingScreen";
import DetailScreen from "./screens/DetailScreen";
import CategoryScreen from "./screens/CategoryScreen";
import AppSetting from "./screens/AppSetting";
import Account from "./screens/Account";
import EditInfo from "./screens/EditInfo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Loading"
          component={LoadingScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="my"
          component={My}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="plus"
          component={Plus}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="signIn"
          component={SignIn}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="detail"
          component={DetailScreen}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="category"
          component={CategoryScreen}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="appSet"
          component={AppSetting}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="account"
          component={Account}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="editInfo"
          component={EditInfo}
        ></Stack.Screen>
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="test"
          component={test}
        ></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
