import { ScrollView, View } from "react-native";

export const ScrollViewContainer = () => {
	return (
		<View style={{ flex: 1 }}>
			{/* Scroll view é um componente que permite a navegação por um conjunto de elementos, pique overflow auto */}
			{/* O problema dele é que ele carrega todos os elementos, mesmo que não estejam visíveis (alternativa para isso é o FlatList) */}
			<ScrollView
			// horizontal faz a rolagem ser horizontal, por padrão é vertical
			// horizontal={true}
			// Desativar a barra de rolagem horizontal
			// showsHorizontalScrollIndicator={false}
			// Desativar a barra de rolagem vertical
			// showsVerticalScrollIndicator={false}
			>
				{/* <View style={{ width: 150, height: 250, backgroundColor: "red" }} /> */}
				<View style={{ height: 250, backgroundColor: "red" }} />
				<View style={{ height: 250, backgroundColor: "green" }} />
				<View style={{ height: 250, backgroundColor: "yellow" }} />
				<View style={{ height: 250, backgroundColor: "blue" }} />
				<View style={{ height: 250, backgroundColor: "purple" }} />
			</ScrollView>
		</View>
	);
};
