import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Contatos do Usuário</Text>
      <Link href="/(tabs)/produtos" style={{ marginTop: 20, color: "blue" }}>
        Ir para Produtos
      </Link>
    </View>
  )
}