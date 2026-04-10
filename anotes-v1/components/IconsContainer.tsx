// O expo já tem icons integrados
import Feather from "@expo/vector-icons/Feather";
import { View } from "react-native";

export const IconsContainer = () => {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Feather name="users" size={24} color="#000" />
		</View>
	);
};
