import { useEffect, useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
// -----------------------------------------------------------------------------
import type { Lesson, Lessons } from "@/assets/lessons";
import { View, useWindowDimensions } from "react-native";
import Container from "@/components/Container";


export default function LessonsPage() {
  const params = useLocalSearchParams();
  const [ lesson, setLesson ] = useState<Lesson>();
  const { width } = useWindowDimensions();

  useEffect(() => {(async () => {
    const lessonsJson = await AsyncStorage.getItem("lessons");
    if (!lessonsJson) return;
    const lessonsArray = JSON.parse(lessonsJson) as Lessons;
    const lessonObject = lessonsArray.find((lesson) => lesson.number === params.number);
    setLesson(lessonObject);
  })()}, [])

  return (
    <Container>
      <Stack.Screen options={{title: `${params.number}. ${lesson?.title}`}}/>
    </Container>
  )
}