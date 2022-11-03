import { SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";
import Card from "../components/Card/Card";
import QuickAccess from "../components/QuickAccess";
import Transactions from "../components/Transactions/Transactions";
const Main = () => {
  return (
    <SafeAreaView className="bg-white flex-1 py-10">
      <Header />
      <Card name="Shopping" bg="#6E34B8" />
      <QuickAccess />
      <Transactions />
    </SafeAreaView>
  );
};

export default Main;
