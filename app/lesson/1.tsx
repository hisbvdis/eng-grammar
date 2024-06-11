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
    table {
      border-collapse: collapse;
      /* table-layout: fixed; */
      inline-size: 850px;
    }
    td {
      padding: 5px;
      border: 1px solid #ccc;
    }
    .notesTable {
      background-color: #fafafa;
    }
    .tensesTable tr:nth-child(-n+4) {
      background-color: #fff7e5;
    }

    .tensesTable tr:nth-child(n+5) {
      background-color: #e5f5e6;
    }

    .tensesTable tr:nth-child(n+8) {
      background-color: #fce9e5;
    }

    p {
      margin-block: 0;
    }

    h2 {
      margin-block: 1em 0;
    }

    .heading {
      background-color: #f3f3f3;
      border: 2px solid #000;
      text-align: center;
    }

    .heading--aside {
      writing-mode: vertical-rl;
      text-orientation: upright;
    }
    .subHeading {
      font-weight: bold;
      color: #900;
    }

    .wideBorderBottom {
      border-block-end: 2px solid black;
    }

    .wideBorderRight {
      border-inline-end: 2px solid black;
    }

    .verb {
      color: #ea4335;
      font-weight: bold;
    }

    .comment {
      color: #969896;
    }
  </style>
  <title>Document</title>
</head>

