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
      inline-size: 600px;
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
  <p><b>Местоимение</b> (Pronoun)  —  указывает на предмет, но не называет его</p>
  <h2>Формы местоимений</h2>
  <table>
    <colgroup>
      <col/><col/><col/><col/><col/><col/>
    </colgroup>
    <tbody>
      <tr>
        <th colspan="2" class="heading">Кто</th>
        <th colspan="2" class="heading">Кому / Кого</th>
        <th colspan="2" class="heading">Чей</th>
      </tr>
      <tr>
        <td>I</td>
        <td>Я</td>
        <td>Me</td>
        <td>Мне / Меня</td>
        <td>My</td>
        <td>Мой</td>
      </tr>
      <tr>
        <td>He</td>
        <td>Он</td>
        <td>Him</td>
        <td>Ему / Его</td>
        <td>His</td>
        <td>Его</td>
      </tr>
      <tr>
        <td>She</td>
        <td>Она</td>
        <td>Her</td>
        <td>Ей / Её</td>
        <td>Her</td>
        <td>Её</td>
      </tr>
      <tr>
        <td>It</td>
        <td>Оно</td>
        <td>It</td>
        <td>Это</td>
        <td>Its</td>
        <td>Этого</td>
      </tr>
      <tr>
        <td>We</td>
        <td>Мы</td>
        <td>Us</td>
        <td>Нам / Нас</td>
        <td>Our</td>
        <td>Наш</td>
      </tr>
      <tr>
        <td>You</td>
        <td>Вы</td>
        <td>You</td>
        <td>Вам / Вас</td>
        <td>Your</td>
        <td>Ваш</td>
      </tr>
      <tr>
        <td>They</td>
        <td>Они</td>
        <td>Them</td>
        <td>Им / Их</td>
        <td>Their</td>
        <td>Их</td>
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