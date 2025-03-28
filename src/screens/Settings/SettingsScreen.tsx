import React from "react";
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../navigation/Routes";
const SettingsScreen = () => {

const user = {
  name  : "John Doe",
}
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SettingsScreen;
