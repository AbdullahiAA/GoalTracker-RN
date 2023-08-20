import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  // GOAL Typings: {id: string, title: string}
  const [goals, setGoals] = useState([]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <GoalInput setGoals={setGoals} />

        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={({ item }) => (
              <GoalItem item={item} setGoals={setGoals} />
            )}
            keyExtractor={(item) => item?.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 42,
    backgroundColor: "#CAD5E2",
    gap: 20,
  },

  goalsContainer: {
    flex: 1,
    gap: 4,
    width: "100%",
  },
});
