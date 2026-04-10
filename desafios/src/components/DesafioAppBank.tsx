import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import {
	Button,
	StyleSheet,
	Switch,
	Text,
	TextInput,
	View,
} from "react-native";

// Requisitos:
// Banco Sujeito
// Nome (TextInput)
// Idade (TextInput)
// Sexo (Picker)
// Seu limite (Slider)
// Estudante (Switch)
// Botão Abrir Conta (Button)

type UserData = {
	name: string;
	age: number;
	gender: string;
	limit: number;
	isStudent: boolean;
};

type Gender = "Masculino" | "Feminino" | "Outro";

const genderOptions: { label: string; value: Gender }[] = [
	{ label: "Masculino", value: "Masculino" },
	{ label: "Feminino", value: "Feminino" },
	{ label: "Outro", value: "Outro" },
];

export const DesafioAppBank = () => {
	const [userData, setUserData] = useState<UserData>({
		name: "",
		age: 0,
		gender: "Masculino",
		limit: 0,
		isStudent: false,
	});

	const handleCreate = () => {
		alert(
			`Conta criada com sucesso!\n\nNome: ${userData.name}\nIdade: ${userData.age}\nSexo: ${userData.gender}\nLimite: ${userData.limit.toLocaleString(
				"pt-BR",
				{
					style: "currency",
					currency: "BRL",
				},
			)}\nEstudante: ${userData.isStudent ? "Sim" : "Não"}`,
		);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Banco Sujeito</Text>
			<Text style={styles.label}>Nome:</Text>
			<TextInput
				style={styles.input}
				value={userData.name}
				onChangeText={(text) => setUserData({ ...userData, name: text })}
			/>

			<Text style={styles.label}>Idade:</Text>
			<TextInput
				style={styles.input}
				value={userData.age.toString()}
				onChangeText={(text) =>
					setUserData({ ...userData, age: Number.parseInt(text, 10) || 0 })
				}
				keyboardType="numeric"
			/>
			<Text style={styles.label}>Sexo:</Text>
			<Picker
				style={styles.input}
				selectedValue={userData.gender}
				onValueChange={(value) => setUserData({ ...userData, gender: value })}
			>
				{genderOptions.map((option) => (
					<Picker.Item
						key={option.value}
						label={option.label}
						value={option.value}
					/>
				))}
			</Picker>

			<Text style={styles.label}>
				Defina seu limite:{" "}
				{userData.limit.toLocaleString("pt-BR", {
					style: "currency",
					currency: "BRL",
				})}
			</Text>
			<Slider
				value={userData.limit}
				onValueChange={(value) => setUserData({ ...userData, limit: value })}
				minimumValue={0}
				maximumValue={10000}
				step={100}
			/>

			<View style={styles.switchContainer}>
				<Text style={styles.label}>Você é estudante?</Text>
				<Switch
					value={userData.isStudent}
					onValueChange={(value) =>
						setUserData({ ...userData, isStudent: value })
					}
				/>
			</View>

			<Button title="Abrir Conta" onPress={handleCreate} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		marginTop: 30,
		gap: 15,
	},
	title: {
		fontSize: 24,
		textAlign: "center",
		fontWeight: "bold",
		marginBottom: 20,
	},
	label: {
		fontSize: 20,
	},
	input: {
		borderBottomColor: "#000",
		borderBottomWidth: 1,
		fontSize: 18,
		height: 50,
		padding: 5,
	},
	switchContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
});
