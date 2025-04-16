import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View className="flex-1 bg-white px-6 py-10">
      <Text className="text-2xl font-bold text-green-700 mb-6">Register</Text>

      {/* First Name */}
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-base"
        placeholder="First Name"
        placeholderTextColor="#999"
      />

      {/* Email */}
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-base"
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor="#999"
      />

      {/* Mobile */}
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-base"
        placeholder="Mobile Number"
        keyboardType="phone-pad"
        placeholderTextColor="#999"
      />

      {/* Password */}
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-6 text-base"
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#999"
      />

      {/* Submit Button */}
      <TouchableOpacity className="bg-green-600 py-3 rounded-xl">
        <Text className="text-white text-center font-bold text-base">
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
