import { View, Text } from "react-native";
import React from "react";

const Card = ({ name, bg }: { name: string; bg: string }) => {
  return (
    <View
      className="mx-5 mt-4 px-5 py-14  flex-row justify-between "
      style={{ backgroundColor: bg, borderRadius: 40 }}
    >
      <View>
        <Text className="font-semi text-white">Balance</Text>
        <Text className="font-bolder text-white text-2xl">GHS 1000</Text>
      </View>
      <View>
        <Text className="font-semi text-white">Card</Text>
        <Text className="font-bolder text-white text-2xl capitalize">
          {name}
        </Text>
      </View>
    </View>
  );
};

export default Card;
