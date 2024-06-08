import WebView from "react-native-webview";
import { useEffect, useState } from "react";
import { Stack, useSegments } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
// -----------------------------------------------------------------------------
import Container from "@/components/Container";
// -----------------------------------------------------------------------------
import { Lesson, Lessons } from "@/assets/lessons";


export default function Lesson1() {
  const segments = useSegments();
  const [ lesson, setLesson ] = useState<Lesson>();

  useEffect(() => {(async () => {
    const allLessonsJson = await AsyncStorage.getItem("lessons");
    if (!allLessonsJson) return;
    const allLessonsArray = JSON.parse(allLessonsJson) as Lessons;
    const currentLessonObject = allLessonsArray.find((lesson) => lesson.number === segments.at(-1));
    setLesson(currentLessonObject);
  })()}, [])

  return (
    <Container>
      <Stack.Screen options={{title: `${lesson?.number}. ${lesson?.title}`}}/>
      <WebView source={{html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    table {
      border-collapse: collapse;
      table-layout: fixed;
      inline-size: 200px;
    }
    td {
      padding: 5px;
      border: 1px solid black;
    }
    col:nth-child(1) {
      background-color: #e5f5e6;
    }
  </style>
  <title>Document</title>
</head>
<body>
  <p></p>
  <div style="overflow-y: scroll; max-width: 100%;">
    <table>
      <colgroup>
        <col/>
        <col/>
      </colgroup>
      <tbody>
        <tr>
          <td>What</td>
          <td>Что / Какой</td>
        </tr>
        <tr>
          <td>Where</td>
          <td>Где / Куда</td>
        </tr>
        <tr>
          <td>When</td>
          <td>Когда</td>
        </tr>
        <tr>
          <td>Why</td>
          <td>Почему</td>
        </tr>
        <tr>
          <td>Who</td>
          <td>Кто</td>
        </tr>
        <tr>
          <td>How</td>
          <td>Как</td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
</html>`}} style={{backgroundColor: "transparent"}}/>
    </Container>
  )
}