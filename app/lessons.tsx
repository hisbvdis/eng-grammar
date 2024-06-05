import { Stack } from "expo-router";
import { View } from "react-native";


export default function LessonsPage() {
  return (
    <View>
      <Stack.Screen options={{title: "Уроки"}}/>
    </View>
  )
}