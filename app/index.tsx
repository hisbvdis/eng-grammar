import { Link, Stack } from "expo-router";
import { ImageBackground, StyleSheet, Text } from "react-native";
// -----------------------------------------------------------------------------
import Btn from "@/components/MyButton";
import Container from "@/components/Container";


export default function RootPage() {
  return (
    <ImageBackground source={require("../assets/images/main.webp")} style={{flex: 1}}>
      <Container style={styles.container}>
        <Stack.Screen options={{headerShown: false}}/>
        <Text style={styles.heading}>Полиглот</Text>
        <Link href="/lessons" asChild style={{width: "100%"}}><Btn>ВОЙТИ</Btn></Link>
      </Container>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "white",
    fontSize: 50,
    fontWeight: "500",
    marginBottom: 50,
    textShadowColor: "#333",
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10
  }
})