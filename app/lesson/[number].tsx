import { useEffect, useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
// -----------------------------------------------------------------------------
import type { Lesson, Lessons } from "@/assets/lessons";


export default function LessonsPage() {
  const params = useLocalSearchParams();
  const [ lesson, setLesson ] = useState<Lesson>();

  useEffect(() => {(async () => {
    const lessonsJson = await AsyncStorage.getItem("lessons");
    if (!lessonsJson) return;
    const lessonsArray = JSON.parse(lessonsJson) as Lessons;
    const lessonObject = lessonsArray.find((lesson) => lesson.number === params.number);
    setLesson(lessonObject);
  })()}, [])
  
  return (
    <Stack.Screen options={{title: `${params.number}. ${lesson?.title}`}}/>
  )
}