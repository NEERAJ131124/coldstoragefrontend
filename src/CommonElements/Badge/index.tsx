import React from 'react'
import { Badge } from 'reactstrap';
import { BadgesProps } from '../../Types/CommonElements.type';

export default function Badges(props: BadgesProps) {
    const { children = '' } = props;
    return (
        <Badge {...props}>{children}</Badge>
    )
}
