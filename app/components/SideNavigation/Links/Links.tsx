import { NavLink } from '@remix-run/react';
import styles from './Links.module.css';
import type { ReactNode } from 'react';
import type { IconProps } from '~/components/Icons/types';
export interface LinksProps {
  links: LinkItem[];
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  Icon: (props: Partial<IconProps>) => ReactNode;
}

export default function Menu({ links }: LinksProps) {
  return (
    <div role="document" className={styles.container}>
      {links.map((link) => (
        <NavLink className={styles.link} key={link.id} to={link.url}>
          {({ isActive }) => (
            <div
              className={`${styles.linkBox} ${
                isActive ? styles.linkBoxActive : ''
              }`}
            >
              <link.Icon aria-label={link.title} />
              <span>{link.title}</span>
            </div>
          )}
        </NavLink>
      ))}
    </div>
  );
}
