import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import HomeScreen from "../screens/Home/HomeScreen";
import { Routes } from "./Routes";

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Home}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      
      
    </Stack.Navigator>
  );
}