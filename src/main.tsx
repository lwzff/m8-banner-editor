import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './assets/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { I18nProvider } from './i18n';
import { ThemeProvider } from './theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <I18nProvider>
        <App />
        <Analytics />
      </I18nProvider>
    </ThemeProvider>
  </StrictMode>,
);
