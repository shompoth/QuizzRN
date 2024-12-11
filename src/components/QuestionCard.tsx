import { useState } from "react";
import { View } from "react-native";
import AnswerOption from "./AnswerOption";
import { Question } from "../types";
import Card from "./Card";

type QuestionCard = {
  question: Question;
};

const QuestionCard = ({ question }: QuestionCard) => {
  return (
    <Card title={question.title}>
      <View style={{ gap: 10 }}>
        {question.options.map((option) => (
          <AnswerOption key={option} option={option} />
        ))}
      </View>
    </Card>
  );
};

export default QuestionCard;
