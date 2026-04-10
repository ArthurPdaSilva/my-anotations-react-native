import { Button, Text, View } from "react-native";
import { useGetNavigation } from "../hooks/useGetNavigation";

export const Details = () => {
	const { navigation } = useGetNavigation();

	const handleHome = () => {
		navigation.goBack();
	};

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Página Detalhes</Text>
			<Button title="Voltar Home" onPress={handleHome} />
		</View>
	);
};
