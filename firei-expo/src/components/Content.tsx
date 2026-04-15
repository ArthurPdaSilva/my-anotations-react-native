// import { doc, getDoc } from "firebase/firestore";

import { signOut } from "firebase/auth";
import {
	addDoc,
	collection,
	doc,
	onSnapshot,
	updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import {
	Button,
	Keyboard,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { auth, db } from "../connection";
import type { User } from "../types";
import { UserForm } from "./UserForm";
import { UserList } from "./UserList";

export function Content() {
	const [users, setUsers] = useState<User[]>([]);
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [occupation, setOccupation] = useState("");
	const [showForm, setShowForm] = useState(true);
	const [isEditing, setIsEditing] = useState("0");

	useEffect(() => {
		// const getData = async () => {
		// 	const docRef = collection(db, "users");
		// 	const docSnap = await getDocs(docRef);
		// 	if (docSnap.empty) {
		// 		return;
		// 	}
		// 	const usersData = docSnap.docs.map((doc) => ({
		// 		...doc.data(),
		// 		Id: doc.id,
		// 	})) as User[];
		// 	setUsers(usersData);
		// };

		// getData();

		const realTimeListener = () => {
			const usersRef = collection(db, "users");
			const unsubscribe = onSnapshot(usersRef, (snapshot) => {
				const usersData = snapshot.docs.map((doc) => ({
					...doc.data(),
					Id: doc.id,
				})) as User[];
				setUsers(usersData);
			});
			return () => unsubscribe();
		};

		realTimeListener();
		// const fetchData = async () => {
		// 	const docRef = doc(db, "users", "1");
		// 	const docSnap = await getDoc(docRef);
		// 	if (!docSnap.exists()) {
		// 		return;
		// 	}
		// 	const userData = docSnap.data() as User;
		// 	setUser(userData);
		// };
		// fetchData();

		// Agora, observando as mudanças em tempo real:
		// const unsubscribe = onSnapshot(doc(db, "users", "1"), (docSnap) => {
		// 	if (!docSnap.exists()) {
		// 		return;
		// 	}
		// 	const userData = docSnap.data() as User;
		// 	setUser(userData);
		// });
		// return () => unsubscribe();
	}, []);

	// const handleRegisterMock = async () => {
	// 	// await setDoc(doc(db, "users", "2"), {
	// 	// 	Name: "Augusto",
	// 	// 	Age: 25,
	// 	// 	Occupation: "Developer",
	// 	// })
	// 	// 	.then(() => console.log("User added successfully!"))
	// 	// 	.catch((error) => console.error("Error adding user: ", error));
	// };

	const handleRegister = async () => {
		// Agora, eu quero q o id seja gerado automaticamente:
		await addDoc(collection(db, "users"), {
			Name: name,
			Age: Number.parseInt(age, 10) || 0,
			Occupation: occupation,
		})
			.then(() => {
				console.log("User added successfully!");
				setName("");
				setAge("");
				setOccupation("");
				Keyboard.dismiss();
			})
			.catch((error) => console.error("Error adding user: ", error));
	};

	const handleEdit = async (user: User) => {
		setName(user.Name);
		setAge(String(user.Age));
		setOccupation(user.Occupation);
		setShowForm(true);
		setIsEditing(user.Id);
	};

	const handleUpdate = async () => {
		const docRef = doc(db, "users", isEditing);
		await updateDoc(docRef, {
			Name: name,
			Age: Number.parseInt(age, 10) || 0,
			Occupation: occupation,
		})
			.then(() => {
				console.log("User updated successfully!");
				setName("");
				setAge("");
				setOccupation("");
				setIsEditing("0");
				Keyboard.dismiss();
			})
			.catch((error) => console.error("Error updating user: ", error));
	};

	const handleLogout = async () => {
		await signOut(auth);
	};

	return (
		<View style={styles.container}>
			{showForm && (
				<UserForm
					name={name}
					age={age}
					occupation={occupation}
					onNameChange={setName}
					onAgeChange={setAge}
					onOccupationChange={setOccupation}
					onSubmit={handleRegister}
					isEditing={isEditing !== "0"}
					handleUpdate={handleUpdate}
				/>
			)}

			<Button
				title={showForm ? "Esconder Formulário" : "Mostrar Formulário"}
				onPress={() => setShowForm((prev) => !prev)}
			/>

			<TouchableOpacity style={styles.button} onPress={handleLogout}>
				<Text style={styles.buttonText}>Logout</Text>
			</TouchableOpacity>

			<UserList users={users} handleEdit={handleEdit} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	button: {
		backgroundColor: "red",
		padding: 10,
		borderRadius: 5,
		width: "80%",
		marginTop: 10,
	},
	buttonText: { color: "white", textAlign: "center" },
});
