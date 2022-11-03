import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Item from "../components/Settings/Item";

const Settings = () => {
  const settings = ["Profile", "Security", "Referrals"];
  return (
    <SafeAreaView className="py-7">
      <Text className="text-3xl font-bold px-5">Settings</Text>
      <View className="px-5 mt-4">
        {settings.map((setting) => (
          <Item text={setting} key={setting} screen={setting} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Settings;
