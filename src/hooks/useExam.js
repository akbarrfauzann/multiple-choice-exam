import { useState, useEffect } from "react";
import { fetchQuestions } from "../services/api";
import { useTimer } from "./useTimer.js";

export const useExam = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const { timeLeft, startTimer, stopTimer, resetTimer } = useTimer(3600, () => {
    setIsTimeUp(true);
    setQuizCompleted(true);
  });

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setIsLoading(true);
        const data = await fetchQuestions();
        setQuestions(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadQuestions();
  }, []);

  const handleAnswerSelect = (answer) => {
    if (!isAnswerSubmitted && !isTimeUp) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null && !isAnswerSubmitted && !isTimeUp) {
      setIsAnswerSubmitted(true);
      if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
        setScore(score + 1);
      }

      if (currentQuestionIndex === questions.length - 1) {
        setQuizCompleted(true);
        stopTimer();
      }
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else if (isAnswerSubmitted) {
      setQuizCompleted(true);
      stopTimer();
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizCompleted(false);
    setIsTimeUp(false);
    resetTimer();
    startTimer();
  };

  return {
    questions,
    currentQuestionIndex,
    selectedAnswer,
    isAnswerSubmitted,
    quizCompleted,
    score,
    timeLeft,
    isLoading,
    error,
    isTimeUp,
    handleAnswerSelect,
    handleSubmit,
    handleNext,
    restartQuiz,
  };
};
