import { M8Icon } from '../../assets/icons';
import { useTranslation } from '../../i18n';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="flex justify-center flex-col w-full mt-14">
      <h1 className="text-foreground-primary text-center text-4xl font-bold leading-10 font-cal">
        {t('header.titleBeforeIcon')}{' '}
        <span className="whitespace-nowrap">
          <M8Icon /> {t('header.titleAfterIcon')}
        </span>
        <br />
        <span className="text-foreground-accent">{t('header.titleAccent')}</span>
      </h1>
      <p className="text-foreground-accent text-xs text-center mt-5 py-1.5 px-3 bg-background-accent rounded-full w-fit mx-auto">
        {t('header.madeWith')}{' '}
        <a
          href="https://x.com/ZzAK_K"
          className="font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ZzAK_K
        </a>
        , {t('header.designBy')}{' '}
        <a
          href="https://x.com/reaiucas"
          className="font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          @reaiucas
        </a>
      </p>
    </header>
  );
};

export default Header;
