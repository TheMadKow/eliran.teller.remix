import styles from './QuickActions.module.css';
import { AtIcon, FileIcon, GlobeIcon } from '~/components/Icons';
import { clsx } from 'clsx';

export interface Language {
  code: 'en' | 'he' | 'nl';
  name: string;
}

export interface QuickActionsProps {
  language: {
    active: Language;
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
      <div className={clsx(styles.quickButton, styles.language)} role="button">
        <GlobeIcon aria-label={language.active.name} className={styles.icon} />
        {language.active.name}
      </div>
      <div role="button" className={clsx(styles.quickButton, styles.resume)}>
        <FileIcon aria-label={resume.label} className={styles.icon} />
        {resume.label}
      </div>
      <div role="button" className={clsx(styles.quickButton, styles.email)}>
        <AtIcon aria-label={contact.label} className={styles.icon} />
      </div>
    </div>
  );
}
