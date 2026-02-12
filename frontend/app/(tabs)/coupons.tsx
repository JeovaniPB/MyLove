import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function CouponsScreen() {
  const [used, setUsed] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-pink-50 px-5">
      <Text className="text-3xl font-bold text-center mt-4 mb-8">
        Love Coupons 🎟️
      </Text>

      <View className={`p-6 rounded-3xl ${used ? "bg-gray-300" : "bg-white"}`}>
        <Text className="text-lg font-bold mb-3">
          Vale por una cena preparada por mí 🍝
        </Text>

        <Pressable
          onPress={() => setUsed(true)}
          className="bg-pink-400 p-4 rounded-2xl"
        >
          <Text className="text-white text-center font-bold">
            Confirmar Canje
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
