import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowRight2, Profile, Security, Share } from "iconsax-react-native";
import useNav from "../../hooks/useNav";

const Item = ({ text, screen }: { text: string; screen: string }) => {
  const { navigator } = useNav();
  const getIcon = (name: string) => {
    switch (name) {
      case "Profile":
        return <Profile color="#6E34B8" />;
        break;
      case "Security":
        return <Security color="#6E34B8" />;
        break;
      case "Referrals":
        return <Share color="#6E34B8" />;
      default:
        break;
    }
  };
  return (
    <View className="flex-row mt-5 my-5 gap-2 items-center">
      <View>{getIcon(screen)}</View>
      <Text className="flex-1 text-2xl ">{text}</Text>

      <TouchableOpacity onPress={() => navigator.navigate(screen)}>
        <ArrowRight2 />
      </TouchableOpacity>
    </View>
  );
};

export default Item;
