import { Text } from "react-native";
// -----------------------------------------------------------------------------
import Container from "@/components/Container";
import { Stack, useLocalSearchParams, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import { Lesson, Lessons } from "@/assets/types";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function quiz() {
  const params = useLocalSearchParams();
  const [ lesson, setLesson ] = useState<Lesson>();

  useEffect(() => {(async () => {
    const allLessonsJson = await AsyncStorage.getItem("lessons");
    if (!allLessonsJson) return;
    const allLessonsArray = JSON.parse(allLessonsJson) as Lessons;
    const currentLessonObject = allLessonsArray.find((lesson) => lesson.number === params.lessonNumber);
    setLesson(currentLessonObject);
  })()}, [])

  return (
    <Container>
      <Stack.Screen options={{title: `${lesson?.number}. ${params.type === "theory" ? "Проверка теории" : "Упражнения"}`}}/>
    </Container>
  )
}