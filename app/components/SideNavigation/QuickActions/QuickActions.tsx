import styles from './QuickActions.module.css';
import { AtIcon, FileIcon, GlobeIcon } from '~/components/Icons';
import { clsx } from 'clsx';

export type languageCode = 'en' | 'he' | 'nl';

export interface Language {
  code: languageCode;
  name: string;
}

export interface QuickActionsProps {
  language: {
    active: languageCode;
    onChange: (lang: languageCode) => void;
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

export default function Avatar({
  language,
  resume,
  contact,
}: QuickActionsProps) {
  return (
    <div role="document" className={styles.container}>
      <div className={styles.languageContainer}>
        {language.allowed.map((lang) => {
          return (
            <div
              role="button"
              key={lang.code}
              onClick={() => language.onChange(lang.code)}
              className={clsx(styles.quickButton, styles.language)}
            >
              <GlobeIcon aria-label={lang.name} className={styles.icon} />
              <div className={styles.languageText}>{lang.name}</div>
              <div> ⌃ </div>
            </div>
          );
        })}
      </div>
      <div role="button" className={clsx(styles.quickButton, styles.resume)}>
        <FileIcon aria-label={resume.label} className={styles.icon} />
        {resume.label}
      </div>
      <div role="button" className={clsx(styles.quickButton, styles.email)}>
        <AtIcon aria-label={contact.label} className={styles.icon} />
        {contact.email}
      </div>
    </div>
  );
}
