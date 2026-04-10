import { Button, StyleSheet, Text, View } from "react-native";
import { useGetNavigation } from "../hooks/useGetNavigation";

export const Home = () => {
	const { navigation } = useGetNavigation();

	return (
		<View style={styles.container}>
			<Text>Página Home</Text>
			<Button
				title="Ir para Detalhes"
				onPress={() =>
					// Passando parâmetros para a tela Sobre, que podem ser acessados através do useRoute na tela Sobre
					// navigation.navigate("About", {
					// 	name: "Arthur",
					// 	email: "arthur@example.com",
					// })
					navigation.navigate("Details")
				}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#121212",
	},
});
