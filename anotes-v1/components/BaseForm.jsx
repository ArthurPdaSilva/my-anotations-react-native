import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export function BaseForm() {
	const [nome, setNome] = useState("");
	const [input, setInput] = useState("");

	const handleChangeText = (text) => {
		if (text.lenght <= 0) {
			setNome("");
			return;
		}

		setNome(text);
	};

	const handleEnter = () => {
		if (input.length <= 0) {
			alert("Digite algo no segundo campo!");
			return;
		}

		// Mesmo alert do javascript
		alert(`Olá, ${nome}! Você digitou: ${input}`);
	};

	return (
		<View style={baseFormStyles.container}>
			<TextInput
				style={baseFormStyles.input}
				placeholder="Digite seu nome..."
				value={nome}
				// onChangeText é a propriedade do TextInput que recebe a função a ser executada quando o texto é alterado, nesse caso estamos passando a função setNome para atualizar o estado nome com o valor digitado pelo usuário
				// onChangeText={setNome}
				onChangeText={(text) => handleChangeText(text)}
			/>

			<TextInput
				style={baseFormStyles.input}
				placeholder="Digite algo..."
				value={input}
				onChangeText={setInput}
			/>

			{/* OnPress faz o mesmo q onClick tbm  */}
			<Button title="Entrar" onPress={handleEnter} />

			<Text style={baseFormStyles.text}>{nome}</Text>
		</View>
	);
}

const baseFormStyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		marginTop: 10,
	},
	input: {
		height: 45,
		borderWidth: 1,
		margin: 10,
		padding: 10,
		fontSize: 20,
	},
	text: {
		textAlign: "center",
		fontSize: 25,
	},
});
