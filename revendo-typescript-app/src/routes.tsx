import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type StackParamList = {
  Home: undefined;
  Detail: {
    name: string;
    age: number;
  }
}

const AppStack = createNativeStackNavigator<StackParamList>();

import { Detail } from "./screens/Details";
import { Home } from "./screens/Home";

export const Routes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Detail" component={Detail} />
    </AppStack.Navigator>
  )
}