import React, { Fragment } from 'react'
import { CardHeader } from 'reactstrap'
import { CommonCardHeaderTypes } from '../../Types/CommonComponent.type'
import { H3, P } from '../../AbstractElements'

export default function CommonCardHeader({ headClass, title, subTitle, titleClass }: CommonCardHeaderTypes) {
    return (
        <CardHeader className={`card-no-border ${headClass ? headClass : ''}`}>
            <H3 className={`mb-0 ${titleClass ? titleClass : ''}`}>{title}</H3>
            {subTitle && (
                <P className="mt-1 mb-0">
                    {subTitle.map((data, index) => (
                        <Fragment key={index}>
                            {data.text} {data.code && <code>{data.code}</code>}
                        </Fragment>
                    ))}
                </P>
            )}
        </CardHeader>
    )
}