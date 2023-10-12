import styles from "./SideNavigation.module.css";
import type { LinksProps } from "./Links/Links";
import Links from "./Links/Links";
import type { AvatarProps } from "./Avatar/Avatar";
import Avatar from "./Avatar/Avatar";
import type { QuickActionsProps } from "./QuickActions/QuickActions";
import QuickActions from "./QuickActions/QuickActions";
export interface SideNavigationProps {
  links: LinksProps;
  avatar: AvatarProps;
  quickActions: QuickActionsProps;
}

export default function Menu({
  links,
  avatar,
  quickActions,
}: SideNavigationProps) {
  return (
    <div className={styles.container}>
      <Avatar {...avatar} />
      <Links {...links} />
      <QuickActions {...quickActions} />
    </div>
  );
}
