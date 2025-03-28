import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Routes } from "./Routes";
import HomeScreen from "../screens/Home/HomeScreen";
import AnotherScreen from "../screens/Home/AnotherScreen";

export type HomeStackParamList = {
  [Routes.Home]: undefined;
  [Routes.AnotherScreen]: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Home}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.AnotherScreen}
        component={AnotherScreen}
        options={{ title: "Another Screen" }}
      />
      {/* Add more screens here as needed */}
      {/* <Stack.Screen
        name={Routes.AnotherScreen}
        component={AnotherScreen}
        options={{ headerShown: false }}
      /> */}  
    </Stack.Navigator>
    
  );
}
