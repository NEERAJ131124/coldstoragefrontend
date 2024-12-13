import React, { Fragment } from 'react'
import { Card, CardBody } from 'reactstrap'
import { CommonButtonsInterface } from '../../../Types/Buttons.type'
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader'
import { Btn } from '../../../AbstractElements'
import CommonToolTip from './CommonToolTip'

export default function CommonButtons({ commonButtonsData, title, subTitle }: CommonButtonsInterface) {

    return (
        <Card>
            <CommonCardHeader title={title} subTitle={subTitle} />
            <CardBody className="btn-showcase">
                {commonButtonsData.map((data, index) => (
                    <Fragment key={index}>
                        <Btn className={data.btnClass ? data.btnClass : ""}
                            outline={data.outline} active={data.active} disabled={data.disabled}
                            size={data.size ? data.size : ""} id={data.id} color={data.color}>
                            {data.title}
                        </Btn>
                        <CommonToolTip
                            toolTipText={data.toolTipText}
                            id={data.id}
                        />
                    </Fragment>
                ))}
            </CardBody>
        </Card>
    )
}