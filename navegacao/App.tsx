import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigation } from "./src/routes/DrawerNavigation";
// Com ele eu consigo garantir que a barra de cima não vai atrapalhar o conteúdo do meu app, principalmente em iPhones // <SafeAreaView style={{ flex: 1 }}>

export default function App() {
	return (
		<NavigationContainer>
			{/* <StackNavigation /> */}
			{/* <BottomTabsNavigation /> */}
			<DrawerNavigation />
		</NavigationContainer>
	);
}
