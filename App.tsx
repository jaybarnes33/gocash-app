import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./screens/Main";
import Navigation from "./components/Tab";
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Add from "./screens/Add";
import Topup from "./screens/Topup";
import Send from "./screens/Send";
import Cards from "./screens/Cards";
import Transactions from "./screens/Transactions";

export type RootStackParamList = {
  Navigation: undefined;
  Login: undefined;
  Register: undefined;
  Add: undefined;
  Send: undefined;
  Topup: undefined;
  Cards: undefined;
  Transactions: undefined;
};
export default function App() {
  const [fontsLoaded] = useFonts({
    PoppinsReg: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsSemi: require("./assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsThin: require("./assets/fonts/Poppins-Thin.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen component={Add} name="Add" />
        <Stack.Screen component={Topup} name="Topup" />
        <Stack.Screen component={Send} name="Send" />
        <Stack.Screen component={Cards} name="Cards" />
        <Stack.Screen component={Register} name="Register" />
        <Stack.Screen component={Transactions} name="Transactions" />
        <Stack.Screen component={Navigation} name="Navigation" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
