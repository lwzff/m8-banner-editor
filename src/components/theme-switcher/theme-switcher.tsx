import MoonIcon from '../../assets/icons/moon-icon';
import SunIcon from '../../assets/icons/sun-icon';
import { useTranslation } from '../../i18n';
import { useTheme } from '../../theme';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-background-secondary border border-border text-foreground-primary hover:text-foreground-accent transition-colors"
      aria-label={
        theme === 'light' ? t('theme.switchToDark') : t('theme.switchToLight')
      }
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeSwitcher;
