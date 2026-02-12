import { View, Text, Pressable, Modal, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

function CouponCard({ title }: { title: string }) {
  const [used, setUsed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const redeem = () => {
    if (used) return;

    scale.value = withSpring(0.96, {}, () => {
      scale.value = withSpring(1);
    });

    setUsed(true);
    setModalVisible(true);
  };

  return (
    <>
      <Animated.View
        style={animatedStyle}
        className={`flex-1 m-2 rounded-3xl p-5 ${
          used ? "bg-gray-200" : "bg-white"
        } shadow-sm`}
      >
        <Text className="text-base font-bold text-gray-800 mb-2">
          {title}
        </Text>

        <Text className="text-gray-500 text-xs mb-4">
          Canjéalo cuando quieras 💌
        </Text>

        <Pressable
          onPress={redeem}
          className={`p-3 rounded-2xl ${
            used ? "bg-gray-400" : "bg-rose-500"
          }`}
        >
          <Text className="text-white text-center font-bold text-sm">
            {used ? "En uso 💖" : "Confirmar"}
          </Text>
        </Pressable>
      </Animated.View>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View className="flex-1 justify-center items-center bg-black/40 px-8">
          <View className="bg-white p-8 rounded-3xl w-full items-center">
            <Text className="text-2xl mb-4">💌</Text>
            <Text className="text-lg font-bold text-center mb-2">
              ¡Petición enviada!
            </Text>
            <Pressable
              onPress={() => setModalVisible(false)}
              className="bg-rose-500 px-6 py-3 rounded-2xl mt-4"
            >
              <Text className="text-white font-bold">
                Cerrar
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default function CouponsScreen() {
  const coupons = [
    { id: "1", title: "Cena preparada por mí 🍝" },
    { id: "2", title: "Salida al cine 🎬" },
    { id: "3", title: "1 hora de masajes 💆‍♀️" },
    { id: "4", title: "Viaje sorpresa ✈️" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-pink-50 px-3">
      <View className="mt-6 mb-8">
        <Text className="text-3xl font-bold text-center text-rose-600">
          Love Coupons
        </Text>
        <Text className="text-center text-gray-500 mt-2">
          Elige tu próximo momento especial 🎟️
        </Text>
      </View>

      <FlatList
        data={coupons}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <CouponCard title={item.title} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
