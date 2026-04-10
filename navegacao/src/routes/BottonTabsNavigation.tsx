import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { About, Contact } from "../pages";
import { StackNavigation } from "./StackNavigation";

const Tab = createBottomTabNavigator();

export const BottomTabsNavigation = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				// Ocultando o header de todosas as telas: headerShown: false
				// Com isso, quando o teclado for aberto, a barra de navegação vai ser ocultada, para não atrapalhar a visualização do conteúdo do app, principalmente em iPhones, onde o teclado ocupa uma parte significativa da tela.
				tabBarHideOnKeyboard: true,
				headerShown: false,
				// Ocultando as labels das abas: tabBarShowLabel: false

				// Mudando as cores das abas ativas e inativas
				tabBarActiveTintColor: "#121212",
				tabBarInactiveTintColor: "#888",

				tabBarStyle: {
					backgroundColor: "#fff",
					borderTopWidth: 0,
				},
			}}
		>
			{/* <Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabel: "Início",
					tabBarIcon: ({ color, size }) => {
						return <Feather name="home" size={size} color={color} />;
					},
					// Ocultando o header: headerShown: false
				}}
			/> */}
			{/* Agora eu criei Home e Details para serem apenas stack */}
			<Tab.Screen
				name="HomeStack"
				component={StackNavigation}
				options={{
					tabBarLabel: "Início",
					tabBarIcon: ({ color, size }) => {
						return <Feather name="home" size={size} color={color} />;
					},
				}}
			/>

			<Tab.Screen
				name="About"
				component={About}
				options={{
					tabBarLabel: "Sobre",
					tabBarIcon: ({ color, size }) => {
						return <Feather name="info" size={size} color={color} />;
					},
				}}
			/>
			<Tab.Screen
				name="Contact"
				component={Contact}
				options={{
					tabBarLabel: "Contato",
					tabBarIcon: ({ color, size }) => {
						return <Feather name="phone" size={size} color={color} />;
					},
				}}
			/>
		</Tab.Navigator>
	);
};
