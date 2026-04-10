import { useState } from "react";
import { FlatList, Text, View } from "react-native";

type User = {
	id: number;
	name: string;
	position: string;
};

export const DesafioListagem = () => {
	const [items, _] = useState<User[]>([
		{ id: 1, name: "João", position: "Gerente" },
		{ id: 2, name: "Maria", position: "Atendente" },
		{ id: 3, name: "Carlos", position: "Cozinheiro" },
		{ id: 4, name: "Ana", position: "Garçonete" },
		{ id: 5, name: "Pedro", position: "Segurança" },
	]);

	return (
		<View style={{ flex: 1 }}>
			<Text
				style={{
					marginTop: 50,
					textAlign: "center",
					fontSize: 25,
					fontWeight: "bold",
				}}
			>
				Seja bem-vindo!
			</Text>
			<FlatList
				style={{ marginTop: 20 }}
				data={items}
				renderItem={({ item }) => <UserContainer {...item} />}
			/>
		</View>
	);
};

const UserContainer = ({ name, position }: User) => {
	return (
		<View
			style={{
				backgroundColor: "#1b0b55",
				padding: 16,
				borderColor: "#000",
				borderBottomWidth: 2,
				borderTopWidth: 2,
			}}
		>
			<Text style={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}>
				Nome: {name}
			</Text>
			<Text style={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}>
				Cargo: {position}
			</Text>
		</View>
	);
};
