import { createContext, PropsWithChildren, useContext, useState } from "react";
import questions from "../questions";
import { Question } from "../types";

type QuizContext = {
  questionIndex: number;
  onNext: () => void;
  question?: Question;
  selectedOption?: string;
  setSelectedOption: (newOption: string) => void;
  score: number;
  totalQuestion: number;
};

const QuizContext = createContext<QuizContext>({
  questionIndex: 0,
  onNext: () => {},
  setSelectedOption: () => {},
  score: 0,
  totalQuestion: 0,
});

const QuizProvider = ({ children }: PropsWithChildren) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];

  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [score, setScore] = useState(0);

  const isFinished = questionIndex >= questions.length;

  const restart = () => {
    setQuestionIndex(0);
    setSelectedOption("");
    setScore(0);
  };

  const onNext = () => {
    if (isFinished) {
      restart();
      return;
    }

    if (selectedOption === question?.correctAnswer) {
      setScore((currentValue) => currentValue + 1);
    }

    setQuestionIndex((currentValue) => currentValue + 1);
  };

  return (
    <QuizContext.Provider
      value={{
        question,
        questionIndex,
        onNext,
        selectedOption,
        setSelectedOption,
        score,
        totalQuestion: questions.length,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);

export default QuizProvider;