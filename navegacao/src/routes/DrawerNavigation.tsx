import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawer } from "../components/CustomDrawer";
import { About, Contact, Details, Home } from "../pages";

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
	return (
		<Drawer.Navigator
			drawerContent={CustomDrawer}
			screenOptions={{
				drawerStyle: {
					backgroundColor: "#121212",
				},

				drawerActiveTintColor: "#fff",
				drawerInactiveTintColor: "#888",

				headerStyle: {
					backgroundColor: "#121212",
				},
				headerTintColor: "#fff",

				drawerLabelStyle: {
					fontSize: 18,
				},
			}}
		>
			<Drawer.Screen
				name="Home"
				component={Home}
				options={{
					drawerLabel: "Página Inicial",
					title: "Página Inicial",
				}}
			/>
			<Drawer.Screen name="About" component={About} />
			<Drawer.Screen name="Contact" component={Contact} />
			<Drawer.Screen name="Details" component={Details} />
		</Drawer.Navigator>
	);
};
