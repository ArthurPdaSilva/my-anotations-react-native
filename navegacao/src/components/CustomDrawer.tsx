import {
	type DrawerContentComponentProps,
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";
import { Image, Text, View } from "react-native";

export const CustomDrawer = (props: DrawerContentComponentProps) => {
	return (
		<DrawerContentScrollView {...props}>
			<View
				style={{
					flex: 1,
					height: 85,
					marginTop: 30,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Image
					source={require("../../assets/icon.png")}
					style={{ width: 65, height: 65 }}
				/>
				<Text style={{ color: "#fff", fontSize: 17, marginTop: 5 }}>
					Bem-vindo!
				</Text>
			</View>

			<DrawerItemList {...props} />
		</DrawerContentScrollView>
	);
};
