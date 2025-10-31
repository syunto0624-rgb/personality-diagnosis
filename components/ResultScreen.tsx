import React from 'react';
import { PersonalityResult } from '../types';
import { StrengthsIcon } from './icons/StrengthsIcon';
import { WeaknessesIcon } from './icons/WeaknessesIcon';
import { CompatibilityIcon } from './icons/CompatibilityIcon';
import { translations } from '../i18n';

interface ResultScreenProps {
  result: PersonalityResult;
  onRestart: () => void;
  t: (typeof translations)['ja'];
}

const ResultCard: React.FC<{
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, icon, children }) => (
  <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30 w-full">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-2xl font-bold ml-3 text-white">{title}</h3>
    </div>
    <div className="text-white/90">{children}</div>
  </div>
);

export const ResultScreen: React.FC<ResultScreenProps> = ({ result, onRestart, t }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full w-full p-4 sm:p-6 md:p-8">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">
            {t.personalityTypeResult.replace('{type}', result.personalityType)}
          </h1>
          <p className="text-xl text-white/90 drop-shadow">{t.resultsTitle}</p>
        </div>

        <div className="space-y-6">
          <ResultCard title={t.strengthsTitle} icon={<StrengthsIcon className="w-8 h-8 text-yellow-300" />}>
            <ul className="space-y-2 list-inside">
              {result.strengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-300 mr-2">◆</span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </ResultCard>

          <ResultCard title={t.weaknessesTitle} icon={<WeaknessesIcon className="w-8 h-8 text-cyan-300" />}>
             <ul className="space-y-2 list-inside">
              {result.weaknesses.map((weakness, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-cyan-300 mr-2">◇</span>
                  <span>{weakness}</span>
                </li>
              ))}
            </ul>
          </ResultCard>

          <ResultCard title={t.compatibilityTitle} icon={<CompatibilityIcon className="w-8 h-8 text-rose-400" />}>
            <div className="space-y-2">
                <h4 className="font-bold text-lg">{result.compatibility.title}</h4>
                <p>{result.compatibility.description}</p>
            </div>
          </ResultCard>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onRestart}
            className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            {t.restartButton}
          </button>
        </div>
      </div>
    </div>
  );
};