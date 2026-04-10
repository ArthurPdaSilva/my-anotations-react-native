import { Button, Text, View } from "react-native";
import { useGetNavigation } from "../hooks/useGetNavigation";

export const Contact = () => {
	const { navigation } = useGetNavigation();

	const handleHome = () => {
		// To zerando a pilha de navegação quando for stack navigation:
		// navigation.dispatch(StackActions.popToTop());
		navigation.goBack();
	};

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Página Contato</Text>
			<Button title="Voltar Home" onPress={handleHome} />
		</View>
	);
};
