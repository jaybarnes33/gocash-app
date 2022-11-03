import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card/Card";
import { cards } from "./Topup";
import { ArrowLeft } from "iconsax-react-native";
import useNav from "../hooks/useNav";

const Cards = () => {
  const { navigator } = useNav();
  return (
    <SafeAreaView className="relative">
      <TouchableOpacity
        className="absolute top-[45] px-4 z-10"
        onPress={() => navigator.navigate("Navigation")}
      >
        <ArrowLeft size={30} color="#6E34B8" />
      </TouchableOpacity>
      <Text className="text-center text-2xl font-semi">Cards</Text>
      <ScrollView>
        <Card name={cards[0]} key={cards[0]} bg="#6E34B8" />
        <Card name={cards[1]} key={cards[1]} bg="#140513" />
        <Card name={cards[2]} key={cards[2]} bg="rgb(182, 51, 19)" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cards;
