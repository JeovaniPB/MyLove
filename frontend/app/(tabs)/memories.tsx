import React, { useState } from "react";
import { 
  View, Text, ScrollView, Image, Dimensions, 
  ActivityIndicator, TouchableOpacity, Modal 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { X, Heart, Play, Sparkles } from "lucide-react-native";
import { Video, ResizeMode } from 'expo-av';
import { useQuery } from '@tanstack/react-query';
const APIURL = process.env.EXPO_PUBLIC_API_URL;

const { width } = Dimensions.get("window");
const CARD_W = width * 0.82; 
const API_URL = `${APIURL}/memories`;

export default function MemoriesScreen() {
  const [selected, setSelected] = useState<any>(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  const { data: memories = [], isLoading, isFetching } = useQuery({
    queryKey: ['memories'],
    queryFn: async () => {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Error al obtener recuerdos");
      const data = await res.json();

      return data
        .map((item: any) => {
          // Buscamos si hay algún video para ponerlo de portada
          const videoIdx = item.media.findIndex((m: any) => m.type === 'video');
          if (videoIdx > 0) {
            const updatedMedia = [...item.media];
            const [video] = updatedMedia.splice(videoIdx, 1);
            updatedMedia.unshift(video);
            return { ...item, media: updatedMedia };
          }
          return item;
        })
        .sort((a: any, b: any) => {
          // Orden por fecha: más reciente primero
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
    },
    refetchInterval: 10000,
  });

  if (isLoading && memories.length === 0) return (
    <View className="flex-1 bg-[#FDF8F3] justify-center items-center">
      <ActivityIndicator size="small" color="#D4A373" />
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#FDF8F3]">
      {/* Header */}
      <View className="mt-5 px-8 mb-5 flex-row justify-between items-start">
        <View>
          <View className="flex-row items-center">
            <Text className="text-4xl font-serif text-[#3C2F2F]">Recuerdos</Text>
            <Sparkles size={20} color="#D4A373" style={{marginLeft: 10}} />
          </View>
          <Text className="text-[#A69080] font-light tracking-[1px] mt-1">Nuestra historia en imágenes</Text>
        </View>
        {isFetching && <ActivityIndicator size="small" color="#D4A373" style={{ opacity: 0.5 }} />}
      </View>

      {/* Carrusel Principal */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_W + 24}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: 30 }}
      >
        {memories.map((item: any) => (
          <TouchableOpacity 
            key={item.id} 
            activeOpacity={0.9}
            onPress={() => { setSelected(item); setCurrentIdx(0); }}
            style={{ width: CARD_W }}
            className="mr-6 mb-10"
          >
            <View className="rounded-[45px] bg-white shadow-2xl shadow-stone-300 overflow-hidden border border-[#F0E6DD]">
              {item.media[0].type === "video" ? (
                <View className="h-[460px] w-full bg-stone-200">
                  <Video 
                    source={{ uri: item.media[0].url }} 
                    style={{ width: '100%', height: '100%' }}
                    resizeMode={ResizeMode.COVER}
                    shouldPlay={false} 
                    isMuted={true}
                  />
                  <View className="absolute top-6 right-6 bg-white/20 p-3 rounded-full backdrop-blur-md">
                    <Play size={18} color="white" fill="white" />
                  </View>
                </View>
              ) : (
                <Image source={{ uri: item.media[0].url }} className="h-[460px] w-full" />
              )}

              <View className="p-8">
                <Text className="text-[#D4A373] text-[10px] font-bold tracking-[3px] uppercase mb-1">{item.date}</Text>
                <Text className="text-2xl font-serif text-[#3C2F2F] leading-7">{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* MODAL CON LA INFORMACIÓN RESTAURADA */}
      <Modal visible={!!selected} animationType="slide" transparent>
        <View className="flex-1 bg-[#FDF8F3]"> 
          <SafeAreaView className="flex-1">
            <View className="flex-row justify-between items-center px-8 py-4">
              <Text className="text-[#A69080] font-serif italic">Detalle del recuerdo</Text>
              <TouchableOpacity onPress={() => setSelected(null)} className="bg-[#EFDECC] p-2 rounded-full">
                <X size={20} color="#3C2F2F" />
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="px-6">
                <ScrollView 
                  horizontal pagingEnabled 
                  showsHorizontalScrollIndicator={false}
                  onScroll={(e) => setCurrentIdx(Math.round(e.nativeEvent.contentOffset.x / (width - 48)))}
                >
                  {selected?.media.map((m: any, i: number) => (
                    <View key={i} style={{ width: width - 48 }} className="h-[400px] rounded-[40px] overflow-hidden bg-stone-200">
                      {m.type === 'video' ? (
                        <Video 
                          source={{ uri: m.url }} 
                          style={{ width: '100%', height: '100%' }}
                          resizeMode={ResizeMode.COVER} 
                          shouldPlay isLooping useNativeControls 
                        />
                      ) : (
                        <Image source={{ uri: m.url }} className="w-full h-full" resizeMode="cover" />
                      )}
                    </View>
                  ))}
                </ScrollView>

                {selected?.media.length > 1 && (
                  <View className="flex-row justify-center mt-4">
                    {selected.media.map((_: any, i: number) => (
                      <View key={i} className={`h-1 mx-1 rounded-full ${currentIdx === i ? 'w-4 bg-[#D4A373]' : 'w-1 bg-[#D4A373]/30'}`} />
                    ))}
                  </View>
                )}
              </View>

              <View className="p-5 items-center">
                <Heart size={24} color="#D4A373" fill="#D4A373" className="mb-2 opacity-90" />
                <Text className="text-[#3C2F2F] text-3xl font-serif text-center mb-6">
                  {selected?.title}
                </Text>
                <View className="w-10 h-[1px] bg-[#D4A373] mb-6" />
                <Text className="text-[#4A3737] text-center leading-8 text-lg italic px-2">
                  {selected?.description}
                </Text>
                <Text className="mt-10 text-[#A69080] font-bold tracking-widest uppercase text-[10px]">
                  — {selected?.date} —
                </Text>
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </Modal>
    </SafeAreaView>
  );
}