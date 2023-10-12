import styles from "./SideNavigation.module.css";
import Links, { LinksProps } from "./Links/Links";
import Avatar, { AvatarProps } from "./Avatar/Avatar";
export interface SideNavigationProps {
  links: LinksProps;
  avatar: AvatarProps;
}

export default function Menu({ links, avatar }: SideNavigationProps) {
  return (
    <div className={styles.container}>
      <Avatar {...avatar} />
      <Links {...links} />
    </div>
  );
}
