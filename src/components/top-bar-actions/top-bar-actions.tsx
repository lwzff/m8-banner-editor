import LanguageSwitcher from '../language-switcher';
import ThemeSwitcher from '../theme-switcher';

const TopBarActions = () => {
  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2 font-figtree">
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  );
};

export default TopBarActions;
