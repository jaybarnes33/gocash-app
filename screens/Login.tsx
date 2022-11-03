import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Message, PasswordCheck, User } from "iconsax-react-native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../App";

const Login = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  const handlePress = () => {
    navigation.navigate("Navigation");
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <Text
        className="mt-5 text-center text-lg px-5 font-semi "
        style={{ fontFamily: "PoppinsSemi" }}
      >
        Welcome Back to GoCash
      </Text>

      <View className="bg-[#F2F2F2] m-3  flex-row items-center px-2">
        <User color="#6E34B8" />
        <TextInput
          placeholder="Phone Number"
          className="p-3 text-lg"
          style={{ fontFamily: "PoppinsReg", borderRadius: 10 }}
        />
      </View>

      <View className="bg-[#F2F2F2] m-3  flex-row items-center px-2">
        <PasswordCheck color="#6E34B8" />
        <TextInput
          placeholder="Password"
          className="p-3 text-lg"
          style={{ fontFamily: "PoppinsReg", borderRadius: 10 }}
        />
      </View>
      <View className="flex-row justify-center">
        <TouchableOpacity
          className="bg-[#6E34B8] p-3  w-[170] flex-row justify-center"
          onPress={handlePress}
          style={{ borderRadius: 10 }}
        >
          <Text
            className="text-lg  text-white"
            style={{ fontFamily: "PoppinsSemi" }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View className="items-center">
        <Text className="text-gray-400 mt-3">Sign in with</Text>

        <View className="flex-row items-center gap-1 mt-2">
          <Image
            source={require("../assets/google.png")}
            style={{ width: 30, height: 30 }}
          />
          <Text>Google</Text>
        </View>
      </View>
      <View className="flex-row justify-center mt-5">
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text className="text-blue-500">Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