<body>

  <p><b>Simple</b> — регулярные действия и состояние</p>
  <h2>1. Формирование (актив)</h2>
  <table class="tensesTable">
    <tbody>
      <tr>
        <td class="heading"></td>
        <td class="heading" colspan="3">Вопрос</td>
        <td class="heading" colspan="3">Утверждение</td>
        <td class="heading" colspan="3">Отрицание</td>
      </tr>
      <tr>
        <td rowspan="3" class="heading heading--aside">Будущее</td>
        <td rowspan="3" class="wideBorderBottom">Will</td>
        <td>I</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span>
        </td>
        <td>I</td>
        <td rowspan="3" class="wideBorderBottom">will</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span>
        </td>
        <td>I</td>
        <td rowspan="3" class="wideBorderBottom">will not</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span>
        </td>
      </tr>
      <tr>
        <td>He<br />She<br />It</td>
        <td>He<br />She<br />It</td>
        <td>He<br />She<br />It</td>
      </tr>
      <tr>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
      </tr>
      <tr>
        <td rowspan="3" class="heading heading--aside">Настоящее</td>
        <td>Do</td>
        <td>I</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span>
        </td>
        <td>I</td>
        <td colspan="2" class="wideBorderRight">
          <span class="verb">paint</span>
        </td>
        <td>I</td>
        <td>don't</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span>
        </td>
      </tr>
      <tr>
        <td>Does</td>
        <td>He<br />She<br />It</td>
        <td>He<br />She<br />It</td>
        <td colspan="2" class="wideBorderRight">
          <span class="verb">paint</span><b>s</b> (<span class="verb">V</span><b>s</b>)
        </td>
        <td>He<br />She<br />It</td>
        <td>doesn't</td>
      </tr>
      <tr>
        <td class="wideBorderBottom">Do</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom wideBorderRight" colspan="2">
          <span class="verb">paint</span>
        </td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">don't</td>
      </tr>
      <tr>
        <td rowspan="3" class="heading heading--aside">Прошедшее</td>
        <td rowspan="3" class="wideBorderBottom">Did</td>
        <td>I</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span>
        </td>
        <td>I</td>
        <td rowspan="3" colspan="2" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span><b>ed</b> (<span class="verb">V</span><b>2</b>)
        </td>
        <td>I</td>
        <td rowspan="3" class="wideBorderBottom">didn't</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span>
        </td>
      </tr>
      <tr>
        <td>He<br />She<br />It</td>
        <td>He<br />She<br />It</td>
        <td>He<br />She<br />It</td>
      </tr>
      <tr>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
      </tr>
    </tbody>
  </table>


  <h2>2. Формирование (пассив)</h2>
  <table class="tensesTable">
    <tbody>
      <tr>
        <td class="heading"></td>
        <td class="heading" colspan="3">Вопрос</td>
        <td class="heading" colspan="3">Утверждение</td>
        <td class="heading" colspan="3">Отрицание</td>
      </tr>
      <tr>
        <td rowspan="3" class="heading heading--aside">Будущее</td>
        <td rowspan="3" class="wideBorderBottom">Will</td>
        <td>I</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span><b>ed</b> (<span class="verb">V</span><b>3</b>)
        </td>
        <td>I</td>
        <td rowspan="3" class="wideBorderBottom">will be</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span><b>ed</b> (<span class="verb">V</span><b>3</b>)
        </td>
        <td>I</td>
        <td rowspan="3" class="wideBorderBottom">won't be</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span><b>ed</b> (<span class="verb">V</span><b>3</b>)
        </td>
      </tr>
      <tr>
        <td>He<br />She<br />It</td>
        <td>He<br />She<br />It</td>
        <td>He<br />She<br />It</td>
      </tr>
      <tr>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
      </tr>
      <tr>
        <td rowspan="3" class="heading heading--aside">Настоящее</td>
        <td>Am</td>
        <td>I</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span><b>ed</b> (<span class="verb">V</span><b>3</b>)
        </td>
        <td>I</td>
        <td>am</td>
        <td rowspan="3" class="wideBorderRight">
          <span class="verb">paint</span><b>ed</b> (<span class="verb">V</span><b>3</b>)
        </td>
        <td>I</td>
        <td>am not</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span><b>ed</b> (<span class="verb">V</span><b>3</b>)
        </td>
      </tr>
      <tr>
        <td>Is</td>
        <td>He<br />She<br />It</td>
        <td>He<br />She<br />It</td>
        <td>is</td>
        <td>He<br />She<br />It</td>
        <td>isn't</td>
      </tr>
      <tr>
        <td class="wideBorderBottom">Are</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom wideBorderRight" colspan="2">are</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">aren't</td>
      </tr>
      <tr>
        <td rowspan="3" class="heading heading--aside">Прошедшее</td>
        <td>Was</td>
        <td>I</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span><b>ed</b> (<span class="verb">V</span><b>3</b>)
        </td>
        <td>I</td>
        <td>was</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span><b>ed</b> (<span class="verb">V</span><b>3</b>)
        </td>
        <td>I</td>
        <td>wasn't</td>
        <td rowspan="3" class="wideBorderBottom wideBorderRight">
          <span class="verb">paint</span><b>ed</b> (<span class="verb">V</span><b>3</b>)
        </td>
      </tr>
      <tr>
        <td>Was</td>
        <td>He<br />She<br />It</td>
        <td>He<br />She<br />It</td>
        <td>was</td>
        <td>He<br />She<br />It</td>
        <td>wasn't</td>
      </tr>
      <tr>
        <td class="wideBorderBottom">Were</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">were</td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">weren't</td>
      </tr>
    </tbody>
  </table>


  <h2>3. Формирование (состояние)</h2>
  <table class="tensesTable">
    <tbody>
      <tr>
        <td class="heading"></td>
        <td class="heading" colspan="4">Вопрос</td>
        <td class="heading" colspan="3">Утверждение</td>
        <td class="heading" colspan="3">Отрицание</td>
      </tr>
      <tr>
        <td rowspan="3" class="heading heading--aside">Будущее</td>
        <td rowspan="3" class="wideBorderBottom">
          <span class="verb">Will</span>
        </td>
        <td>I</td>
        <td rowspan="3" class="wideBorderBottom">
          <span class="verb">be</span>
        </td>
        <td rowspan="2" class="wideBorderRight">
          <b>a painter</b>
        </td>
        <td>I</td>
        <td rowspan="3" class="wideBorderBottom">
          <span class="verb">will be</span>
        </td>
        <td rowspan="2" class="wideBorderRight">
          <b>a painter</b>
        </td>
        <td>I</td>
        <td rowspan="3" class="wideBorderBottom">
          <span class="verb">won't be</span>
        </td>
        <td rowspan="2" class="wideBorderRight">
          <b>a painter</b>
        </td>
      </tr>
      <tr>
        <td>He<br />She<br />It</td>
        <td>He<br />She<br />It</td>
        <td>He<br />She<br />It</td>
      </tr>
      <tr>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderRight wideBorderBottom"><b>painters</b></td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderRight wideBorderBottom">
          <b>painters</b>
        </td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderRight wideBorderBottom">
          <b>painters</b>
        </td>
      </tr>
      <tr>
        <td rowspan="3" class="heading heading--aside">Настоящее</td>
        <td>
          <span class="verb">Am</span>
        </td>
        <td>I</td>
        <td rowspan="2" colspan="2" class="wideBorderRight">
          <b>a painter</b>
        </td>
        <td>I</td>
        <td>
          <span class="verb">am</span>
        </td>
        <td rowspan="2" class="wideBorderRight">
          <b>a painter</b>
        </td>
        <td>I</td>
        <td>
          <span class="verb">am not</span>
        </td>
        <td rowspan="2" class="wideBorderRight">
          <b>a painter</b>
        </td>
      </tr>
      <tr>
        <td>
          <span class="verb">Is</span>
        </td>
        <td>He<br />She<br />It</td>
        <td>He<br />She<br />It</td>
        <td>
          <span class="verb">is</span>
        </td>
        <td>He<br />She<br />It</td>
        <td>
          <span class="verb">isn't</span>
        </td>
      </tr>
      <tr>
        <td class="wideBorderBottom">
          <span class="verb">Are</span>
        </td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderRight wideBorderBottom" colspan="2">
          <b>painters</b>
        </td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">
          <span class="verb">are</span>
        </td>
        <td class="wideBorderRight wideBorderBottom">
          <b>painters</b>
        </td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">
          <span class="verb">arent'</span>
        </td>
        <td class="wideBorderRight wideBorderBottom">
          <b>painters</b>
        </td>
      </tr>
      <tr>
        <td rowspan="3" class="heading heading--aside">Прошедшее</td>
        <td>
          <span class="verb">Was</span>
        </td>
        <td>I</td>
        <td rowspan="2" colspan="2" class="wideBorderRight">
          <b>a painter</b>
        </td>
        <td>I</td>
        <td>
          <span class="verb">was</span>
        </td>
        <td rowspan="2" class="wideBorderRight">
          <b>a painter</b>
        </td>
        <td>I</td>
        <td>
          <span class="verb">wasn't</span>
        </td>
        <td rowspan="2" colspan="2" class="wideBorderRight">
          <b>a painter</b>
        </td>
      </tr>
      <tr>
        <td>
          <span class="verb">Was</span>
        </td>
        <td>He<br />She<br />It</td>
        <td>He<br />She<br />It</td>
        <td>
          <span class="verb">was</span>
        </td>
        <td>He<br />She<br />It</td>
        <td>
          <span class="verb">wasn't</span>
        </td>
      </tr>
      <tr>
        <td class="wideBorderBottom">
          <span class="verb">Were</span>
        </td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td colspan="2" class="wideBorderRight wideBorderBottom">
          <b>painters</b>
        </td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">
          <span class="verb">were</span>
        </td>
        <td class="wideBorderRight wideBorderBottom">
          <b>painters</b>
        </td>
        <td class="wideBorderBottom">We<br />You<br />They</td>
        <td class="wideBorderBottom">
          <span class="verb">weren't</span>
        </td>
        <td class="wideBorderRight wideBorderBottom">
          <b>painters</b>
        </td>
      </tr>
    </tbody>
  </table>


  <h2>4. Случаи употребления</h2>
  <p><b>Регулярное действие</b></p>
  <table class="notesTable">
    <tbody>
      <tr>
        <td colspan="2">
          <p class="subHeading"># Происходит в настоящем</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>I <span class="verb">paint</span> pictures</p>
        </td>
        <td class="comment">// Я рисую картины</td>
      </tr>
      <tr>
        <td>
          <p>Pictures are <span class="verb">painted</span> by me</p>
        </td>
        <td class="comment">// Я рисовал картины</td>
      </tr>
      <tr>
        <td>
          <p>I <span class="verb">am</span> a painter</p>
        </td>
        <td class="comment">// Я — художник</td>
      </tr>
      <tr><td colspan="2"></td></tr>
      <td class="subHeading" colspan="2"># Завершилось в прошлом</td>
      <tr>
        <td>
          <p>I <span class="verb">painted</span> pictures</p>
        </td>
        <td class="comment">// Я рисовал картины</td>
      </tr>
      <tr>
        <td>
          <p>Pictures were <span class="verb">painted</span> by painters</p>
        </td>
        <td class="comment">// Картины рисуются художниками</td>
      </tr>
      <tr>
        <td>
          <p>I <span class="verb">was</span> a painter</p>
        </td>
        <td class="comment">// Я был художником</td>
      </tr>
      <tr><td colspan="2"></td></tr>
      <tr>
        <td class="subHeading" colspan="2"># Будет происходить в будущем</td>
      </tr>
      <tr>
        <td>
          <p>I will <span class="verb">paint</span> pictures</p>
        </td>
        <td class="comment">// Я буду рисовать картины</td>
      </tr>
      <tr>
        <td>
          <p>Pictures will be <span class="verb">painted</span> by me</p>
        </td>
        <td class="comment">// Картины будут рисоваться художниками</td>
      </tr>
      <tr>
        <td>
          <p>I <span class="verb">will be</span> a painter</p>
        </td>
        <td class="comment">// Я буду художником</td>
      </tr>
    </tbody>
  </table>
  <br/>
  <p><b>Разовое действие</b></p>
  <table class="notesTable">
    <tbody>
      <tr>
        <td class="subHeading" colspan="2"># Выполнено в прошлом</td>
      </tr>
      <tr>
        <td>I <span class="verb">painted</span> a picture and <span class="verb">went</span> home</td>
        <td class="comment">// Я нарисовал картину и пошёл домой</td>
      </tr>
      <tr>
        <td>That picture was <span class="verb">painted</span> and <span class="verb">sold</span></td>
        <td class="comment">// Та картина была нарисована и продана</td>
      </tr>
      <tr>
        <td class="subHeading" colspan="2"># Будет выполнено в будущем</td>
      </tr>
      <tr>
        <td>I will <span class="verb">paint</span> this picture</td>
        <td class="comment">// Я нарисую картину</td>
      </tr>
      <tr>
        <td>This picture will be <span class="verb">painted</span></td>
        <td class="comment">// Эта картина будет нарисована</td>
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