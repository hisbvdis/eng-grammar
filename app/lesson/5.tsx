import WebView from "react-native-webview";
import { useEffect, useState } from "react";
import { Link, Stack, useSegments } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
// -----------------------------------------------------------------------------
import Container from "@/components/Container";
// -----------------------------------------------------------------------------
import { Lesson, Lessons } from "@/assets/types";
import Btn from "@/components/Btn";


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
    h2 {
      margin-block: 1em 0;
    }
    table {
      border-collapse: collapse;
      table-layout: fixed;
      inline-size: 800px;
    }
    th, td {
      border: 1px solid #000;
    }
    .heading {
      background-color: #f3f3f3;
      text-align: center;
    }
    col:nth-child(odd) {
      background-color: #e5f5e6;
    }
    col:nth-child(even) {
      background-color: #fff7e5;
    }
  </style>
  <title>Document</title>
</head>

<body>
  <p><b>Глагол</b> (Verb)  —  называет действие</p>
  <h2>1.Формы глаголов "1-3"</h2>
  <table>
    <colgroup>
      <col/><col/><col/><col/><col/><col/>
    </colgroup>
    <tbody>
      <tr>
        <th colspan="2" class="heading">V1</th>
        <th colspan="2" class="heading">V2</th>
        <th colspan="2" class="heading">V3</th>
      </tr>
      <tr>
        <th colspan="2" class="heading">Что делать</th>
        <th colspan="2" class="heading">Что делал</th>
        <th colspan="2" class="heading">Что сделанный<br/>(предмет, над которым совершили действие)</th>
      </tr>
      <tr>
        <td>paint</td>
        <td>красить</td>
        <td>painted</td>
        <td>красил</td>
        <td>painted</td>
        <td>окрашенный</td>
      </tr>
      <tr>
        <td>kill</td>
        <td>убивать</td>
        <td>killed</td>
        <td>убивал</td>
        <td>killed</td>
        <td>убитый</td>
      </tr>
      <tr>
        <td>use</td>
        <td>использовать</td>
        <td>used</td>
        <td>использовал</td>
        <td>used</td>
        <td>использованный</td>
      </tr>
    </tbody>
  </table>

  <h2>2.Формы глаголов "ing"</h2>
  <table>
    <colgroup>
      <col/><col/><col/><col/><col/><col/>
    </colgroup>
    <tbody>
      <tr>
        <th colspan="2" class="heading">Ving1</th>
        <th colspan="2" class="heading">Ving2</th>
        <th colspan="2" class="heading">Ving3</th>
      </tr>
      <tr>
        <th colspan="2" class="heading">Что делающий<br/>(предмет, который совершает действие)</th>
        <th colspan="2" class="heading">Что делание<br/>(герундий — существительное, называющее действие)</th>
        <th colspan="2" class="heading">Что делая</th>
      </tr>
      <tr>
        <td>painting</td>
        <td>красящий</td>
        <td>painting</td>
        <td>окрашивание</td>
        <td>painting</td>
        <td>окрашивая</td>
      </tr>
      <tr>
        <td>killing</td>
        <td>убивающий</td>
        <td>killing</td>
        <td>убивание</td>
        <td>killing</td>
        <td>убивая</td>
      </tr>
      <tr>
        <td>using</td>
        <td>использующий</td>
        <td>using</td>
        <td>использование</td>
        <td>using</td>
        <td>используя</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`}} style={{backgroundColor: "transparent"}}/>
      <Link href={`/quiz?lessonNumber=${lesson?.number}&type=theory`} asChild>
        <Btn>Вопросы по теории</Btn>
      </Link>
      <Link href={`/quiz?lessonNumber=${lesson?.number}&type=exercises`} asChild style={{marginTop: 20}}>
        <Btn>Упражнения</Btn>
      </Link>
    </Container>
  )
}