import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useMemo, useRef, useState } from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

export default function UseEffectContainer() {
	const [input, setInput] = useState("");
	const [nome, setNome] = useState("");
	const inputRef = useRef();

	useEffect(() => {
		async function loadData() {
			await AsyncStorage.getItem("@nome").then((value) => {
				setNome(value);
			});
		}

		loadData();
	}, []);

	const lengthNome = useMemo(() => {
		console.log("Calculando o tamanho do nome...");
		return nome.length;
	}, [nome]);

	const handleName = async () => {
		console.log("Gravando nome...");
		await AsyncStorage.setItem("@nome", input);
		setNome(input);
		setInput("");
	};

	const handleCallInput = () => {
		// To acessando a referência do input e chamando o método focus para focar o input
		inputRef.current.focus();

		// Limpar o campo:
		inputRef.current.clear();

		console.log(`Está com o focus? ${inputRef.current.isFocused()}`);
	};

	return (
		<View style={styles.container}>
			<View style={styles.viewInput}>
				<TextInput
					style={styles.input}
					value={input}
					onChangeText={(texto) => setInput(texto)}
					ref={inputRef}
				/>

				<TouchableOpacity onPress={handleName}>
					<Text style={styles.botao}>+</Text>
				</TouchableOpacity>
			</View>
			<Text style={styles.nome}>{nome}</Text>
			<Text style={styles.tamanho}>Tamanho do nome: {lengthNome}</Text>

			<TouchableOpacity onPress={handleCallInput}>
				<Text style={styles.botao}>Chamar Input</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		marginTop: 35,
	},
	viewInput: {
		flexDirection: "row",
		alignItems: "center",
	},
	input: {
		width: 350,
		height: 40,
		borderColor: "#000",
		borderWidth: 1,
		padding: 10,
	},
	botao: {
		backgroundColor: "#222",
		color: "#FFF",
		height: 40,
		padding: 10,
		marginLeft: 4,
	},
	nome: {
		marginTop: 15,
		fontSize: 30,
	},
	tamanho: {
		marginTop: 10,
		fontSize: 20,
	},
});
