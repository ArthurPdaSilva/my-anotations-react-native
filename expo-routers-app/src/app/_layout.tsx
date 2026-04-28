import { Stack } from "expo-router";

type ProdutoParams = {
  id: string;
}

// Ele que defina a estrutura de navegação do app, ou seja, quais telas existem e como elas se relacionam
export default function RootLayout() {
  return (
    <Stack>
      {/* Acessando o grupo de rotas */}
      <Stack.Screen name="(tabs)" options={{ title: "Home", headerShown: false }} />
      <Stack.Screen name="profile" options={{ title: "Perfil",
        headerStyle: { backgroundColor: "#121212", },
        headerTintColor: "#fff"
       }} />
      <Stack.Screen name="contacts" options={{ title: "Contatos",
        headerStyle: { backgroundColor: "#121212", },
        headerTintColor: "#fff"
       }} />
         <Stack.Screen name="produto/[id]" options={({route}) => ({
          title: `Produto ${(route.params as ProdutoParams).id}`,
          headerStyle: { backgroundColor: "#121212", },
          headerTintColor: "#fff"
         })} />
    </Stack>
  )
}
