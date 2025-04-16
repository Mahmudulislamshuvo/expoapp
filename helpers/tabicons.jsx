import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

name = "name";
const Tabicons = ({
  focused = false,
  Iconname = "question",
  IconColor,
  Titlename,
}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AntDesign name={Iconname} size={24} color={IconColor} />
      <Text style={{ color: IconColor }}>{Titlename || "Home"}</Text>
    </View>
  );
};

export default Tabicons;
