import { RouteProp, useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { StackParamList } from "../routes";

export const Detail = () => {
  const route = useRoute<RouteProp<StackParamList, "Detail">>();

  console.log(route.params.name)
  console.log(route.params.age)

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Detail</Text>
    </View>
  )
}