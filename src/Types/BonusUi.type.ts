import { ReactNode } from "react";
interface TimelineItem {
    id: number;
    colClass: string;
    color: string;
    date: string;
    header: string;
    paragraph: string;
    verticalLine1?: string;
    verticalLine2?: string;
}

export interface HorizontalTimelineType {
    id: number;
    mainClass: string;
    child: TimelineItem[];
}
export interface AlertOptions {
    [key: string]: any
}

export interface DefaultSliderItem {
    id: number;
    image: string;
    captionHeader?: string;
    captionText?: string;
    interval?: string;
}

export interface CarouselItemData extends DefaultSliderItem {
    'data-interval': number;
}

export interface DefaultPaginationListProp {
    pageClass?: string;
    pageColor: string;
}
export interface SocialMediaProp {
    className?: string;
}

export interface ArrowIconProps {
    isOpen: boolean;
    className?: string
}

export interface CheckBoxIconProps {
    variant: string;
    className: string;
    onClick: (e: React.MouseEvent<HTMLElement>) => void
}

export interface UniqueToastContentProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

export interface CommonToastProps {
    icon: ReactNode;
    smallClass?: string;
    strongText: string;
    smallText: string;
    bodyText: string;
}

export interface ToastPlacementContentProp {
    selectedPosition: string;
}
