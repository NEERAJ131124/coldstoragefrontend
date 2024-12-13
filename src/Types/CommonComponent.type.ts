export interface SubTitleObjectType {
    text?: string;
    code?: string;
};

export interface CommonCardHeaderTypes {
    headClass?: string;
    title: string;
    subTitle?: SubTitleObjectType[];
    titleClass?: string;
};

export interface TableHeadType {
    class?: string;
    name: string;
}

export interface TableHeaderProp {
    headeData: TableHeadType[]
}

export interface CardHeaderSpanType {
    headerClass?: string;
    heading?: string
    smallHeading?: string
    span?: string
    headingClass?: string
    span2?: string;
    spanClass?: string;
    span2Class?: string;
    smallHeadClass?: string;
}
export interface SocialProfileCardProps {
    id: number;
    avatar: string;
    icon: string;
    name: string;
    email: string;
    totalPost: string;
    follower: string;
    following: string;
}

export interface UsersInitialStateType {
    allUsers: SocialProfileCardProps[];
}

export interface SocialMediaProp {
    className?: string;
}

export interface ProfileHeadProps {
    month: string;
    time: string;
    activeTime: string
}

export interface ProfileDetailProp {
    path: string
}
export interface CommonHeaderWithDropdownProps {
    heading?: string;
    dropDownList: string[];
    headerClass?: string;
    dropDownTitle?: string;
    caret?: boolean;
    dropDownClass?: string;
    dropDownIcon?: boolean;
    mainDivClass?: string;
    headerIconClass?: string;
    start?: boolean;
    end?: boolean;
    span?: string
    span2?: string
    spanClass?: string 
    span2Class?: string
    headingClass?: string
}
export interface CommonChartProps {
    title: string;
    bodyClass?: string;
    data: any;
    colClass?: string;
    divClass?: string;
}
