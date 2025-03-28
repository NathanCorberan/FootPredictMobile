import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Routes } from "./Routes";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import HomeStackNavigator from "./HomeStackNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any = "";

          if (route.name === Routes.HomeTab) {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === Routes.ProfileTab) {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === Routes.SettingTab) {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name={Routes.HomeTab} component={HomeStackNavigator} />
      <Tab.Screen name={Routes.ProfileTab} component={ProfileScreen} />
      <Tab.Screen name={Routes.SettingTab} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
