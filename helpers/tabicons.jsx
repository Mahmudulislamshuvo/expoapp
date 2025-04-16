import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

name = "name";
const Tabicons = ({ children }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {children}
    </View>
  );
};

export default Tabicons;
