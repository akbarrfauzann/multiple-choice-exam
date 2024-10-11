import { FaRegClock, FaAward } from "react-icons/fa";

const Header = ({ timeLeft, score, currentQuestionIndex, totalQuestions, progress }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Multiple Choice Exam</h1>
        <div className="flex items-center space-x-2 text-black">
          <FaRegClock className="w-5 h-5" />
          <span className="font-mono font-medium">{formatTime(timeLeft)}</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <FaAward className="w-4 h-4" />
          <span>
            Score: {score}/{totalQuestions}
          </span>
        </div>
        <span>
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </span>
      </div>

      <div className="w-full h-2 bg-gray-200 rounded-full mt-4 overflow-hidden">
        <div className="h-full bg-lime-600 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default Header;
