import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Routes } from "./Routes"
import LoginScreen from "../screens/Auth/LoginScreen"
import TabNavigator from "./TabNavigator"

const Stack = createNativeStackNavigator()

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={Routes.Login}>
      <Stack.Screen name={Routes.Login} component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name={Routes.MainApp} component={TabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

