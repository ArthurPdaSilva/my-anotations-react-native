import { Text, View } from "react-native";

export function People({ id, name, age, email }) {
	return (
		<View
			key={id}
			style={{
				backgroundColor: "#121212",
				height: 200,
				marginBottom: 15,
				justifyContent: "center",
			}}
		>
			<Text style={{ color: "#fff", fontSize: 20 }}>Nome: {name}</Text>
			<Text style={{ color: "#fff", fontSize: 20 }}>
				Idade: {age} {age === 1 ? "ano" : "anos"}
			</Text>
			<Text style={{ color: "#fff", fontSize: 20 }}>Email: {email}</Text>
		</View>
	);
}
