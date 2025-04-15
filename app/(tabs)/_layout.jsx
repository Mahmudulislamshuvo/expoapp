import React from "react";
import { Tabs } from "expo-router";

const Tablayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "green",
        },
      }}
    >
      <Tabs.Screen name="(home)/index" />
      <Tabs.Screen name="(signin)/index" />
      <Tabs.Screen name="(signup)/index" />
    </Tabs>
  );
};

export default Tablayout;
