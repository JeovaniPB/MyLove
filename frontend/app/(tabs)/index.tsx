import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { useEffect } from "react";

function TimeCounter() {
  const startDate = new Date("2024-03-01T00:00:00");

  const now = new Date();
  const diff = now.getTime() - startDate.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return (
    <View className="bg-white rounded-3xl p-6 mb-8 shadow-sm items-center">
      <Text className="text-gray-500 text-sm mb-2">
        Desde el 1 de Marzo 2024
      </Text>

      <View className="flex-row gap-6">
        <View className="items-center">
          <Text className="text-2xl font-bold text-rose-600">
            {days}
          </Text>
          <Text className="text-gray-400 text-xs">Días</Text>
        </View>

        <View className="items-center">
          <Text className="text-2xl font-bold text-rose-600">
            {hours}
          </Text>
          <Text className="text-gray-400 text-xs">Horas</Text>
        </View>

        <View className="items-center">
          <Text className="text-2xl font-bold text-rose-600">
            {minutes}
          </Text>
          <Text className="text-gray-400 text-xs">Min</Text>
        </View>
      </View>
    </View>
  );
}

function TimelineCard({ date, title, description }: any) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const onPressHeart = () => {
    scale.value = withSpring(1.4, {}, () => {
      scale.value = withSpring(1);
    });
  };

  return (
    <View className="bg-white rounded-3xl p-6 mb-6 shadow-sm">
      <Text className="text-xs text-gray-400 mb-2">{date}</Text>

      <Text className="text-lg font-bold text-gray-800 mb-2">
        {title}
      </Text>

      <Text className="text-gray-600 mb-4">
        {description}
      </Text>

      <Pressable onPress={onPressHeart}>
        <Animated.Text
          style={animatedStyle}
          className="text-2xl text-rose-500 self-end"
        >
          ♥
        </Animated.Text>
      </Pressable>
    </View>
  );
}

export default function TimelineScreen() {
  return (
    <SafeAreaView className="flex-1 bg-pink-50">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="px-5"
      >
        {/* Header */}
        <View className="mt-6 mb-8">
          <Text className="text-3xl font-bold text-center text-rose-600">
            Nuestra Historia
          </Text>
          <Text className="text-center text-gray-500 mt-2">
            Cada momento cuenta 💖
          </Text>
        </View>

        {/* Contador */}
        <TimeCounter />

        {/* Timeline */}
        <TimelineCard
          date="14 Febrero 2023"
          title="El día que comenzó todo"
          description="No sabíamos que ese momento cambiaría nuestras vidas para siempre ✨"
        />

        <TimelineCard
          date="Primera cita"
          title="Esa noche mágica"
          description="La noche que no queríamos que terminara."
        />

        <TimelineCard
          date="Primer viaje juntos"
          title="Nuestra aventura"
          description="Descubrimos que el mejor destino siempre es estar juntos."
        />
      </ScrollView>
    </SafeAreaView>
  );
}
