import { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";

// Para animar use useRef ou uma constante (não use state)
export const Natives = () => {
	const larAnimted = useRef(new Animated.Value(0)).current;
	const altAnimted = useRef(new Animated.Value(50)).current;
	const opacidadeAnimted = useRef(new Animated.Value(1)).current;

	useEffect(() => {
		// Animated.timing(larAnimted, {
		// 	// Qual valor eu quero que ele vá
		// 	toValue: 300,
		// 	// Quanto tempo ele vai levar para chegar nesse valor
		// 	duration: 2000,
		// 	// Se a animação deve usar o driver nativo ou não (recomendo usar o driver nativo sempre que possível, mas nesse caso não é possível porque estamos animando a largura)
		// 	useNativeDriver: false,
		// 	//Como é width, ele vai dar erro:  ERROR  Style property 'width' is not supported by native animated module
		// }).start();

		// Animated.timing(altAnimted, {
		// 	toValue: 100,
		// 	duration: 2000,
		// 	useNativeDriver: false,
		// }).start();

		// Para animar mais de uma propriedade uma depois da outra, use Animated.sequence
		// Animated.sequence([
		// 	Animated.timing(larAnimted, {
		// 		toValue: 300,
		// 		duration: 2000,
		// 		useNativeDriver: false,
		// 	}),
		// 	Animated.timing(altAnimted, {
		// 		toValue: 100,
		// 		duration: 2000,
		// 		useNativeDriver: false,
		// 	}),
		// 	Animated.timing(opacidadeAnimted, {
		// 		toValue: 0,
		// 		duration: 2000,
		// 		useNativeDriver: false,
		// 	}),
		// ]).start();

		// Agora em paralelo, use Animated.parallel
		// Animated.parallel([
		// 	Animated.timing(larAnimted, {
		// 		toValue: 300,
		// 		duration: 2000,
		// 		useNativeDriver: false,
		// 	}),
		// 	Animated.timing(altAnimted, {
		// 		toValue: 100,
		// 		duration: 2000,
		// 		useNativeDriver: false,
		// 	}),
		// 	Animated.timing(opacidadeAnimted, {
		// 		toValue: 0,
		// 		duration: 2000,
		// 		useNativeDriver: false,
		// 	}),
		// ]).start();

		// Animated.sequence([
		// 	Animated.timing(opacidadeAnimted, {
		// 		toValue: 1,
		// 		duration: 2000,
		// 		useNativeDriver: false,
		// 	}),
		// 	Animated.parallel([
		// 		Animated.timing(larAnimted, {
		// 			toValue: 300,
		// 			duration: 2000,
		// 			useNativeDriver: false,
		// 		}),
		// 		Animated.timing(altAnimted, {
		// 			toValue: 300,
		// 			duration: 2000,
		// 			useNativeDriver: false,
		// 		}),
		// 	]),
		// 	Animated.timing(opacidadeAnimted, {
		// 		toValue: 0,
		// 		duration: 2000,
		// 		useNativeDriver: false,
		// 	}),
		// ]).start();

		// Agora looping
		// Animated.loop(
		// 	Animated.timing(larAnimted, {
		// 		toValue: 300,
		// 		duration: 2000,
		// 		useNativeDriver: false,
		// 	})
		// ).start()

		// Animated.loop(
		// 	Animated.sequence([
		// 		Animated.timing(larAnimted, {
		// 			toValue: 300,
		// 			duration: 2000,
		// 			useNativeDriver: false,
		// 		}),
		// 		Animated.timing(larAnimted, {
		// 			toValue: 150,
		// 			duration: 2000,
		// 			useNativeDriver: false,
		// 		}),
		// 	]),
		// ).start();

		//
		Animated.sequence([
			Animated.timing(larAnimted, {
				toValue: 300,
				duration: 2000,
				useNativeDriver: false,
			}),

			Animated.timing(altAnimted, {
				toValue: 150,
				duration: 2000,
				useNativeDriver: false,
			}),
		]).start(({ finished }) => {
			alert("Animação finalizada");
			console.log(`Animação finalizada? ${finished ? "Sim" : "Não"}`);
		});
	}, [larAnimted, altAnimted]);

	// Animated não recebe valores % ou string, então caso eu queira que ele ocupe uma porcentagem da tela, eu preciso usar interpolate para transformar o valor numérico em uma string com %.
	const porcentagem = larAnimted.interpolate({
		inputRange: [0, 300],
		outputRange: ["0%", "100%"],
	});

	const altPorcentagem = altAnimted.interpolate({
		inputRange: [50, 150],
		outputRange: ["20%", "100%"],
	});

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#fff",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Animated.View
				style={{
					width: porcentagem,
					height: altPorcentagem,
					backgroundColor: "blue",
					justifyContent: "center",
					alignItems: "center",
					padding: 10,
					// borderRadius: 50,
					opacity: opacidadeAnimted,
				}}
			>
				<Text style={{ color: "#fff", fontSize: 18 }}>Carregando...</Text>
			</Animated.View>
		</View>
	);
};
