import { StyleSheet, View } from "react-native";
import { Content } from "./src/components/Content";

export function App() {
	return (
		<View style={styles.container}>
			<Content />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
