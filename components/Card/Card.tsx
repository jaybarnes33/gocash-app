import { View, Text, Image } from "react-native";
import React from "react";

const Card = ({ name, bg }: { name: string; bg: string }) => {
  return (
    <View
      className="mx-5 mt-4 px-5 h-[200]  flex-row justify-between items-center relative border border-[white] "
      style={{ backgroundColor: bg, borderRadius: 30 }}
    >
      <Text className="font-bolder text-white text-lg capitalise absolute left-5 top-6 ">
        {name}
      </Text>
      <Text className="text-2xl font-bolder text-white absolute right-10 top-6">
        GoCash
      </Text>
      <Text className="text-2xl font-bolder capitalise text-white absolute left-5 bottom-6">
        Fiifi Amoah
      </Text>
      <Image
        source={require("../../assets/cardwave.png")}
        className="absolute top-0 left-[-10px] w-screen h-[150] "
      />
      <Image
        source={require("../../assets/plating.png")}
        className="absolute top-[90px] left-[20px] h-[30px] w-[40px] "
      />
      <Image
        source={require("../../assets/ellipse.png")}
        className="absolute bottom-[0px] left-[-5px]"
      />
      <Image
        source={require("../../assets/ellipse.png")}
        className="absolute top-[50px] right-[50px]"
      />
      <Image
        source={require("../../assets/ellipse.png")}
        className="absolute top-[60px] right-[60px]"
      />

      {/* <View>
        <Text className="font-semi text-white">Balance</Text>
        <Text className="font-bolder text-white text-2xl">GHS 1000</Text>
      </View>
      <View>
        <Text className="font-semi text-white">Card</Text>
       
      </View> */}
    </View>
  );
};

export default Card;
