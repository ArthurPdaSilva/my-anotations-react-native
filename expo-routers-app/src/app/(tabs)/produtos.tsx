import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Produtos() {
  // Tbm tem o useRouter, mas o router é mais simples e direto para navegação

  

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Produtos</Text>
      <Pressable onPress={() => router.back()} style={{ marginTop: 20, padding: 10, backgroundColor: "green" }}>
        <Text 
          style={{ color: "white" }}
        >Voltar para home</Text>
      </Pressable>
    </View>
  )
}