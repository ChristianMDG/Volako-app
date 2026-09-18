import React from "react";
import { View, Text } from "react-native";
const balance = 350000;
export default function DashboardScreen() {
  return (
      <View className="bg-emerald-400 flex items-center m-3 p-6 gap-5">
        <Text className="">Volako</Text>
        <Text>Mon Budget</Text>
        <Text>Solde disponible </Text>
        <Text>{balance}</Text>
      </View>
  );
}
