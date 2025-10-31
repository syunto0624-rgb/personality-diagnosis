import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';
import { Language } from '../types';
import { translations } from '../i18n';

interface WelcomeScreenProps {
  onStart: () => void;
  setLanguage: (lang: Language) => void;
  currentLang: Language;
  t: (typeof translations)['ja'];
}

const languages: { code: Language; label: string }[] = [
  { code: 'ja', label: '日本語' },
  { code: 'en', label: 'English' },
  { code: 'ko', label: '한국어' },
  { code: 'zh', label: '中文' },
];

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, setLanguage, currentLang, t }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-white p-8">
      <div className="absolute top-4 right-4 flex space-x-2 bg-black/20 p-1 rounded-full">
        {languages.map(({ code, label }) => (
          <button
            key={code}
            onClick={() => setLanguage(code)}
            className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-200 ${
              currentLang === code
                ? 'bg-white text-indigo-600 shadow-md'
                : 'text-white hover:bg-white/20'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <SparklesIcon className="w-24 h-24 text-yellow-300 drop-shadow-lg mb-4" />
      <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
        {t.welcomeTitle}
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8 drop-shadow">
        {t.welcomeDescription}
      </p>
      <button
        onClick={onStart}
        className="bg-white text-indigo-600 font-bold py-4 px-10 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-300"
      >
        {t.startButton}
      </button>
    </div>
  );
};
