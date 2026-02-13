import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#D4A373", // Cambié el rosa por el dorado de tus fotos
        tabBarInactiveTintColor: "#A69080",
        tabBarStyle: {
          backgroundColor: "#FDF8F3", // Fondo crema de las imágenes
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      {/* 1. HOME / HISTORIA */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "heart" : "heart-outline"} size={size} color={color} />
          ),
        }}
      />

      {/* 2. ÁLBUM / RECUERDOS */}
      <Tabs.Screen
        name="memories"
        options={{
          title: "Recuerdos",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "images" : "images-outline"} size={size} color={color} />
          ),
        }}
      />

      {/* 3. CARTAS / NOTAS */}
      <Tabs.Screen
        name="letters"
        options={{
          title: "Para ti",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "mail-open" : "mail-outline"} size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}