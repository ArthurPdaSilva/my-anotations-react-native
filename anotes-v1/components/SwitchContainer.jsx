import { useState } from "react"
import { Switch, Text, View } from "react-native"

export const SwitchContainer = () => {
  const [isEnabled, setIsEnabled] = useState(false)

  return (
    <View style={{ flex: 1, marginTop: 50, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        Sua conta está {isEnabled ? "Ativada" : "Desativada"}
      </Text>
      <Switch 
        onValueChange={setIsEnabled}
        value={isEnabled}

        //Cores do Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#000000" : "#f4f3f4"}
      />
    </View>
  )
}