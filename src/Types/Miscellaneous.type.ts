import { ReactNode } from "react";
export interface FilterComponentProps {
    onFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filterText: string;
}

export interface CustomImageType {
    src: string;
    name: string;
}

export interface CustomProgressType {
    value: number;
    color: string;
}

export interface SupportDataType {
    id: number;
    image: string;
    position: string;
    salary: string;
    office: string;
    skillColor: string;
    skillValue: number;
    extn: number;
    email: string;
    name: string;
}

interface AccordionCardData {
    id: string;
    title: string;
    subTitle?: string;
}

export interface CommonAccordionCardProps {
    items: {
        id: number;
        heading: string;
        buttonTitle: string;
        data: AccordionCardData[];
    };
}

export interface RightSidebarCardProps {
    limit?: number;
    colClass?: string;
}

export interface JobSearchItems {
    id: number;
    logo: string;
    job_name: string;
    badgeValue: boolean;
    job_area: string;
    job_city: string;
    Job_description: string;
    type: string;
    ribbon: boolean;
}

export interface JobSearchInitialStateType {
    jobList: JobSearchItems[];
}

interface CheckboxItem {
    id: number;
    type: string;
    text: string;
    name?: string;
    check?: string;
}

export interface CourseCheckboxProps {
    id: number;
    title: string;
    divClass: string
    child: CheckboxItem[];
}

interface CommentItemType {
    id: number;
    src: string;
    name?: string;
    role?: string;
    hits?: string;
    comments?: string;
    paragraph?: string;
}

export interface CommentSectionProps {
    socialComment?: boolean;
    colClass: string;
    item: CommentItemType;
}

interface ArticleVideo {
    id: number;
    colClass: string;
    icon: ReactNode;
    title: string;
    text: string;
}

interface LatestArticlesVideosDataItem {
    id: number;
    child: ArticleVideo[];
}
export interface LatestArticlesVideosProps {
    titleClass?: string;
    divClass?: string;
    data: LatestArticlesVideosDataItem[];
}

interface AccordionCardItems {
    id: number;
    title: string;
}
export interface AccordionCardProp {
    item: AccordionCardItems;
}

export interface FaqWidgetsItems {
    id: number;
    colClass?: string;
    title: string;
    icon: ReactNode;
}

export interface FaqWidgetsProp {
    data: FaqWidgetsItems[]
}

interface featuredTutorialItems {
    id: number;
    image: string;
    title: string;
    description: string;
    date: string;
    linkIcon: string;
    downloadIcon: string;
}

export interface featuredTutorialsProp {
    data: featuredTutorialItems[];
    colClass: string;
    titleClass?: string;
}
