import React, { useState, useMemo } from 'react';
import { Question, Answer } from '../types';
import { translations } from '../i18n';

interface QuizScreenProps {
  onQuizComplete: (answers: Answer[]) => void;
  questions: Question[];
  t: (typeof translations)['ja'];
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ onQuizComplete, questions, t }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentQuestion = useMemo(() => questions[currentQuestionIndex], [questions, currentQuestionIndex]);
  const progress = useMemo(() => ((currentQuestionIndex) / questions.length) * 100, [currentQuestionIndex, questions.length]);

  const handleAnswer = (optionText: string, event: React.MouseEvent<HTMLButtonElement>) => {
    if (isAnimating) return;
    
    // Remove focus from the button immediately on click to prevent sticky focus ring
    event.currentTarget.blur();

    const newAnswer: Answer = {
      question: currentQuestion.text,
      answer: optionText,
    };
    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);
    setIsAnimating(true);

    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        } else {
            onQuizComplete(updatedAnswers);
        }
        setIsAnimating(false);
    }, 400); // Animation duration
  };

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-full p-4 text-white">
      <div className="w-full max-w-2xl">
        {/* Progress Bar and Counter */}
        <div className="mb-8">
          <p className="text-center text-xl font-semibold mb-2 drop-shadow">
            {t.quizProgress
                .replace('{current}', String(currentQuestionIndex + 1))
                .replace('{total}', String(questions.length))}
          </p>
          <div className="w-full bg-white/30 rounded-full h-2.5">
            <div
              className="bg-yellow-300 h-2.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className={`transition-all duration-300 ease-in-out ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-white/30">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                {currentQuestion.text}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentQuestion.options.map((option) => (
                <button
                    key={option.id}
                    onClick={(e) => handleAnswer(option.text, e)}
                    className="w-full p-4 bg-white/20 text-white font-semibold rounded-lg text-left transition-all duration-200 hover:bg-white/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                >
                    {option.text}
                </button>
                ))}
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};
