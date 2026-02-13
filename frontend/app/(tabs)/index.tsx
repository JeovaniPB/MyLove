import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Heart, Sparkles, Stars } from "lucide-react-native";
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withRepeat, 
  withTiming, 
  withSequence,
  FadeIn,
  FadeInDown,
  Layout
} from "react-native-reanimated";

// --- Corazón Latiente con Brillos ---
function AnimatedHeart() {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(0.5);

  useEffect(() => {
    scale.value = withRepeat(
      withSequence(withTiming(1.15, { duration: 450 }), withTiming(1, { duration: 450 })),
      -1,
      true
    );
    opacity.value = withRepeat(withTiming(1, { duration: 900 }), -1, true);
  }, []);

  const heartStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View className="items-center justify-center my-8">
      {/* Círculo de fondo suave */}
      <View className="absolute bg-[#EFDECC] w-24 h-24 rounded-full opacity-40" />
      
      <Animated.View style={heartStyle}>
        <Heart size={60} color="#D4A373" fill="#D4A373" />
      </Animated.View>
    </View>
  );
}

export default function LoveApp() {
  const startDate = new Date("2024-03-01"); 
  const now = new Date();
  const diffDays = Math.ceil(Math.abs(now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <SafeAreaView className="flex-1 bg-[#FDF8F3]">
      <ScrollView showsVerticalScrollIndicator={false} className="px-6">
        
        {/* Header - Recuperando Jeovani & Xcaret */}
        <Animated.View entering={FadeInDown.duration(800)} className="items-center mt-6">
          <AnimatedHeart />
          <Text className="text-4xl font-serif text-[#3C2F2F] text-center">Jeovani & Xcaret</Text>
          <Text className="text-[#A69080] italic mt-2 text-center tracking-widest">NUESTRA HISTORIA</Text>
        </Animated.View>

        {/* Contador - Estilo Original Mejorado */}
        <Animated.View 
          entering={FadeInDown.delay(300).duration(800)}
          className="bg-white rounded-[32px] p-8 my-8 shadow-sm border border-[#F0E6DD] items-center"
        >
          <Text className="text-[#A69080] text-xs font-bold uppercase tracking-[2px] mb-2">Llevamos juntos</Text>
          <View className="flex-row items-baseline">
            <Text className="text-7xl font-light text-[#D4A373]">{diffDays}</Text>
            <Text className="text-xl text-[#A69080] font-serif ml-2">días</Text>
          </View>
          <View className="h-[1px] w-full bg-[#F0E6DD] my-4" />
          <Text className="text-[#A69080] text-sm italic text-center">
            Cada amanecer es más bonito desde que estás conmigo.
          </Text>
        </Animated.View>

        {/* Nueva Sección: Gran Dedicatoria */}
        <Animated.View 
          entering={FadeInDown.delay(600).duration(800)}
          layout={Layout.springify()}
          className="bg-[#F8F1EA] rounded-[32px] p-10 mb-12 border border-[#F0E6DD] relative"
        >
          {/* Adorno de esquina */}
          <View className="absolute top-4 left-4 opacity-20">
            <Stars size={30} color="#D4A373" />
          </View>

          <Text className="text-[#3C2F2F] text-center text-lg leading-7 italic font-serif">
            Para mi hermosa Xcaret:{"\n\n"}
            No solo cuento los días, sino cada momento en el que tu sonrisa me ha salvado. 
            Gracias por elegirme para caminar a tu lado, por tu paciencia y por este amor 
            tan puro que me das. Eres y serás siempre mi lugar favorito en el mundo.
          </Text>

          <View className="items-center mt-8">
            <View className="w-10 h-[1px] bg-[#D4A373] mb-4" />
            <Text className="text-[#D4A373] font-bold text-xl tracking-tighter">Con todo mi amor,</Text>
            <Text className="text-[#3C2F2F] font-bold text-2xl mt-1">Jeovani</Text>
          </View>

          {/* Adorno inferior */}
          <View className="flex-row justify-center mt-6">
            <Heart size={12} color="#D4A373" fill="#D4A373" className="mx-1" />
            <Heart size={12} color="#D4A373" fill="#D4A373" className="mx-1" />
            <Heart size={12} color="#D4A373" fill="#D4A373" className="mx-1" />
          </View>
        </Animated.View>

      </ScrollView>
    </SafeAreaView>
  );
}