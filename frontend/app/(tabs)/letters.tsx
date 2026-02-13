import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Pressable, Modal, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Mail, Heart, X } from "lucide-react-native";

const API_URL = "http://192.168.0.7:8000/letters"; 

export default function LettersScreen() {
  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLetter, setSelectedLetter] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setLetters(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando cartas:", err);
        setLoading(false);
      });
  }, []);

  const openLetter = (letter: any) => {
    setSelectedLetter(letter);
    setModalVisible(true);
  };

  if (loading) {
    return (
      <View className="flex-1 bg-[#FDF8F3] justify-center items-center">
        <ActivityIndicator size="large" color="#D4A373" />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#FDF8F3]">
      <ScrollView showsVerticalScrollIndicator={false} className="px-6">
        <View className="mt-8 mb-8">
          <Text className="text-3xl font-serif text-[#3C2F2F]">Para ti</Text>
          <Text className="text-[#A69080]">Pequeños pedazos de mi corazón</Text>
        </View>

        {letters.map((letter: any) => (
          <Pressable 
            key={letter.id} 
            onPress={() => openLetter(letter)}
            className="mb-4 flex-row items-center p-5 rounded-[24px] border border-[#F0E6DD] bg-white shadow-sm active:opacity-70"
          >
            <View className="bg-[#FDF8F3] p-4 rounded-2xl mr-4 border border-[#F0E6DD]">
              <Mail size={24} color="#D4A373" />
            </View>
            <View className="flex-1">
              <Text className="text-[#A69080] text-[10px] font-bold uppercase tracking-wider">
                {letter.title}
              </Text>
              <Text className="text-[#3C2F2F] font-bold text-lg">
                {letter.subtitle}
              </Text>
            </View>
            <Heart size={16} color="#D4A373" fill="#D4A373" opacity={0.3} />
          </Pressable>
        ))}

        <View className="mt-4 mb-12 p-3 bg-[#D4A373] rounded-[32px] items-center border border-[#F0E6DD]">
          <Text className="text-white font-serif text-lg text-center">
            En cada línea, un te amo.
          </Text>
        </View>
      </ScrollView>

      {/* MODAL PARA LEER LA CARTA */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50 px-6">
          <View className="bg-[#FDF8F3] w-full p-8 rounded-[40px] shadow-xl border border-[#D4A373]">
            <View className="flex-row justify-between items-center mb-6">
              <Heart size={24} color="#D4A373" fill="#D4A373" />
              <Pressable onPress={() => setModalVisible(false)}>
                <X size={24} color="#3C2F2F" />
              </Pressable>
            </View>
            
            <Text className="text-[#A69080] text-xs font-bold uppercase mb-1">
              {selectedLetter?.title}
            </Text>
            <Text className="text-2xl font-serif text-[#3C2F2F] mb-6">
              {selectedLetter?.subtitle}
            </Text>
            
            <ScrollView showsVerticalScrollIndicator={false} className="max-h-80">
              <Text className="text-[#3C2F2F] text-lg leading-7 italic text-center">
                {selectedLetter?.content}
              </Text>
            </ScrollView>

            <View className="mt-8 items-center">
              <Text className="text-[#D4A373] font-bold">Con amor, Jeovani</Text>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}