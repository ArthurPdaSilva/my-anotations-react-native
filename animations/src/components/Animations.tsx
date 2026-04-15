import { useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";

// Alguns não aceitam o Animable.Component, então use o createAnimatableComponent para criar um componente animável a partir do componente nativo
const ButtonAnimatable = Animatable.createAnimatableComponent(TouchableOpacity);

export const Animations = () => {
	const buttonRef = useRef<any>(null);

	const handleClick = () => {
		if (!buttonRef.current) return;
		buttonRef.current.bounce();
	};

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Animatable.Text
				// bounce, fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight, bounceIn, bounceInDown, bounceInUp, bounceInLeft, bounceInRight, pulse
				animation={"shake"}
				duration={5000}
				iterationCount={"infinite"}
				style={{ fontSize: 24, fontWeight: "bold" }}
			>
				Carregando!
			</Animatable.Text>
			<ButtonAnimatable
				ref={buttonRef}
				animation={"bounceIn"}
				duration={1500}
				iterationCount="infinite"
				style={{
					marginTop: 20,
					padding: 10,
					backgroundColor: "blue",
					borderRadius: 5,
				}}
				onPress={handleClick}
			>
				<Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
					Animar
				</Text>
			</ButtonAnimatable>
		</View>
	);
};
