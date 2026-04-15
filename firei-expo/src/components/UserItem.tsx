import { deleteDoc, doc } from "firebase/firestore";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { db } from "../connection";
import type { User } from "../types";

type UserItemProps = {
	user: User;
	handleEdit: (user: User) => void;
};

export function UserItem({ user, handleEdit }: UserItemProps) {
	const handleDelete = async () => {
		const docRef = doc(db, "users", user.Id);
		await deleteDoc(docRef);
	};

	return (
		<View style={styles.card}>
			<Text style={styles.name}>{user.Name}</Text>
			<Text>Idade: {user.Age}</Text>
			<Text>Ocupação: {user.Occupation}</Text>

			<TouchableOpacity
				style={styles.buttonEdit}
				onPress={() => handleEdit(user)}
			>
				<Text style={styles.buttonText}>Editar</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={handleDelete}>
				<Text style={styles.buttonText}>Deletar</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 10,
		marginTop: 20,
		width: 300,
	},
	name: {
		fontSize: 18,
		fontWeight: "bold",
	},
	button: {
		backgroundColor: "#ff4d4d",
		padding: 10,
		marginTop: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: "#fff",
		textAlign: "center",
		fontWeight: "bold",
	},
	buttonEdit: {
		backgroundColor: "#4CAF50",
		padding: 10,
		marginTop: 10,
		borderRadius: 5,
	},
});

export type { User };
