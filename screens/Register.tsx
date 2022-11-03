import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Call, Message, PasswordCheck } from "iconsax-react-native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../App";

const Register = ({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList>;
}) => {
  const handlePress = () => {
    navigation.navigate("Navigation");
  };

  return (
    <SafeAreaView className="bg-white flex-1 py-8">
      <Text className="mt-5 text-center text-2xl px-5 font-semi ">
        Immediately Feel The Ease of Transacting Just by Registering
      </Text>

      <View
        style={{ borderRadius: 10 }}
        className="bg-[#F2F2F2] m-3  flex-row items-center px-2"
      >
        <Call color="#6E34B8" />
        <TextInput
          placeholder="Phone Number"
          className="p-3 text-lg font-reg flex-1"
        />
      </View>
      <View
        style={{ borderRadius: 10 }}
        className="bg-[#F2F2F2] m-3  flex-row items-center px-2"
      >
        <Message color="#6E34B8" />
        <TextInput
          placeholder="Email"
          className="p-3 text-lg font-reg flex-1"
        />
      </View>
      <View
        style={{ borderRadius: 10 }}
        className="bg-[#F2F2F2] m-3  flex-row items-center px-2"
      >
        <PasswordCheck color="#6E34B8" />
        <TextInput
          placeholder="Password"
          className="p-3 text-lg font-reg flex-1"
        />
      </View>
      <View style={{ borderRadius: 10 }} className="flex-row justify-center">
        <TouchableOpacity
          className="bg-[#6E34B8] p-3  w-[170] flex-row justify-center"
          onPress={handlePress}
          style={{ borderRadius: 10 }}
        >
          <Text
            className="text-lg  text-white"
            style={{ fontFamily: "PoppinsSemi" }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
      <View className="items-center">
        <Text className="text-gray-400 mt-3 font-reg">Sign in with</Text>

        <View className="flex-row items-center gap-1 mt-2">
          <Image
            source={require("../assets/google.png")}
            style={{ width: 30, height: 30 }}
          />
          <Text className="font-reg">Google</Text>
        </View>
      </View>
      <View className="flex-row justify-center mt-5 items-center">
        <Text className="font-reg">Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text className="text-blue-500 font-reg">Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;
