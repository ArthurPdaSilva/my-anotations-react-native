import { useState } from "react";
import { Button, Modal, Text, View } from "react-native";

export const ModalContainer = () => {
	const [modalVisible, setModalVisible] = useState(false);

	const handleOpenModal = () => {
		setModalVisible(true);
	};

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Button title="Abrir modal" onPress={handleOpenModal} />

			{/* Como obrigratório ele precisa receber a prop visible */}
			{/* Consigo selecionar a animação de abrir */}
			{/*  */}
			<Modal transparent visible={modalVisible} animationType="slide">
				<ModaElement closeModal={() => setModalVisible(false)} />
			</Modal>
		</View>
	);
};

export const ModaElement = ({ closeModal }) => {
	return (
		<View
			style={{
				flex: 1,
				margin: 15,
				alignItems: "center",
				justifyContent: "flex-end",
			}}
		>
			<View
				style={{
					backgroundColor: "#292929",
					width: "100%",
					height: 350,
					borderRadius: 5,
				}}
			>
				<Text
					style={{
						fontSize: 25,
						color: "#fff",
						textAlign: "center",
						padding: 20,
					}}
				>
					Seja bem vindo!
				</Text>
				<Button title="Fechar modal" onPress={closeModal} />
			</View>
		</View>
	);
};
