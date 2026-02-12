import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TimelineScreen() {
  return (
    <SafeAreaView className="flex-1 bg-pink-50">
      <ScrollView className="px-5">
        <Text className="text-3xl font-bold text-center mt-4 mb-8">
          Nuestra Historia 💘
        </Text>

        <View className="bg-white p-5 rounded-3xl shadow-sm mb-6">
          <Text className="font-bold text-lg mb-1">
            14 Febrero 2023
          </Text>
          <Text className="text-gray-600">
            El día que comenzó todo ✨
          </Text>
        </View>

        <View className="bg-white p-5 rounded-3xl shadow-sm mb-6">
          <Text className="font-bold text-lg mb-1">
            Primera cita
          </Text>
          <Text className="text-gray-600">
            Esa noche que no queríamos que terminara.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
