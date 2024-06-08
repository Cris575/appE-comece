import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screensName } from "../../utils";
import { HomeScreen, ProdcutScreen, SearchScreen } from "../../screens/Home";

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screensName.home.home} component={HomeScreen} />
      <Stack.Screen name={screensName.home.product} component={ProdcutScreen} />
      <Stack.Screen name={screensName.home.search} component={SearchScreen} />
    </Stack.Navigator>
  );
}
