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
      /* table-layout: fixed; */
      /* inline-size: 600px; */
    }
    td {
      padding: 5px;
      border: 1px solid #ccc;
    }
    .notesTable {
      background-color: #fafafa;
    }
    p {
      margin-block: 0;
    }

    h2 {
      margin-block: 1em 0;
    }
    .subHeading {
      font-weight: bold;
      color: #900;
    }
    .comment {
      color: #969896;
    }
    ul {
      margin: 0;
    }
  </style>
  <title>Document</title>
</head>

<body>
  <h2>Много — A lot of / Many / Much</h2>
  <table class="notesTable">
    <tbody>
      <tr>
        <td class="subHeading" colspan="2"># Many (Исчисляемые)</td>
      </tr>
      <tr>
        <td>How many apples do you have?</td>
        <td class="comment">// Вопрос: Сколько у тебя яблок?</td>
      </tr>
      <tr>
        <td>I don't have many apples</td>
        <td class="comment">// Отрицание: У меня не много яблок</td>
      </tr>
      <tr>
        <td>How many apples do you have?</td>
        <td class="comment">// Вопрос: Сколько у тебя яблок?</td>
      </tr>
      <tr>
        <td class="subHeading" colspan="2"># Much (Неисчисляемые)</td>
      </tr>
      <tr>
        <td>I have too much money </td>
        <td class="comment">// Утверждение (с "too"): У меня слишком много денег</td>
      </tr>
      <tr>
        <td>I don't have much money</td>
        <td class="comment">// Отрицание: У меня не много денег</td>
      </tr>
      <tr>
        <td>How much money do you have?</td>
        <td class="comment">// Вопрос: Сколько у тебя денег?</td>
      </tr>
      <tr>
        <td class="subHeading" colspan="2"># A lot of (только утверждение, универсальное)</td>
      </tr>
      <tr>
        <td>I have a lot of apples</td>
        <td class="comment">// Утверждение: У меня много яблок</td>
      </tr>
      <tr>
        <td>I have a lot of apples</td>
        <td class="comment">// Утверждение: У меня много денег</td>
      </tr>
    </tbody>
  </table>


  <h2>Некоторое количество  —  Some / Any</h2>
  <table class="notesTable">
    <tbody>
      <tr>
        <td class="subHeading" colspan="2"># Some (Утверждение / Вопрос)</td>
      </tr>
      <tr>
        <td>She needs some money</td>
        <td class="comment">// Ей нужны деньги</td>
      </tr>
      <tr>
        <td>Would you like some coffee?</td>
        <td class="comment">// Хотите кофе?</td>
      </tr>
      <tr>
        <td class="subHeading" colspan="2"># Any  (Отрицание / Вопрос)</td>
      </tr>
      <tr>
        <td>I don't have any data</td>
        <td class="comment">// У меня нет никаких данных</td>
      </tr>
      <tr>
        <td>Do you have any money?</td>
        <td class="comment">// У тебя есть какая-то информация?</td>
      </tr>
    </tbody>
  </table>


  <h2>Several (исчисляемые)</h2>
  <table class="notesTable">
    <tbody>
      <tr>
        <td class="subHeading" colspan="2"># Several (исчисляемые)</td>
      </tr>
      <tr>
        <td>I have several apples</td>
        <td class="comment">Утверждение: У меня есть несколько яблок</td>
      </tr>
      <tr>
        <td>Do you have several apples?</td>
        <td class="comment">// Вопрос:      У тебя есть несколько яблок?</td>
      </tr>
    </tbody>
  </table>


  <h2>Немного (чуть-чуть)  —  A Few / A Little</h2>
  <table class="notesTable">
    <tbody>
      <tr>
        <td class="subHeading" colspan="2"># A few  (Исчисляемые)</td>
      </tr>
      <tr>
        <td>I have a few apples, so I can share</td>
        <td class="comment">// У меня есть несколько яблок, я могу поделиться</td>
      </tr>
      <tr>
        <td class="subHeading" colspan="2">A little  (Неисчисляемые)</td>
      </tr>
      <tr>
        <td>I had a little money, so I bought apples</td>
        <td class="comment">// У меня было немного денег, поэтому я купил одежду</td>
      </tr>
    </tbody>
  </table>


  <h2>Мало (недостаточно)  —  Few / Little</h2>
  <table class="notesTable">
    <tbody>
      <tr>
        <td class="subHeading" colspan="2"># Few  (Исчисляемые)</td>
      </tr>
      <tr>
        <td>I had few apples, so I didn't share</td>
        <td class="comment">// У меня было мало конфет, поэтому я не поделился</td>
      </tr>
      <tr>
        <td class="subHeading" colspan="2"># Little  (Неисчисляемые)</td>
      </tr>
      <tr>
        <td>I had little money, so I took more</td>
        <td class="comment">// У меня было мало денег, поэтому я взял ещё</td>
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