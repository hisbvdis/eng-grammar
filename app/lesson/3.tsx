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

    h2:first-of-type {
      margin-block-start: 0;
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
  <div style="overflow-y: scroll; max-width: 100%;">
    <h2>1. Формирование (актив)</h2>
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
          <td rowspan="3" class="wideBorderBottom">Will</td>
          <td>I</td>
          <td rowspan="3" class="wideBorderBottom">have</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span><b>ed</b>
            (<span class="verb">V</span><b>3</b>)
          </td>
          <td>I</td>
          <td rowspan="3" class="wideBorderBottom">will have</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span><b>ed</b>
            (<span class="verb">V</span><b>3</b>)
          </td>
          <td>I</td>
          <td rowspan="3" class="wideBorderBottom">will not have</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span><b>ed</b>
            (<span class="verb">V</span><b>3</b>)
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
          <td>Have</td>
          <td>I</td>
          <td rowspan="3" colspan="2" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span><b>ed</b>
            (<span class="verb">V</span><b>3</b>)
          </td>
          <td>I</td>
          <td>have</td>
          <td rowspan="3" class="wideBorderRight wideBorderBottom">
            <span class="verb">paint</span><b>ed</b>
            (<span class="verb">V</span><b>3</b>)
          </td>
          <td>I</td>
          <td>have not</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span><b>ed</b>
            (<span class="verb">V</span><b>3</b>)
          </td>
        </tr>
        <tr>
          <td>Has</td>
          <td>He<br />She<br />It</td>
          <td>He<br />She<br />It</td>
          <td>has</td>
          <td>He<br />She<br />It</td>
          <td>hasn't</td>
        </tr>
        <tr>
          <td class="wideBorderBottom">Have</td>
          <td class="wideBorderBottom">We<br />You<br />They</td>
          <td class="wideBorderBottom">We<br />You<br />They</td>
          <td class="wideBorderBottom">have</td>
          <td class="wideBorderBottom">We<br />You<br />They</td>
          <td class="wideBorderBottom">haven't</td>
        </tr>
        <tr>
          <td rowspan="3" class="heading heading--aside">Прошедшее</td>
          <td rowspan="3" class="wideBorderBottom">Had</td>
          <td>I</td>
          <td rowspan="3" colspan="2" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span><b>ed</b>
            (<span class="verb">V</span><b>3</b>)
          </td>
          <td>I</td>
          <td rowspan="3" class="wideBorderBottom">had</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span><b>ed</b>
            (<span class="verb">V</span><b>3</b>)
          </td>
          <td>I</td>
          <td rowspan="3" class="wideBorderBottom">hadn't</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span><b>ed</b>
            (<span class="verb">V</span><b>3</b>)
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
          <td class="heading" colspan="4">Вопрос</td>
          <td class="heading" colspan="4">Утверждение</td>
          <td class="heading" colspan="4">Отрицание</td>
        </tr>
        <tr>
          <td rowspan="3" class="heading heading--aside">Будущее</td>
          <td rowspan="3" class="wideBorderBottom">Will</td>
          <td>I</td>
          <td rowspan="3" class="wideBorderBottom">have been</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span><b>ed</b>
            (<span class="verb">V</span><b>3</b>)
          </td>
          <td>I</td>
          <td rowspan="3" class="wideBorderBottom">will have</td>
          <td rowspan="3" class="wideBorderBottom">been</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span><b>ed</b>
            (<span class="verb">V</span><b>3</b>)
          </td>
          <td>I</td>
          <td rowspan="3" class="wideBorderBottom">will not have</td>
          <td rowspan="3" class="wideBorderBottom">been</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span><b>ed</b>
            (<span class="verb">V</span><b>3</b>)
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
          <td>Have</td>
          <td>I</td>
          <td rowspan="3" class="wideBorderBottom">been</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span><b>ed</b>
            (<span class="verb">V</span><b>3</b>)
          </td>
          <td>I</td>
          <td>have</td>
          <td rowspan="3" class="wideBorderBottom">been</td>
          <td rowspan="3" class="wideBorderRight wideBorderBottom">
            <span class="verb">paint</span><b>ed</b>
            (<span class="verb">V</span><b>3</b>)
          </td>
          <td>I</td>
          <td>haven't</td>
          <td rowspan="3" class="wideBorderBottom">been</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span><b>ed</b>
            (<span class="verb">V</span><b>3</b>)
          </td>
        </tr>
        <tr>
          <td>Has</td>
          <td>He<br />She<br />It</td>
          <td>He<br />She<br />It</td>
          <td>has</td>
          <td>He<br />She<br />It</td>
          <td>hasn't</td>
        </tr>
        <tr>
          <td class="wideBorderBottom">Have</td>
          <td class="wideBorderBottom">We<br />You<br />They</td>
          <td class="wideBorderBottom">We<br />You<br />They</td>
          <td class="wideBorderBottom">have</td>
          <td class="wideBorderBottom">We<br />You<br />They</td>
          <td class="wideBorderBottom">haven't</td>
        </tr>
        <tr>
          <td rowspan="3" class="heading heading--aside">Прошедшее</td>
          <td rowspan="3" class="wideBorderBottom">Had</td>
          <td>I</td>
          <td rowspan="3" colspan="2" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span><b>ed</b>
            (<span class="verb">V</span><b>3</b>)
          </td>
          <td>I</td>
          <td rowspan="3" class="wideBorderBottom">had</td>
          <td rowspan="3" class="wideBorderBottom">been</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span><b>ed</b>
            (<span class="verb">V</span><b>3</b>)
          </td>
          <td>I</td>
          <td rowspan="3" class="wideBorderBottom">hadn't</td>
          <td rowspan="3" class="wideBorderBottom">been</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">paint</span><b>ed</b>
            (<span class="verb">V</span><b>3</b>)
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
          <td rowspan="3" class="wideBorderBottom">Will</td>
          <td>I</td>
          <td rowspan="3" class="wideBorderBottom">have</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">been</span>
            (<span class="verb">V</span><b>3</b>)
          </td>
          <td>I</td>
          <td rowspan="3" class="wideBorderBottom">will have</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">been</span>
            (<span class="verb">V</span><b>3</b>)
          </td>
          <td>I</td>
          <td rowspan="3" class="wideBorderBottom">will not have</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">been</span>
            (<span class="verb">V</span><b>3</b>)
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
          <td>Have</td>
          <td>I</td>
          <td rowspan="3" colspan="2" class="wideBorderBottom wideBorderRight">
            <span class="verb">been</span>
            (<span class="verb">V</span><b>3</b>)
          </td>
          <td>Has</td>
          <td>have</td>
          <td rowspan="3" class="wideBorderRight wideBorderBottom">
            <span class="verb">been</span>
            (<span class="verb">V</span><b>3</b>)
          </td>
          <td>I</td>
          <td>have not</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">been</span>
            (<span class="verb">V</span><b>3</b>)
          </td>
        </tr>
        <tr>
          <td>Has</td>
          <td>He<br />She<br />It</td>
          <td>He<br />She<br />It</td>
          <td>has</td>
          <td>He<br />She<br />It</td>
          <td>hasn't</td>
        </tr>
        <tr>
          <td class="wideBorderBottom">Have</td>
          <td class="wideBorderBottom">We<br />You<br />They</td>
          <td class="wideBorderBottom">We<br />You<br />They</td>
          <td class="wideBorderBottom">have</td>
          <td class="wideBorderBottom">We<br />You<br />They</td>
          <td class="wideBorderBottom">haven't</td>
        </tr>
        <tr>
          <td rowspan="3" class="heading heading--aside">Прошедшее</td>
          <td rowspan="3" class="wideBorderBottom">Had</td>
          <td>I</td>
          <td rowspan="3" colspan="2" class="wideBorderBottom wideBorderRight">
            <span class="verb">been</span>
            (<span class="verb">V</span><b>3</b>)
          </td>
          <td>I</td>
          <td rowspan="3" class="wideBorderBottom">had</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">been</span>
            (<span class="verb">V</span><b>3</b>)
          </td>
          <td>I</td>
          <td rowspan="3" class="wideBorderBottom">hadn't</td>
          <td rowspan="3" class="wideBorderBottom wideBorderRight">
            <span class="verb">been</span>
            (<span class="verb">V</span><b>3</b>)
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


    <h2>3. Случаи употребления</h2>
    <p><b>Регулярное действие</b></p>
    <table class="notesTable">
      <tbody>
        <tr>
          <td class="subHeading" colspan="2"># Длится к моменту (с указанием длительности)</td>
        </tr>
        <tr>
          <td>I have painted pictures for 20 years </td>
          <td class="comment">// Актив:  Я рисую картины 20 лет</td>
        </tr>
        <tr>
          <td>These pictures have been painted for 20 years</td>
          <td class="comment">// Пассив: Эти картины рисовались 20 лет</td>
        </tr>
        <tr>
          <td>I have been a painter for 20 years</td>
          <td class="comment">// Состоя: Я был художником 20 лет</td>
        </tr>
      </tbody>
    </table>
    <br/>
    <p><b>Разовое действие</b></p>
    <table class="notesTable">
      <tbody>
        <tr>
          <td class="subHeading" colspan="2"># Что сделано к моменту...</td>
        </tr>
        <tr>
          <td class="subHeading" colspan="2"># ...(за период, который длится)</td>
        </tr>
        <tr>
          <td>I have painted 2 pictures. 1 more left</td>
          <td class="comment">// Актив:  Я нарисовал 2 картины. 1 осталась (я в процессе)</td>
        </tr>
        <tr>
          <td>2 pictures have been painted. 1 more left</td>
          <td class="comment">// Пассив: 2 картины были нарисованы. 1 осталась (они в процессе)</td>
        </tr>
        <tr>
          <td class="subHeading" colspan="2"># ... (за всю жизнь) (ever/never/before)</td>
        </tr>
        <tr>
          <td>I have painted 100 pictures</td>
          <td class="comment">// Актив:  Я нарисовал 100 картин (за всю жизнь)</td>
        </tr>
        <tr>
          <td>100 pictures have been painted by me</td>
          <td class="comment">// Пассив: Мною были нарисованы 100 картин (за всю жизнь)</td>
        </tr>
        <tr>
          <td class="subHeading" colspan="2"># ... (в последнее время) (just/yet/already/recently)</td>
        </tr>
        <tr>
          <td>I have already painted a picture </td>
          <td class="comment">// Актив:  Я уже нарисовал картину</td>
        </tr>
        <tr>
          <td>A picture have been already painted</td>
          <td class="comment">// Пассив: Картина уже нарисована</td>
        </tr>
        <tr>
          <td class="subHeading" colspan="2"># Порядковый номер</td>
        </tr>
        <tr>
          <td>I have painted my first picture</td>
          <td class="comment">// Актив:  Я нарисовал мою первую картину (порядковый номер)</td>
        </tr>
        <tr>
          <td>My first picture has been painted</td>
          <td class="comment">// Пассив: Моя первая картина нарисована (порядковый номер)</td>
        </tr>
        <tr>
          <td class="subHeading" colspan="2"># Состояние к моменту в результате действия</td>
        </tr>
        <tr>
          <td>I have lost my wallet</td>
          <td class="comment">// Актив:  Я потерял кошелёк (состояние: у меня нет денег)</td>
        </tr>
        <tr>
          <td>My wallet has been lost</td>
          <td class="comment">// Пассив: Мой кошелёк утерян (состояние: у меня нет денег)</td>
        </tr>
        <tr>
          <td class="subHeading" colspan="2"># Оповещение, что произошло событие (цель — рассказать, что это произошло, а не подробности) (без времени)</td>
        </tr>
        <tr>
          <td>I have painted my first picture </td>
          <td class="comment">// Актив:  Я нарисовал ту картину</td>
        </tr>
        <tr>
          <td>My first picture has been painted</td>
          <td class="comment">// Пассив: Эта картина нарисована мною</td>
        </tr>
      </tbody>
    </table>
  </div>
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