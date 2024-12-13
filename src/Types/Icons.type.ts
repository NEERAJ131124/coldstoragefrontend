interface IconItem {
    feathericon?: string;
    icon?: string;
}

export interface IconMarkUpProps {
    icon: IconItem;
    iconTag: { iconTag: string; };
    iconFClass: { iconFClass: string; };
}

export interface IconsBodyProps {
    parentCallback: (tag: string) => void;
}

export interface GetIconTagType {
    getIconTag: (tag: string) => void
}

export interface ThemifyIconBodyProps {
    parentCallback: (tag: string) => void;
    title: string;
    iconType: string[];
}

export interface IconlyIconBodyType {
    getIconTag: (tag: { data: string }) => void
}