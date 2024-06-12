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
    th,td {
      padding: 5px;
      border: 1px solid #000;
    }
    .notesTable {
      background-color: #fafafa;
    }
    .notesTable td {
      border: 1px solid #ccc;
    }
    p {
      margin-block: 0;
    }

    h2 {
      margin-block: 1em 0;
    }
    .heading {
      background-color: #f3f3f3;
      border: 1px solid #000;
      text-align: center;
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
  <h2>1 тип: Условие —> Следствие</h2>
  <table class="notesTable">
    <tbody>
      <tr>
        <td class="subHeading" colspan="2"># Формула</td>
      </tr>
      <tr>
        <td>If &lt;Present Simple&gt;  ——> &lt;Future Simple&gt;</td>
      </tr>
      <tr>
        <td class="subHeading" colspan="2"># Пример (со смысловым глаголом)</td>
      </tr>
      <tr>
        <td>If you help me        ——>  I will win </td>
        <td class="comment">// УТВ: Если ты поможешь мне, я одержу победу</td>
      </tr>
      <tr>
        <td>If you don't help me  ——>  I will lose</td>
        <td class="comment">// ОТР: Если ты не поможешь мне, я проиграю</td>
      </tr>
      <tr>
        <td class="subHeading" colspan="2"># Пример (с глаголом "be")</td>
      </tr>
      <tr>
        <td>If you are strong     ——>  you will win</td>
        <td class="comment">// УТВ: Если ты будешь сильным, ты победишь</td>
      </tr>
      <tr>
        <td>If you aren't strong  ——>  you will lose</td>
        <td class="comment">// ОТР: Если ты не будешь сильным, ты проиграешь</td>
      </tr>
    </tbody>
  </table>


  <h2>2 тип: Условие (бы, актуальное)  —>  Следствие</h2>
  <table class="notesTable">
    <tbody>
      <tr>
        <td class="subHeading" colspan="2"># Формула</td>
      </tr>
      <tr>
        <td>If &lt;Past Simple&gt;  ——> &lt;Present Simple&gt;</td>
      </tr>
      <tr>
        <td class="subHeading" colspan="2"># Пример: Смысловой глагол</td>
      </tr>
      <tr>
        <td>If you helped me       ——>  I would win</td>
        <td class="comment">// УТВ: Если бы ты помог мне, я бы победил</td>
      </tr>
      <tr>
        <td>If you didn't help me  ——>  I would lose</td>
        <td class="comment">// ОТР: Если бы ты не помог мне, я бы проиграл</td>
      </tr>
      <tr>
        <td class="subHeading" colspan="2"># Пример: Глагол "be"</td>
      </tr>
      <tr>
        <td>If you were strong     ——>  you could win</td>
        <td class="comment">// УТВ: Если бы ты был сильным, ты мог бы победить</td>
      </tr>
      <tr>
        <td>If you weren't strong  ——>  you could lose</td>
        <td class="comment">// ОТР: Если бы ты был сильным, ты мог бы проиграть</td>
      </tr>
    </tbody>
  </table>


  <h2>3 тип: Условие (бы, неактуальное)  —> Следствие</h2>
  <table class="notesTable">
    <tbody>
      <tr>
        <td class="subHeading" colspan="2"># Формула</td>
      </tr>
      <tr>
        <td>If &lt;Past Perfect&gt;  ——> &lt;Present Perfect&gt;</td>
      </tr>
      <tr>
        <td class="subHeading" colspan="2"># Пример: Смысловой глагол</td>
      </tr>
      <tr>
        <td>If you had helped me     ——>  I would have won</td>
        <td class="comment">// УТВ: Если бы ты помог мне, я бы победил</td>
      </tr>
      <tr>
        <td>If you hadn't helped me  ——>  I would have lost</td>
        <td class="comment">// ОТР: Если бы ты не помог мне, я бы проиграл</td>
      </tr>
      <tr>
        <td class="subHeading" colspan="2"># Пример: Глагол "be"</td>
      </tr>
      <tr>
        <td>If you had been strong     ——>  you could have won</td>
        <td class="comment">// УТВ: Если бы ты был сильным, ты бы победил</td>
      </tr>
      <tr>
        <td>If you hadn't been strong  ——>  you could have lost</td>
        <td class="comment">// ОТР: Если бы ты был сильным, ты бы победил</td>
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