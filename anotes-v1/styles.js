import { StyleSheet } from "react-native";

// StyleSheet é para fazer aquelas paradas de style module
export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		textAlign: "center",
		// Não trabalhamos como pixels, mas sim com unidades relativas, então o fontSize 20 é relativo ao tamanho da tela
		fontSize: 20,
	},
	subText: {
		marginBottom: 10,
		fontSize: 16,
		color: "gray",
	},
});
