import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const GoalInput = ({ setGoals }) => {
  const [text, setText] = useState("");

  function handleAddGoal() {
    if (!text.trim()) return Alert.alert("Please enter a goal");

    setGoals((prevGoals) => [
      { title: text, id: Math.random().toString() },
      ...prevGoals,
    ]);
    clearField();
  }

  function clearField() {
    setText("");
  }

  function clearGoals() {
    setGoals([]);
  }

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter your next goal"
        value={text}
        onChangeText={(val) => setText(val)}
      />

      <View style={styles.btnContainer}>
        <Button title="Add Goal" onPress={() => handleAddGoal()} />

        <Button
          title="Clear Text"
          color="#f194ff"
          onPress={() => clearField()}
        />

        <Button
          title="Clear All Goals"
          color="#f22"
          onPress={() => clearGoals()}
        />
      </View>
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  formContainer: {
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#242B2E",
    padding: 10,
  },

  btnContainer: {
    flexDirection: "row",
    gap: 10,
    margin: "auto",
  },
});
