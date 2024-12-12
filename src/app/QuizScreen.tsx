import { Text, View, StyleSheet, SafeAreaView, Pressable } from "react-native";
import QuestionCard from "../components/QuestionCard";
import { FontAwesome6 } from "@expo/vector-icons";
import questions from "../questions";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import { useQuizContext } from "../providers/QuizProvider";
import { useEffect, useState } from "react";

const QuizScreen = () => {
  const { question, questionIndex, onNext, score, bestScore, totalQuestion } =
    useQuizContext();

  const [time, setTime] = useState(20);

  useEffect(() => {
    setTime(20);

    const interval = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [question]);

  useEffect(() => {
    if (time <= 0) {
      onNext();
    }
  }, [time]);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View>
          <Text style={styles.title}>
            Question {questionIndex + 1}/{totalQuestion}
          </Text>
        </View>

        {/* Body */}
        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.time}>20 sec</Text>
          </View>
        ) : (
          <Card title="Well done">
            <Text>
              Correct Answers: {score}/{totalQuestion}
            </Text>
            <Text>Best score: {bestScore}</Text>
          </Card>
        )}

        {/* Footer */}
        <CustomButton
          title="Done"
          rightIcon={
            <FontAwesome6 name="arrow-right-long" size={16} color="white" />
          }
          onPress={onNext}
          onLongPress={() => console.warn("On long press")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#FDFEF4" },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    textAlign: "center",
    color: "#005055",
  },
  time: {
    textAlign: "center",
    marginTop: 15,
    fontWeight: "bold",
    color: "#005055",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  buttonIcon: {
    marginLeft: "auto",
    position: "absolute",
    right: 20,
  },
});

export default QuizScreen;
