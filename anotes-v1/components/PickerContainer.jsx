import { Picker } from "@react-native-picker/picker"
import { useState } from "react"
import { Text, View } from "react-native"

//Instalando: npm i @react-native-picker/picker

const cars = [
  { key: 0, name: "Mustang", value: 25000 },
  { key: 1, name: "Camaro", value: 30000 },
  { key: 2, name: "Challenger", value: 35000 },
  { key: 3, name: "Corvette", value: 50000 },
]

// Usado em formulários, para o usuário escolher uma opção entre várias. É a mesma patifaria que é um select, só que mais bonitinho.
export const PickerContainer = () => {
  const [selectedCar, setSelectedCar] = useState(cars[0].key)

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      {/* É a mesma patifaria que é um select, só que mais bonitinho. */}
      <Picker
        selectedValue={selectedCar}
        onValueChange={(itemValue, itemIndex) => setSelectedCar(itemValue)}
      >
        {cars.map((car) => (
          <Picker.Item key={car.key} label={car.name} value={car.key} />
        ))}
      </Picker>

      <Text style={{ fontSize: 20, textAlign: "center", marginTop: 20, padding: 10 }}>
        O {cars[selectedCar].name} custa R${cars[selectedCar].value.toFixed(2)}
      </Text>
    </View>
  )
}