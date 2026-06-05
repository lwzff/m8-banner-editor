import { GithubIcon } from '../../assets/icons';
import { useTranslation } from '../../i18n';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="p-4 text-center text-foreground-secondary font-figtree text-sm mb-2">
      <div className="flex justify-center mb-1">
        <a
          href="https://github.com/zachdlz/m8-banner-editor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      </div>
      <p>
        {t('footer.freeTool')} <br className="sm:hidden" />
        {t('footer.supportedBy')}{' '}
        <a
          href="https://thegreensuits.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit mx-auto font-semibold"
        >
          The Green Suits
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
