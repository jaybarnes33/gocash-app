import { Platform, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";
import Main from "../screens/Main";
import { Chart2, Notification, Setting, Wallet2 } from "iconsax-react-native";

const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,

        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return (
              <Wallet2
                variant={focused ? "Bold" : "Outline"}
                color={focused ? "white" : "grey"}
              />
            );
          } else if (route.name === "Notifications") {
            return (
              <Notification
                variant={focused ? "Bold" : "Outline"}
                color={focused ? "white" : "grey"}
              />
            );
          } else if (route.name === "Settings") {
            return (
              <Setting
                variant={focused ? "Bold" : "Outline"}
                color={focused ? "white" : "grey"}
              />
            );
          } else if (route.name === "Stats") {
            return (
              <Chart2
                variant={focused ? "Bold" : "Outline"}
                color={focused ? "white" : "grey"}
              />
            );
          }
        },
        tabBarStyle: {
          position: "absolute",
          width: "90%",
          margin: "5%",
          paddingTop: Platform.OS === "ios" ? "7%" : "unset",
          height: 70,
          backgroundColor: "#2F1155",
          borderRadius: 50,
        },

        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Main} />
      <Tab.Screen name="Stats" component={Main} />
      <Tab.Screen name="Notifications" component={Main} />
      <Tab.Screen name="Settings" component={Main} />
    </Tab.Navigator>
  );
};

export default Navigation;
