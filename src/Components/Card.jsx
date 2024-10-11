import { FaRegCheckCircle } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";

const Card = ({ question, selectedAnswer, isAnswerSubmitted, onAnswerSelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6" aria-live="polite">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">{question.question}</h2>

      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`w-full p-4 text-left rounded-lg transition-all 
  ${!isAnswerSubmitted && "hover:shadow-md"} 
  ${selectedAnswer === option.label ? "border-2 border-lime-500" : "border border-gray-200"} 
  ${isAnswerSubmitted ? (option.label === question.correctAnswer ? "bg-green-50 border-green-500" : selectedAnswer === option.label ? "bg-red-50 border-red-600" : "bg-white") : "bg-white"}`}
            onClick={() => onAnswerSelect(option.label)}
            disabled={isAnswerSubmitted}
          >
            <div className="flex items-center justify-between">
              <span>
                {option.label}. {option.value}
              </span>
              {isAnswerSubmitted && option.label === question.correctAnswer && <FaRegCheckCircle className="w-5 h-5 text-lime-600" />}
              {isAnswerSubmitted && option.label === selectedAnswer && option.label !== question.correctAnswer && <FiXCircle className="w-5 h-5 text-red-600" />}
            </div>
          </button>
        ))}
      </div>

      {isAnswerSubmitted && (
        <div className="mt-6 p-4 rounded-lg bg-gray-50">
          <p className="text-gray-700">
            <span className="font-semibold">Explanation: </span>
            The correct answer is {question.correctAnswer}.
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;
