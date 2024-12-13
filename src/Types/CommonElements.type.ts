import { ReactNode } from "react";
import { BadgeProps, Button, ProgressProps } from "reactstrap";

export interface BadgesProps extends BadgeProps {
    children?: ReactNode;
}

export interface HeadingProps {
    children?: any;
    className?: string;
    style?: any;
}

export interface BtnProps extends React.ComponentProps<typeof Button> {
    children?: React.ReactNode;
}

export interface OrderedListProps {
    children?: any;
    className?: string;
    style?: any
}

export interface UnorderedListProps {
    children?: any;
    className?: string;
    role?: string
    style?: Object;
    id?: string;
}

export interface ImageProps {
    body?: boolean;
    className?: string;
    src: any;
    alt: any;
    ref?: any;
    onLoad?: () => void;
    style?: Object;
    height?: number;
    id?: string;
    title?: string;
    width?: number;
}

export interface ParagraphProps {
    children?: any;
    className?: string;
    innerHtml?: any;
    dangerouslySetInnerHTML?: any;
    id?: string;
    style?: any
}

export interface ProgressBarProps extends ProgressProps {
    children?: ReactNode;
}

export interface RibbonProps {
    children?: any;
    className?: string;
}

export interface BreadcrumbsProps {
    title: string;
    parent: string;
    pageTitle: string;
    paragraph?: string;
}
