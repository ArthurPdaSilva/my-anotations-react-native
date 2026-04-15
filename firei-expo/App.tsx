import {
	ButtonText,
	Container,
	CustomButton,
	DynamicName,
	Title,
} from "./src/styles";

export function App() {
	return (
		<Container>
			<Title>Firebase + Expo</Title>
			<DynamicName color="green" size={25}>
				Olá, mundo!
			</DynamicName>

			<CustomButton onPress={() => alert("Clicou")}>
				<ButtonText>Pressione-me</ButtonText>
			</CustomButton>
		</Container>
	);
}
