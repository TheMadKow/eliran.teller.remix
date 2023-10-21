import type { ReactNode } from 'react';
import styles from './Layout.module.css';
import type { SidebarProps } from '../Sidebar/Sidebar';
import Sidebar from '../Sidebar/Sidebar';

export interface LayoutProps {
  children: ReactNode;
  sidebar: SidebarProps;
}

export default function Layout({ children, sidebar }: LayoutProps) {
  return (
    <div className={styles.root}>
      <Sidebar {...sidebar} />
      {children}
    </div>
  );
}
