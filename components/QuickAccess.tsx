import Feathericons from "@expo/vector-icons/Feather";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AddCircle, Card, Chart2, MoneySend } from "iconsax-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../App";
import useNav from "../hooks/useNav";

const QuickAccess = () => {
  const { navigator } = useNav();
  return (
    <View className="flex-row gap-4 px-10 mt-4 justify-between">
      <TouchableOpacity
        className="items-center justify-center"
        onPress={() => navigator.navigate("Topup")}
      >
        <AddCircle size={30} color="#6E34B8" variant="TwoTone" />
        <Text className="text-center font-reg">Topup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="items-center justify-center"
        onPress={() => navigator.navigate("Send")}
      >
        <MoneySend size="30" color="#6E34B8" variant="TwoTone" />
        <Text className="text-center font-reg">Send</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="items-center justify-center"
        onPress={() => navigator.navigate("Cards")}
      >
        <Card color="#6E34B8" size={30} variant="TwoTone" />
        <Text className="text-center font-reg">Cards</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="items-center justify-center"
        onPress={() => navigator.navigate("Transactions")}
      >
        <Chart2 size={30} color="#6E34B8" variant="TwoTone" />
        <Text className="text-center">Transactions</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuickAccess;
