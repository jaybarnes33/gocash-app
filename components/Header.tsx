import { View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const Header = () => {
  return (
    <View className="px-5">
      <View>
        <Text className="text-2xl font-semi">Wallet</Text>
      </View>
      <View>
        <Text className="font-semibold text-gray-400">Active</Text>
      </View>
    </View>
  );
};

export default Header;
