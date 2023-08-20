import { StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";

const GoalItem = ({ item, setGoals }) => {
  function deleteGoal() {
    setGoals((goals) => goals.filter((goal) => goal.id !== item.id));
  }

  return (
    <TouchableOpacity onPress={deleteGoal}>
      <Text style={styles.goalsText}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalsText: {
    fontWeight: "bold",
    backgroundColor: "#5A20CB",
    color: "white",
    padding: 16,
    borderRadius: 6,
    marginBottom: 4,
  },
});
