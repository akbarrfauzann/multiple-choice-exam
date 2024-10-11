import { FiArrowRight } from "react-icons/fi";

const ActionButtons = ({ isAnswerSubmitted, selectedAnswer, currentQuestionIndex, totalQuestions, onSubmit, onNext }) => {
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  return (
    <div className="flex justify-end space-x-4">
      {!isAnswerSubmitted ? (
        <button
          className={`px-6 py-3 rounded-md font-medium transition-colors
  ${selectedAnswer ? "bg-lime-600 hover:bg-lime-700 text-white" : "bg-gray-200 text-gray-500 cursor-not-allowed"}`}
          onClick={onSubmit}
          disabled={selectedAnswer === null}
        >
          {isLastQuestion ? "Finish" : "Send"}
        </button>
      ) : (
        <button className="px-6 py-3 rounded-md font-medium transition-colors bg-lime-600 hover:bg-lime-700 text-white flex items-center space-x-2" onClick={onNext}>
          <span>Next Question</span>
          {isLastQuestion ? "Finish" : <FiArrowRight size={20} />}
        </button>
      )}
    </div>
  );
};

export default ActionButtons;
