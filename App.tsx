import React, { useState, useCallback, useMemo } from 'react';
import { GameState, Answer, PersonalityResult, Language } from './types';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { LoadingScreen } from './components/LoadingScreen';
import { ResultScreen } from './components/ResultScreen';
import { analyzePersonality } from './services/geminiService';
import { translations } from './i18n';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Welcome);
  const [results, setResults] = useState<PersonalityResult | null>(null);
  const [language, setLanguage] = useState<Language>('ja');

  const t = useMemo(() => translations[language], [language]);

  const handleStart = useCallback(() => {
    setGameState(GameState.Quiz);
  }, []);
  
  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
  }, []);

  const handleRestart = useCallback(() => {
    setResults(null);
    setGameState(GameState.Welcome);
  }, []);

  const handleQuizComplete = useCallback(async (answers: Answer[]) => {
    setGameState(GameState.Loading);
    const analysisResult = await analyzePersonality(answers, language);
    setResults(analysisResult);
    setGameState(GameState.Results);
  }, [language]);

  const renderContent = () => {
    switch (gameState) {
      case GameState.Welcome:
        return <WelcomeScreen onStart={handleStart} setLanguage={handleSetLanguage} currentLang={language} t={t} />;
      case GameState.Quiz:
        return <QuizScreen onQuizComplete={handleQuizComplete} questions={t.questions} t={t} />;
      case GameState.Loading:
        return <LoadingScreen t={t} />;
      case GameState.Results:
        return results ? <ResultScreen result={results} onRestart={handleRestart} t={t} /> : <LoadingScreen t={t} />;
      default:
        return <WelcomeScreen onStart={handleStart} setLanguage={handleSetLanguage} currentLang={language} t={t} />;
    }
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-y-auto">
        <div className="relative min-h-screen flex items-center justify-center">
            {renderContent()}
        </div>
    </main>
  );
};

export default App;
