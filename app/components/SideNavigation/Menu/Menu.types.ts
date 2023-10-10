export interface MenuProps {
    items: MenuItem[];
    activeId: string;
}

export interface MenuItem {
    id: string;
    title: string;
    url: string;
}