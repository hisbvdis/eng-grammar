import { useEffect, useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
// -----------------------------------------------------------------------------
import type { Lesson, Lessons } from "@/assets/lessons";
import Container from "@/components/Container";


export default function LessonsPage() {
  const params = useLocalSearchParams();
  const [ lesson, setLesson ] = useState<Lesson>();

  useEffect(() => {(async () => {
    const allLessonsJson = await AsyncStorage.getItem("lessons");
    if (!allLessonsJson) return;
    const allLessonsArray = JSON.parse(allLessonsJson) as Lessons;
    const currentLessonObject = allLessonsArray.find((lesson) => lesson.number === params.number);
    setLesson(currentLessonObject);
  })()}, [])

  return (
    <Container>
      <Stack.Screen options={{title: `${params.number}. ${lesson?.title}`}}/>
    </Container>
  )
}