import { Image, Text, View } from "react-native";
import { styles } from "../styles";

export function Logo({ width = 200, height = 200, name = "Logo", age = 18 }) {
	return (
		<View style={{ marginBottom: 20 }}>
			{/* Text é um componente para exibir texto na tela */}
			<Text style={styles.text}>{name}</Text>
			{/* Unindo grupos de estilos */}
			<Text style={[styles.text, styles.subText]}>Com apenas {age} anos!</Text>
			{/* Image é um componente para exibir imagens, ele tem uma propriedade source que recebe a imagem */}
			<Image
				source={require("../assets/image.png")}
				style={{ width, height }}
			/>
		</View>
	);
}
