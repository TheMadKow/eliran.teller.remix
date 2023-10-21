import styles from './QuickActions.module.css';
import { AtIcon, ChevronUpIcon, FileIcon, GlobeIcon } from '~/components/Icons';
import { clsx } from 'clsx';
import { useState } from 'react';

export type LanguageCode = 'en' | 'he' | 'nl';

export interface Language {
  code: LanguageCode;
  name: string;
}

interface QuickLanguageProps {
  language: Language;
  onClick: () => void;
  showOption: boolean;
  showToggle: boolean;
}

export interface QuickActionsProps {
  languages: {
    handleChange: (lang: LanguageCode) => void;
    active: LanguageCode;
    allowed: Language[];
  };
  resume: {
    label: string;
    downloadUrl: string;
  };
  contact: {
    email: string;
    label: string;
  };
}

function LanguageSelect({
  language,
  onClick,
  showOption,
  showToggle,
}: QuickLanguageProps) {
  if (!showOption) {
    return null;
  }

  return (
    <div
      role="button"
      key={language.code}
      onClick={onClick}
      className={clsx(styles.quickButton, styles.language)}
    >
      {showToggle && (
        <GlobeIcon
          aria-label={language.name}
          className={clsx(styles.icon, styles.languageIcon)}
        />
      )}
      <div className={styles.languageText}>{language.name}</div>
      {showToggle && <ChevronUpIcon />}
    </div>
  );
}

export default function Avatar({
  languages,
  resume,
  contact,
}: QuickActionsProps) {
  const [showLanguage, setShowLanguage] = useState<boolean>(false);
  const onActiveLanguageClicked = () => {
    setShowLanguage((prev) => !prev);
  };
  const onInactiveLanguageClicked = (lang: LanguageCode) => {
    setShowLanguage(false);
    languages.handleChange(lang);
  };

  const selectedLanguage = languages.allowed.find(
    (lang) => lang.code === languages.active,
  ) || { code: 'en', name: 'English' };

  const popoverLanguages = languages.allowed.filter(
    (lang) => lang.code !== languages.active,
  );

  return (
    <div role="document" className={styles.container}>
      <div className={styles.languageContainer}>
        <LanguageSelect
          language={selectedLanguage}
          onClick={onActiveLanguageClicked}
          showOption={true}
          showToggle={true}
        />

        <div className={styles.languagePopover}>
          {popoverLanguages.map((language) => {
            return (
              <LanguageSelect
                showOption={showLanguage}
                showToggle={false}
                key={language.code}
                language={language}
                onClick={() => onInactiveLanguageClicked(language.code)}
              />
            );
          })}
        </div>
      </div>
      <a
        href={resume.downloadUrl}
        role="button"
        className={clsx(styles.quickButton, styles.resume)}
        download={true}
      >
        <FileIcon aria-label={resume.label} className={styles.icon} />
        {resume.label}
      </a>
      <a
        href={`mailto:${contact.email}`}
        role="button"
        className={clsx(styles.quickButton, styles.email)}
      >
        <AtIcon aria-label={contact.label} className={styles.icon} />
        <div className={styles.emailText}> {contact.email}</div>
      </a>
    </div>
  );
}
