import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import PagerView from "react-native-pager-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useLocalSearchParams } from "expo-router";
// -----------------------------------------------------------------------------
import Container from "@/components/Container";
// -----------------------------------------------------------------------------
import { Lesson, Lessons } from "@/assets/types";
import Btn from "@/components/Btn";


export default function quiz() {
  const params = useLocalSearchParams();
  const type = params.type as "theory"|"exercises";
  const lessonNumber = params.lessonNumber as string;
  const [ lesson, setLesson ] = useState<Lesson>();
  const [ isShowAnswer, setIsShowAnswer ] = useState(false);

  useEffect(() => {(async () => {
    const allLessonsJson = await AsyncStorage.getItem("lessons");
    if (!allLessonsJson) return;
    const allLessonsArray = JSON.parse(allLessonsJson) as Lessons;
    const currentLessonObject = allLessonsArray.find((lesson) => lesson.number === lessonNumber);
    setLesson(currentLessonObject);
  })()}, [])

  return (
    <Container>
      <Stack.Screen options={{title: `${lesson?.number}. ${type === "theory" ? "Проверка теории" : "Упражнения"}`}}/>
      <PagerView style={{flex: 1}} onPageSelected={() => setIsShowAnswer(false)}>
        {lesson && lesson[type].map((item, i, arr) => (
          <View key={item.id}>
            <Text style={{marginTop: "auto", fontSize: 20, textAlign: "center", marginBottom: 50}}>{item.question}</Text>
            {!isShowAnswer && <Btn onPress={() => setIsShowAnswer(true)}>Показать ответ</Btn>}
            {isShowAnswer && <Text style={{fontSize: 20, textAlign: "center"}}>{item.answer}</Text>}
            <View style={{marginTop: "auto", flexDirection: "row", gap: 5, flexWrap: "wrap"}}>
              {arr.map((item, k) => <View style={[{borderRadius: 25, borderWidth: 1, flexBasis: 10, height: 5}, [k <= i && {backgroundColor: "black"}]]}></View>)}
            </View>
          </View>
        ))}
      </PagerView>
    </Container>
  )
}