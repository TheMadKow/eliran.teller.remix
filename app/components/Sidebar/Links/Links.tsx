import { NavLink } from '@remix-run/react';
import styles from './Links.module.css';
import { CogIcon, FaceIcon } from '~/components/Icons';

export interface LinksProps {
  about: LinkItem;
  cv: LinkItem;
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
}

function LinkIcon({ id, title }: { id: string; title: string }) {
  switch (id) {
    case 'about':
      return <CogIcon aria-label={title} />;
    case 'cv':
      return <FaceIcon aria-label={title} />;
  }

  return null;
}

export default function Menu({ about, cv }: LinksProps) {
  const linkList = [about, cv];
  return (
    <div role="document" className={styles.container}>
      {linkList.map((link) => (
        <NavLink className={styles.link} key={link.id} to={link.url}>
          {({ isActive }) => (
            <div
              className={`${styles.linkBox} ${
                isActive ? styles.linkBoxActive : ''
              }`}
            >
              <LinkIcon id={link.id} title={link.title} />
              <span>{link.title}</span>
            </div>
          )}
        </NavLink>
      ))}
    </div>
  );
}
