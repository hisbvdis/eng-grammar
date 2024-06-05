import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, TouchableHighlight } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from '@expo/vector-icons';
// -----------------------------------------------------------------------------
import type Lessons from "@/assets/lessons";


export default function LessonsPage() {
  const [ lessons, setLessons ] = useState<Lessons>([]);

  useEffect(() => {(async () => {
    const lessonsJson = await AsyncStorage.getItem("lessons");
    if (!lessonsJson) return;
    const lessonsArray = JSON.parse(lessonsJson) as Lessons;
    setLessons(lessonsArray);
  })()}, [])

  return (
    <View>
      <Stack.Screen options={{title: "Уроки"}}/>
      <FlatList
        style={styles.list}
        data={lessons}
        renderItem={({item}) => (
          <TouchableHighlight underlayColor="#fff">
            <View style={styles.list__item}>
              <View>
                <Text style={styles.list__Title}>Урок {item.number}</Text>
                <Text>{item.title}</Text>
              </View>
              <AntDesign name="right" size={15} color="black" />
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {},
  list__item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  list__Title: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "500",
  }
})