import { StyleSheet, View, ViewProps } from "react-native";


export default function Container(props:ViewProps) {
  return (
    <View style={[styles.container, props.style]}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  }
})