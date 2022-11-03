import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import Transactions from "../components/Transactions/Transactions";
import { ArrowLeft } from "iconsax-react-native";
import useNav from "../hooks/useNav";

const Trans = () => {
  const { navigator } = useNav();
  return (
    <SafeAreaView className="bg-white flex-1">
      <TouchableOpacity
        className="absolute top-[45] px-4 z-10"
        onPress={() => navigator.navigate("Navigation")}
      >
        <ArrowLeft size={30} color="#6E34B8" />
      </TouchableOpacity>
      <Transactions />
    </SafeAreaView>
  );
};

export default Trans;
