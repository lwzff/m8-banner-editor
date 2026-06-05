export type Locale = 'fr' | 'en';

export type Translation = {
  header: {
    titleBeforeIcon: string;
    titleAfterIcon: string;
    titleAccent: string;
    madeWith: string;
    designBy: string;
  };
  footer: {
    freeTool: string;
    supportedBy: string;
  };
  artists: {
    title: string;
  };
  preview: {
    title: string;
    size: string;
    download: string;
    copy: string;
  };
  playground: {
    title: string;
    username: string;
    role: string;
    supporterLevel: string;
    maxChars: string;
    lengthLimited: string;
    reset: string;
  };
  toast: {
    copySuccess: string;
    copyError: string;
  };
  language: {
    switch: string;
    fr: string;
    en: string;
  };
  theme: {
    switchToDark: string;
    switchToLight: string;
  };
};
