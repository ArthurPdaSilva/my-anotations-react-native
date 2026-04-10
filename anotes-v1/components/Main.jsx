import { useState } from "react";
import { Button, View } from "react-native";
import { styles } from "../styles";
import { Logo } from "./Logo";

export function Main() {
	const [name, setName] = useState("Nelsin é o brabo");
	const [age, setAge] = useState(18);

	return (
		// View é um container para outros componentes, ele é como uma div no HTML
		<View style={styles.container}>
			<Logo age={age} name={name} width={400} height={400} />
			{/* Button é um componente para exibir um botão, ele tem uma propriedade title que recebe o texto do botão e uma propriedade onPress que recebe a função a ser executada quando o botão é pressionado */}
			<Button
				title="Mudar nome"
				// OnPress seria o memo que o onClick
				onPress={() => {
					const newName =
						name === "Nelsin é o brabo"
							? "O Rei do Vidro!"
							: "Nelsin é o brabo";
					const newAge = age === 18 ? 19 : 18;
					setName(newName);
					setAge(newAge);
				}}
			/>
		</View>
	);
}
