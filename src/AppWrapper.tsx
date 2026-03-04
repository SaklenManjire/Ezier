import { useState } from 'react';
import App from './App';
import TermsOfService from './Pages/TermsOfServices';
import PrivacyPolicy from './Pages/PrivacyPolicy';

export default function AppWrapper() {
  const [currentPage, setCurrentPage] = useState<'home' | 'terms' | 'privacy'>('home');

  if (currentPage === 'terms') {
    return <TermsOfService onNavigate={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onNavigate={() => setCurrentPage('home')} />;
  }

  return <App onNavigate={setCurrentPage} />;
}
