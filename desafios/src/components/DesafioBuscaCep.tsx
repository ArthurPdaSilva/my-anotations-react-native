import axios from "axios";
import { useRef, useState } from "react";
import {
	Keyboard,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const api = axios.create({
	baseURL: "https://viacep.com.br/ws",
});

type AddressData = {
	cep: string;
	logradouro: string;
	bairro: string;
	localidade: string;
	uf: string;
};

export const DesafioBuscaCep = () => {
	const [cep, setCep] = useState("");
	const inputRef = useRef<TextInput>(null);
	const [addressData, setAddressData] = useState<AddressData | null>(null);

	const handleCepSearch = async () => {
		if (cep.length !== 8) {
			alert("Por favor, insira um CEP válido com 8 dígitos.");
			setCep("");
			inputRef.current?.focus();
			return;
		}

		try {
			const response = await api.get(`/${cep}/json/`);
			const data = response.data;

			if (data.erro) {
				alert("CEP não encontrado. Verifique o número e tente novamente.");
				setCep("");
				inputRef.current?.focus();
				return;
			}
			setAddressData({
				cep: data.cep || "Não encontrado",
				logradouro: data.logradouro || "Não encontrado",
				bairro: data.bairro || "Não encontrado",
				localidade: data.localidade || "Não encontrado",
				uf: data.uf || "Não encontrado",
			});
		} catch (error) {
			console.error("Erro ao buscar CEP:", error);
			alert("Erro ao buscar CEP. Verifique o número e tente novamente.");
			setCep("");
			inputRef.current?.focus();
		} finally {
			Keyboard.dismiss();
		}
	};

	const handleClear = () => {
		setCep("");
		inputRef.current?.focus();
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.title}>Digite o cep desejado</Text>
				<TextInput
					placeholder="00000000"
					value={cep}
					ref={inputRef}
					onChangeText={setCep}
					keyboardType="numeric"
					style={styles.input}
				/>
			</View>
			<View style={styles.buttonsContainer}>
				<TouchableOpacity onPress={handleCepSearch} style={styles.searchButton}>
					<Text style={styles.buttonText}>Buscar</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleClear} style={styles.clearButton}>
					<Text style={styles.buttonText}>Limpar</Text>
				</TouchableOpacity>
			</View>

			{addressData && (
				<View style={styles.resultContainer}>
					<Text style={styles.resultText}>CEP: {addressData.cep}</Text>
					<Text style={styles.resultText}>
						Logradouro: {addressData.logradouro}
					</Text>
					<Text style={styles.resultText}>Bairro: {addressData.bairro}</Text>
					<Text style={styles.resultText}>
						Cidade: {addressData.localidade}
					</Text>
					<Text style={styles.resultText}>Estado: {addressData.uf}</Text>
				</View>
			)}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerContainer: {
		alignItems: "center",
	},
	title: {
		marginTop: 25,
		marginBottom: 15,
		fontSize: 25,
		fontWeight: "bold",
	},
	input: {
		backgroundColor: "white",
		borderWidth: 1,
		borderRadius: 5,
		borderColor: "gray",
		width: "90%",
		padding: 10,
		fontSize: 18,
	},
	buttonsContainer: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-around",
	},
	searchButton: {
		backgroundColor: "#0000ff",
		padding: 15,
		width: "40%",
		borderRadius: 5,
		marginTop: 20,
		alignItems: "center",
	},
	clearButton: {
		backgroundColor: "#ff0000",
		padding: 15,
		width: "40%",
		borderRadius: 5,
		marginTop: 20,
		alignItems: "center",
	},
	buttonText: {
		fontSize: 22,
		fontWeight: "bold",
		color: "white",
	},
	resultContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	resultText: {
		fontSize: 22,
	},
});
