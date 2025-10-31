import React from 'react';
import { translations } from '../i18n';

interface LoadingScreenProps {
    t: (typeof translations)['ja'];
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ t }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-white p-8">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white mb-6"></div>
      <h2 className="text-3xl font-bold mb-2">{t.loadingTitle}</h2>
      <p className="text-lg">{t.loadingSubtitle}</p>
    </div>
  );
};
