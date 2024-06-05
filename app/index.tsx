import { Link, Stack } from "expo-router";
import { ImageBackground, StyleSheet, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
// -----------------------------------------------------------------------------
import Btn from "@/components/Btn";
import Container from "@/components/Container";
// -----------------------------------------------------------------------------
import lessonsStorage from "../assets/lessons.json";
import { useEffect } from "react";


export default function RootPage() {
  useEffect(() => {(async () => {
    // if ((await AsyncStorage.getItem("lessons"))) return;
    AsyncStorage.setItem("lessons", JSON.stringify(lessonsStorage));
  })()}, [])
  
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