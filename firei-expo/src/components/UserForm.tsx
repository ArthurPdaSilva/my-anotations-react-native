import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

type UserFormProps = {
	name: string;
	age: string;
	occupation: string;
	onNameChange: (value: string) => void;
	onAgeChange: (value: string) => void;
	onOccupationChange: (value: string) => void;
	onSubmit: () => void;
	isEditing: boolean;
	handleUpdate: () => void;
};

export function UserForm({
	name,
	age,
	occupation,
	onNameChange,
	onAgeChange,
	onOccupationChange,
	onSubmit,
	isEditing,
	handleUpdate,
}: UserFormProps) {
	return (
		<View>
			<TextInput
				style={styles.input}
				placeholder="Digite o nome do usuário"
				value={name}
				onChangeText={onNameChange}
			/>
			<TextInput
				style={styles.input}
				placeholder="Digite a idade do usuário"
				value={age}
				onChangeText={onAgeChange}
				keyboardType="numeric"
			/>
			<TextInput
				style={styles.input}
				placeholder="Digite a ocupação do usuário"
				value={occupation}
				onChangeText={onOccupationChange}
			/>
			{isEditing ? (
				<TouchableOpacity style={styles.button} onPress={handleUpdate}>
					<Text style={styles.buttonText}>Atualizar Usuário</Text>
				</TouchableOpacity>
			) : (
				<TouchableOpacity style={styles.button} onPress={onSubmit}>
					<Text style={styles.buttonText}>Adicionar Usuário</Text>
				</TouchableOpacity>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		width: 300,
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 10,
		marginTop: 20,
	},
	button: {
		backgroundColor: "#007AFF",
		padding: 10,
		borderRadius: 5,
		marginTop: 20,
		marginBottom: 20,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
	},
});
