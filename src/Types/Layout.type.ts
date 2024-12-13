import { ChangeEvent } from "react";

export interface LayoutStateProps {
    responsiveSearch: boolean;
    pinedMenu: string[];
    sideBarToggle: boolean;
    isSearchBarOpen: boolean;
}

export interface SidebarMenuItem {
    title?: string;
    lanClass?: string;
    menucontent?: string;
    items?: SidebarMenuItem[];
    id?: number;
    icon?: string;
    type?: string;
    active?: boolean;
    children?: SidebarMenuItem[];
    path?: string;
    mainTitle?: string;
    bookmark?: boolean;
    badge?: boolean;
    badgeName?: string;
}

export interface MenuListType {
    menu?: SidebarMenuItem[] | undefined;
    level: number;
    className?: string;
    setActiveMenu: Function;
    activeMenu: unknown[];
}

export interface SidebarItemLists {
    id?: number;
    title?: string | undefined;
    icon?: string;
    type?: string;
    active?: boolean;
    path?: string;
    children?: SidebarChildrenType[];
    lanClass?: string;
}

export interface SidebarItemTypes {
    item: SidebarItemLists;
}

export interface SidebarChildrenType {
    path?: string;
    title: string;
    type: string;
    lanClass?: string;
    children?: SubChildrenType[];
}

export interface SubChildrenType {
    title: string;
    type: string;
    path: string;
}

export interface SearchInputProp {
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchResultProp {
    suggestion: SidebarMenuItem[];
}

export interface SearchBarContainProps {
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
    suggestion: SidebarMenuItem[];
};

export interface BookMarkContainerProps {
    bookmarkList: SidebarMenuItem[];
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
    handleBookmark: (event: React.MouseEvent<HTMLElement, MouseEvent>, data: SidebarMenuItem) => void;
    bookmarkItems: SidebarMenuItem[];
}

export interface BookmarkListProps {
    bookmarkList: SidebarMenuItem[];
};

export interface FlipBackContentProps {
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
    handleBookmark: (event: React.MouseEvent<HTMLElement, MouseEvent>, data: SidebarMenuItem) => void;
    bookmarkItems: SidebarMenuItem[];
}

export interface SearchSuggestionItem {
    icon: string | undefined;
    title: string;
    path: string;
    bookmarked?: boolean;
    id?: number
}

export interface TabCustomizerType {
    toggle: () => void;
}
export interface LtrDataType {
    handleLayout: (item: string) => void,
    layout_type: string
}

export interface SidebarIconProp {
    handleSideBarIconType: (data: string) => void;
};

export interface MixLayoutComponentProp {
    handleCustomizerMix_Background: (item: string) => void;
    mixLayout: string;
};

export interface PropsLightColor {
    primary: string,
    secondary: string
}

export interface ConfigurationProp {
    modalToggle: () => void;
    modal: boolean;
}

export interface SearchSuggestionItem {
    icon: string | undefined;
    title: string;
    path: string;
    bookmarked?: boolean;
    id?: number;
}

export interface SearchSuggestionListType {
    searchedArray: SearchSuggestionItem[];
}
