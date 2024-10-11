import Header from "../Components/Header";
import Card from "../Components/Card";
import ActionButtons from "../Components/ActionButtons";
import { useExam } from "../hooks/useExam";
import { LuLoader2 } from "react-icons/lu";

const Home = () => {
  const { questions, currentQuestionIndex, selectedAnswer, isAnswerSubmitted, quizCompleted, score, timeLeft, isLoading, error, handleAnswerSelect, handleSubmit, isTimeUp, handleNext, restartQuiz } = useExam();

  if (quizCompleted) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-lg shadow-md p-4 max-w-md">
          <h2 className={`text-3xl font-bold text-center ${isTimeUp ? "text-red-500" : "text-lime-500"}`}>{isTimeUp ? "Time's Up!" : "Quiz Results"}</h2>
          <div className="flex justify-center items-center mt-2">
            <div className="flex flex-col items-center">
              <p className="text-2xl font-semibold">Your Score :</p>
              <h3 className="text-4xl font-bold text-lime-600">
                {score}/{questions.length}
              </h3>
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="px-6 py-3 bg-lime-600 font-medium text-white rounded-lg hover:bg-lime-700" onClick={restartQuiz}>
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center">
          <LuLoader2 className="w-12 h-12 animate-spin text-lime-600" />
          <p className="mt-4 text-gray-600 font-medium">Loading Questions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600">
        Error: {error}
        <button onClick={restartQuiz} className="ml-4 px-4 py-2 bg-lime-600 text-white rounded-lg">
          Try Again
        </button>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div>No questions available.</div>;
  }

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <Header timeLeft={timeLeft} score={score} currentQuestionIndex={currentQuestionIndex} totalQuestions={questions.length} progress={progress} />
        <Card question={questions[currentQuestionIndex]} selectedAnswer={selectedAnswer} isAnswerSubmitted={isAnswerSubmitted} onAnswerSelect={handleAnswerSelect} />
        <ActionButtons isAnswerSubmitted={isAnswerSubmitted} selectedAnswer={selectedAnswer} currentQuestionIndex={currentQuestionIndex} totalQuestions={questions.length} onSubmit={handleSubmit} onNext={handleNext} />
      </div>
    </div>
  );
};

export default Home;
