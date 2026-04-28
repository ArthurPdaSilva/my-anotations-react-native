import { Link } from "expo-router";
import { Text, View } from "react-native";

export  default function Search() {

  // const handlePress = () => {
    // router.push("/produto/123"); // Navegação simples
    // router.push("/produto/[id]", { id: 123 }); // Navegação com parâmetros
    // router.push({
    //   pathname: "/produto/[id]",
    //   params: { id: 123 }
    // }); // Navegação com objeto de configuração
  // }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search</Text>
      <Link href={{
        pathname: "/produto/[id]",
        params: { id: 123 }
      }} style={{ marginTop: 20, color: "blue" }}>
        Ir para Detalhes do Produto
      </Link>
    </View>
  )
}