import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
	flex: 1;
	align-items: center;
	justify-content: center;
	padding: 20px;
	background-color: white;
`;

export const Title = styled(Text)`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 20px;
`;

export const DynamicName = styled(Text)<{ color: string; size: number }>`
	color: ${(props) => props.color};
	font-size: ${(props) => props.size}px;
`;

export const CustomButton = styled(TouchableOpacity)`
	background-color: #007bff;
	padding: 10px 20px;
	border-radius: 5px;
`;

export const ButtonText = styled(Text)`
	color: white;
	font-size: 16px;
	font-weight: bold;
`;
