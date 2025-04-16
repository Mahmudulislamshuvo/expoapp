import React from "react";
import { Tabs } from "expo-router";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Tabicons from "../../helpers/tabicons";

const Tablayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "green",
          height: 70,
          marginHorizontal: 5,
          borderRadius: 50,
          position: "absolute",
          bottom: 10,
        },
        tabBarIconStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          borderRadius: 50,
        },
      }}
    >
      <Tabs.Screen
        name="(home)/index"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Tabicons
                Iconname="home"
                focused={focused}
                IconColor={"white"}
                Titlename={"Home"}
              />
            );
          },
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="(signin)/index"
        options={{
          tabBarIcon: ({ focused }) => {
            return <Tabicons />;
          },
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="(signup)/index"
        options={{
          tabBarIcon: ({ focused }) => {
            return <Tabicons />;
          },
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
};

export default Tablayout;
