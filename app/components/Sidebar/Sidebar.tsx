import styles from './Sidebar.module.css';
import type { LinksProps } from './Links/Links';
import Links from './Links/Links';
import type { AvatarProps } from './Avatar/Avatar';
import Avatar from './Avatar/Avatar';
import type { QuickActionsProps } from './QuickActions/QuickActions';
import QuickActions from './QuickActions/QuickActions';
export interface SidebarProps {
  links: LinksProps;
  avatar: AvatarProps;
  quickActions: QuickActionsProps;
}

export default function Sidebar({ links, avatar, quickActions }: SidebarProps) {
  return (
    <div role="menubar" className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <Avatar {...avatar} />
        <Links {...links} />
      </div>
      <div className={styles.bottomContainer}>
        <QuickActions {...quickActions} />
      </div>
    </div>
  );
}
