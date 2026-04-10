import Slider from "@react-native-community/slider"
import { useState } from "react"
import { Text, View } from "react-native"

// Instalando: npm i @react-native-community/slider

export const SliderContainer = () => {
  const [sliderValue, setSliderValue] = useState(50)

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Você tem: {sliderValue.toFixed(0)} kg
      </Text>
      {/* Slider basicão, bolado. */}
      <Slider 
        minimumValue={0} 
        maximumValue={100} 
        value={sliderValue} 
        onValueChange={setSliderValue}

        // Mexendo com as cores
        minimumTrackTintColor="#FF0000"
        maximumTrackTintColor="#0000FF"
        thumbTintColor="#00FF00"
      />
    </View>
  )
}