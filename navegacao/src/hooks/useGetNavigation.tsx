import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
	type CompositeNavigationProp,
	StackActions,
	useNavigation,
} from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Tenho que tipar para não dar erro, porque o useNavigation não tem como saber quais telas eu tenho no meu app, então eu crio um tipo para isso, e passo ele para o useNavigation
type RootParamList = {
	Home: undefined;
	About: undefined;
	Contact: undefined;
	Details: undefined;
};

type NavigationProp = CompositeNavigationProp<
	NativeStackNavigationProp<RootParamList>,
	BottomTabNavigationProp<RootParamList> // Adiciona suporte a Tabs
	// Você pode adicionar o Drawer aqui também
>;

export const useGetNavigation = () => {
	const navigation = useNavigation<NavigationProp>();
	return { navigation, StackActions };
};
