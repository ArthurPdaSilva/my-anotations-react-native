import { Button, StyleSheet, Text, View } from "react-native";
import { useGetNavigation } from "../hooks/useGetNavigation";

export const About = () => {
	const { navigation } = useGetNavigation();
	// const { params } = useRoute();
	// const { name, email } = params as { name?: string; email?: string };

	// A gente usa ele aqui para mudar o título da tela dinamicamente, dependendo do nome que a gente recebe como parâmetro, se tiver um nome, ele vai mostrar "Tela Sobre - Nome", se não tiver um nome, ele vai mostrar "Tela Sobre"
	// Ele é síncrono, ou seja, ele é executado antes da renderização da tela, então ele é ideal para mudar o título da tela, porque ele vai mudar o título antes da tela ser renderizada, assim a gente evita que o título seja atualizado depois que a tela já foi renderizada, o que pode causar um efeito visual estranho para o usuário.
	// useLayoutEffect(() => {
	// 	navigation.setOptions({
	// 		title: name ? `Tela Sobre - ${name}` : "Tela Sobre",
	// 	});
	// }, [navigation, name]);

	return (
		<View style={styles.container}>
			<Text>Página Sobre</Text>
			<Button
				title="Ir para Contato"
				onPress={() => navigation.navigate("Contact")}
			/>
			<Button title="Voltar Tela" onPress={() => navigation.goBack()} />
			{/* <Text>Parâmetros recebidos:</Text>
			<Text>Nome: {name}</Text>
			<Text>Email: {email}</Text> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
	},
});
