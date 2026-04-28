import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

// Igual o Next, precisa ser export default
export default function Index() {

  const handlePress = () => {
    router.push("/profile"); 
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Página Principal</Text>
      <Pressable onPress={handlePress} style={{ marginTop: 20, padding: 10, backgroundColor: "blue" }}>
        <Text style={{ color: "white" }}>Ir para o perfil</Text>
      </Pressable>
      <Link href="/contacts" style={{ marginTop: 20, color: "blue" }}>
        Ir para Contatos
      </Link>
    </View>
  );
}
