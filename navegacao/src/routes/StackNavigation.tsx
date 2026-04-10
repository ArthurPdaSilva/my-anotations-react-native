import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details, Home } from "../pages";

// A navegação é feita por pilhas, ou seja, cada tela é empilhada uma em cima da outra, e para voltar para a tela anterior, basta desempilhar a tela atual. O createNativeStackNavigator é um componente que cria uma pilha de navegação nativa, ou seja, ele utiliza os componentes nativos de navegação do sistema operacional, como o UINavigationController no iOS e o Fragment no Android.

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={Home}
				// options={{
				// 	title: "Tela Início",
				// 	headerStyle: {
				// 		backgroundColor: "#121212",
				// 	},
				// 	headerTintColor: "#fff",
				// 	// Ocultar o header: headerShown: false
				// }}
			/>
			<Stack.Screen
				name="Details"
				component={Details}
				options={{
					title: "Tela Detalhes",
				}}
			/>
		</Stack.Navigator>
	);
};
