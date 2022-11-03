import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";

const useNav = () => {
  const navigator = useNavigation<NavigationProp<RootStackParamList>>();
  return { navigator };
};

export default useNav;
