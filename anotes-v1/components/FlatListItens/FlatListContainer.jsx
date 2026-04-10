import { useState } from "react";
import { FlatList, View } from "react-native";
import { People } from "./People";

export const FlatListContainer = () => {
	const [feed, _] = useState([
		{ id: 1, name: "Eduardo", age: 30, email: "edu@gmail.com" },
		{ id: 2, name: "Maria", age: 25, email: "maria@gmail.com" },
		{ id: 3, name: "João", age: 28, email: "joao@gmail.com" },
		{ id: 4, name: "Ana", age: 22, email: "ana@gmail.com" },
		{ id: 5, name: "Carlos", age: 35, email: "carlos@gmail.com" },
		{ id: 6, name: "Fernanda", age: 27, email: "fernanda@gmail.com" },
		{ id: 7, name: "Ricardo", age: 1, email: "ricardinho@gmail.com" },
	]);

	return (
		<View style={{ flex: 1 }}>
			{/* Só renderiza o que aparece o que tá na tela */}
			<FlatList
				// Data é toda lista
				showsVerticalScrollIndicator={false}
				data={feed}
				// KeyExtractor é a propriedade do FlatList que recebe uma função para extrair a chave única de cada item da lista, nesse caso estamos usando o id como chave, e convertendo para string com toString() porque o id é um número e a chave precisa ser uma string
				// keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => <People {...item} />}
			/>
		</View>
	);
};
