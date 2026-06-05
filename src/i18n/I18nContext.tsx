import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { en } from './locales/en';
import { fr } from './locales/fr';
import type { Locale, Translation } from './types';

const translations: Record<Locale, Translation> = { fr, en };

const STORAGE_KEY = 'locale';

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const getNestedValue = (obj: Translation, path: string): string => {
  const value = path.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);

  return typeof value === 'string' ? value : path;
};

const interpolate = (
  template: string,
  params?: Record<string, string | number>,
) => {
  if (!params) return template;

  return Object.entries(params).reduce(
    (str, [key, value]) =>
      str.replace(new RegExp(`{{${key}}}`, 'g'), String(value)),
    template,
  );
};

const getInitialLocale = (): Locale => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === 'en' || saved === 'fr' ? saved : 'fr';
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const t = useCallback(
    (key: string, params?: Record<string, string | number>) => {
      const template = getNestedValue(translations[locale], key);
      return interpolate(template, params);
    },
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }

  return context;
};
