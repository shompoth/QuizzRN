import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import QuestionCard from "../components/QuestionCard";
import { FontAwesome6 } from "@expo/vector-icons";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import { useQuizContext } from "../providers/QuizProvider";
import { useEffect } from "react";
import useTimer from "../hooks/useTimer";
import LottieView from "lottie-react-native";

const QuizScreen = () => {
  const { question, questionIndex, onNext, score, bestScore, totalQuestion } =
    useQuizContext();

  const { time, startTimer, clearTimer } = useTimer(20);

  useEffect(() => {
    clearTimer();
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
          {questionIndex + 1 <= totalQuestion && (
            <Text style={styles.title}>
              Question {questionIndex + 1}/{totalQuestion}
            </Text>
          )}
        </View>

        {/* Body */}
        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.time}>{time} sec</Text>
          </View>
        ) : (
          <>
            <LottieView
              autoPlay
              loop={false}
              source={require("../../assets/party.json")}
              style={StyleSheet.absoluteFill}
            />
            <Card title="Well done">
              <Text>
                Correct Answers: {score}/{totalQuestion}
              </Text>
              <Text>Best score: {bestScore}</Text>
            </Card>
          </>
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
