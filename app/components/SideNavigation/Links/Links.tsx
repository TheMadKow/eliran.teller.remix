import { NavLink } from "@remix-run/react";
import styles from "./Links.module.css";
export interface LinksProps {
  links: LinkItem[];
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
}

export default function Menu({ links }: LinksProps) {
  return (
    <div className={styles.container}>
      {links.map((link) => (
        <NavLink className={styles.link} key={link.id} to={link.url}>
          {({ isActive }) => (
            <div
              className={`${styles.linkBox} ${
                isActive ? styles.linkBoxActive : ""
              }`}
            >
              <span>O</span>
              <span>{link.title}</span>
            </div>
          )}
        </NavLink>
      ))}
    </div>
  );
}
