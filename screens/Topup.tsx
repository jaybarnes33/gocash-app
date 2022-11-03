import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import Card from "../components/Card/Card";
export const cards = ["Netflix", "AWS", "Shopping"];
const Topup = () => {
  const [card, setCard] = useState("");

  return (
    <SafeAreaView>
      <Text className="text-3xl font-semi text-center mt-5">Topup</Text>
      <Card name={card} bg="#6E34B8" />
      <Picker
        selectedValue={card}
        onValueChange={(itemValue, itemIndex) => setCard(itemValue)}
      >
        {cards.map((item) => (
          <Picker.Item key={item} label={item} value={item.toLowerCase()} />
        ))}
      </Picker>
    </SafeAreaView>
  );
};

export default Topup;
