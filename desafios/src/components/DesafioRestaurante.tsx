import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MAX_PEOPLE = 10;
const MIN_PEOPLE = 0;

export const DesafioRestaurante = () => {
	const [peopleCount, setPeopleCount] = useState<number>(MIN_PEOPLE);

	const action = (action: "add" | "remove") => {
		const breakConditions = [
			action === "remove" && peopleCount === MIN_PEOPLE,
			action === "add" && peopleCount === MAX_PEOPLE,
		];

		if (breakConditions.some(Boolean)) {
			return;
		}

		setPeopleCount((prevCount) =>
			action === "add" ? prevCount + 1 : prevCount - 1,
		);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Pessoas no restaurante:</Text>
			<Text style={styles.count}>{peopleCount}</Text>
			{peopleCount === MAX_PEOPLE && (
				<Text style={styles.message}>
					Restaurante está no seu limite de pessoas!
				</Text>
			)}
			<View style={styles.buttonsContainer}>
				<TouchableOpacity
					disabled={peopleCount === MAX_PEOPLE}
					style={[
						styles.button,
						styles.addButton,
						peopleCount === MAX_PEOPLE && styles.disabledButton,
					]}
					onPress={() => action("add")}
				>
					<Text style={styles.buttonText}>Adicionar</Text>
				</TouchableOpacity>
				<TouchableOpacity
					disabled={peopleCount === MIN_PEOPLE}
					style={[
						styles.button,
						styles.removeButton,
						peopleCount === MIN_PEOPLE && styles.disabledButton,
					]}
					onPress={() => action("remove")}
				>
					<Text style={styles.buttonText}>Remover</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	label: {
		fontSize: 25,
		marginBottom: 10,
	},
	count: {
		backgroundColor: "#000",
		color: "#fff",
		fontSize: 50,
		fontWeight: "bold",
		padding: 10,
		width: 80,
		height: 80,
		borderRadius: 10,
		textAlign: "center",
	},
	message: {
		backgroundColor: "#fa9908",
		fontWeight: "bold",
		padding: 5,
		borderRadius: 5,
		marginTop: 10,
	},
	buttonsContainer: {
		flexDirection: "row",
		gap: 20,
		marginTop: 20,
	},
	button: {
		padding: 10,
		borderRadius: 5,
		color: "#fff",
	},
	disabledButton: {
		backgroundColor: "#ccc",
	},
	addButton: {
		backgroundColor: "#00c800",
	},
	removeButton: {
		backgroundColor: "#c80000",
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});
