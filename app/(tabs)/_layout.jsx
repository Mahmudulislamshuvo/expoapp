import React from "react";
import { Tabs } from "expo-router";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Tabicons from "../../helpers/tabicons";
import { Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Tablayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#DB4444",
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
            if (focused) {
              return (
                <Tabicons>
                  <AntDesign name="home" size={26} color="#22c55e" />
                  <Text className="text-green-500 font-extrabold">Home</Text>
                </Tabicons>
              );
            } else {
              return (
                <Tabicons>
                  <AntDesign name="home" size={24} color="white" />
                  <Text className="text-white">Home</Text>
                </Tabicons>
              );
            }
          },
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="(signin)/index"
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Tabicons>
                  <AntDesign name="login" size={26} color="#22c55e" />
                  <Text className="text-green-500 font-extrabold">Login</Text>
                </Tabicons>
              );
            } else {
              return (
                <Tabicons>
                  <AntDesign name="login" size={24} color="white" />
                  <Text className="text-white">Login</Text>
                </Tabicons>
              );
            }
          },
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="(signup)/index"
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Tabicons>
                  <MaterialIcons
                    name="app-registration"
                    size={26}
                    color="#22c55e"
                  />
                  <Text className="text-green-500 font-extrabold">Sign Up</Text>
                </Tabicons>
              );
            } else {
              return (
                <Tabicons>
                  <MaterialIcons
                    name="app-registration"
                    size={24}
                    color="white"
                  />
                  <Text className="text-white">Sign Up</Text>
                </Tabicons>
              );
            }
          },
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
};

export default Tablayout;
