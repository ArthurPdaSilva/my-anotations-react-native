import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

// Ele que defina a estrutura de navegação do app, ou seja, quais telas existem e como elas se relacionam
export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Página Principal",
        tabBarIcon: (props) => <Feather name="home" {...props} />
       }} />
      <Tabs.Screen name="produtos" options={{ title: "Produtos",
        headerStyle: { backgroundColor: "#121212", },
        headerTintColor: "#fff",
        tabBarIcon: (props) => <Feather name="box" {...props} />
       }} />
      <Tabs.Screen name="search/index" options={{ title: "Search",
        headerStyle: { backgroundColor: "#121212", },
        headerTintColor: "#fff",
        tabBarIcon: (props) => <Feather name="search" {...props} />
       }} />
    </Tabs>
  )
}
