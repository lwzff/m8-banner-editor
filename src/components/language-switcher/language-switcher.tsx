import { useEffect, useRef, useState } from 'react';
import GlobeIcon from '../../assets/icons/globe-icon';
import { useTranslation, type Locale } from '../../i18n';

const LOCALES: Locale[] = ['fr', 'en'];

const LanguageSwitcher = () => {
  const { locale, setLocale, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="fixed top-6 right-6 z-50 font-figtree">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-border text-foreground-primary hover:text-foreground-accent transition-colors"
        aria-label={t('language.switch')}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <GlobeIcon />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 min-w-[140px] bg-white border border-border rounded-lg overflow-hidden shadow-sm"
        >
          {LOCALES.map((lang) => (
            <li
              key={lang}
              role="option"
              aria-selected={locale === lang}
              className="hover:bg-background-accent transition-colors"
            >
              <button
                type="button"
                onClick={() => {
                  setLocale(lang);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm ${
                  locale === lang
                    ? 'text-foreground-accent font-semibold'
                    : 'text-foreground-primary'
                }`}
              >
                {t(`language.${lang}`)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
