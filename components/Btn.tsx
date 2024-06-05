import { useState } from "react";
import { StyleSheet, Text, ViewStyle, TouchableHighlight, TouchableHighlightProps } from "react-native";


export default function Btn(props:TouchableHighlightProps) {
  return (
    <TouchableHighlight
      {...props}
      style={[styles.button, props.style as ViewStyle]}
      underlayColor="#0288d1"
    >
      <Text style={styles.button__text}>{typeof props.children === "string" && props.children}</Text>
    </TouchableHighlight>
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