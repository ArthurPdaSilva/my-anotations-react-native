import { Text, View } from "react-native";

export function Container() {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ height: 65, backgroundColor: "black" }}>
				<Text style={{ color: "white", textAlign: "center" }}>Header</Text>
			</View>
			<View style={{ flex: 1, backgroundColor: "white" }}>
				<Text style={{ textAlign: "center", marginTop: 20 }}>Conteúdo</Text>
			</View>
			<View style={{ height: 65, backgroundColor: "black" }}>
				<Text style={{ color: "white", textAlign: "center" }}>Footer</Text>
			</View>
		</View>
	);
}
