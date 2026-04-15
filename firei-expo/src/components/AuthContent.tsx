import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { auth } from "../connection";
import { Content } from "./Content";

export function AuthContent() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [authUser, setAuthUser] = useState("");

	useEffect(() => {
		// Ele fica vendo se tem usuário logado ou não, e atualiza o estado authUser de acordo
		const unsub = onAuthStateChanged(auth, (user) => {
			console.log("Auth state changed:", user);
			if (user) {
				console.log("Usuário autenticado:", user.email);
				setAuthUser(user.email || "");
			} else {
				console.log("Usuário desautenticado");
				setAuthUser("");
			}
		});

		return () => unsub();
	}, []);

	const handleRegister = async () => {
		const response = await createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				return `Usuário ${user.email} criado com sucesso!`;
			})
			.catch((error) => {
				return `Erro: ${error.message}`;
			});
		console.log(response);
	};

	const handleLogin = async () => {
		const response = await signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				return `Usuário ${user.email} logado com sucesso!`;
			})
			.catch((error) => {
				return `Erro: ${error.message}`;
			});

		console.log(response);
	};

	if (authUser !== "") {
		return <Content />;
	}

	return (
		<View style={styles.container}>
			<Text>
				{authUser !== ""
					? `Bem-vindo, ${authUser}!`
					: "Faça login ou registre-se para continuar."}
			</Text>

			<TextInput
				placeholder="Email"
				style={styles.input}
				value={email}
				onChangeText={setEmail}
			/>
			<TextInput
				placeholder="Password"
				secureTextEntry
				style={styles.input}
				value={password}
				onChangeText={setPassword}
			/>
			<TouchableOpacity style={styles.button} onPress={handleLogin}>
				<Text style={styles.buttonText}>Login</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.button} onPress={handleRegister}>
				<Text style={styles.buttonText}>Registrar</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
		marginBottom: 10,
		borderWidth: 1,
		padding: 5,
		width: "100%",
	},
	button: {
		backgroundColor: "blue",
		padding: 10,
		borderRadius: 5,
		width: "100%",
		marginBottom: 10,
	},
	buttonText: { color: "white", textAlign: "center" },
});
