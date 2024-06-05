import { useState } from "react";
import { Pressable, PressableProps, StyleSheet, Text, ViewStyle } from "react-native";


export default function Btn(props:PressableProps) {
  const [bgColor, setBgColor] = useState("#0061C2");

  return (
    <Pressable
      {...props}
      style={[styles.button, {backgroundColor: bgColor}, props.style as ViewStyle]}
      onPressIn={() => setBgColor("#0288d1")}
      onPressOut={() => setBgColor("#0061C2")}
    >
      <Text style={styles.button__text}>{typeof props.children === "string" && props.children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "#0061C2",
    minWidth: 40,
  },
  button__text: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
  }
})