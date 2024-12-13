import React from 'react'
import { CardHeader } from 'reactstrap'
import { CardHeaderSpanType } from '../../Types/CommonComponent.type'
import { H3, H4 } from '../../AbstractElements'

export default function CardHeaderSpan({ headerClass, smallHeading, smallHeadClass, spanClass, heading, span, span2, headingClass, span2Class }: CardHeaderSpanType) {
    return (
        <CardHeader className={headerClass ? headerClass : ""}>
            {smallHeading ? <H4 className={smallHeadClass ? smallHeadClass : ''}>{smallHeading}</H4> :
                <H3 className={headingClass ? headingClass : ""}>{heading}</H3>}
            {span && <span className={spanClass ? spanClass : ''} dangerouslySetInnerHTML={{ __html: span }} />}
            {span2 && <span className={span2Class ? span2Class : ''} dangerouslySetInnerHTML={{ __html: span2 }} />}
        </CardHeader>
    )
}