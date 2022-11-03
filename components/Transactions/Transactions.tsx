import { View, Text, ScrollView } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
const Transactions = () => {
  const transactions = [
    {
      name: "Netflix",
      description: "Monthly Subscription",
      amount: 12,
    },
    {
      name: "PayPal",
      description: "Monthly Subscription",
      amount: 12,
    },
    {
      name: "PayPal",
      description: "Monthly Subscription",
      amount: 12,
    },
    {
      name: "Hostel",
      description: "Monthly Subscription",
      amount: 12,
    },
    {
      name: "PayPal",
      description: "Hostel fees",
      amount: 12,
    },

    {
      name: "Spotify",
      description: "Monthly Subscription",
      amount: 12,
    },
  ];
  return (
    <View className="px-5 my-10">
      <View className="flex-row justify-between items-center flex-1 absolute w-full top-[-15] left-5 bg-white">
        <Text className="text-xl font-semi">Transactions</Text>
        <Text className="font-semi">View all</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {transactions.map((transaction, index) => (
            <View
              key={index}
              className="flex-row justify-start gap-x-5 my-2 items-center"
            >
              <Feather name="arrow-right-circle" size={20} color="#ffa500" />
              <View className="flex-1">
                <Text className="font-semi text-lg">{transaction.name}</Text>
                <Text className="font-reg">{transaction.description}</Text>
              </View>
              <Text className="text-xl font-semi text-[#2f1155]">
                GHS {transaction.amount}
              </Text>
            </View>
          ))}
        </View>
        <View>
          {transactions.map((transaction, index) => (
            <View
              key={index}
              className="flex-row justify-start gap-x-5 my-2 items-center"
            >
              <Feather name="arrow-right-circle" size={20} color="#ffa500" />
              <View className="flex-1">
                <Text className="font-bold text-lg text-[#2f1155]">
                  {transaction.name}
                </Text>
                <Text>{transaction.description}</Text>
              </View>
              <Text className="text-xl font-bold text-[#2f1155]">
                GHS {transaction.amount}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Transactions;
