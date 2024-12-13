import React, { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { AlignmentsTitle } from '../../../../Utils/Constants'
import { alignmentData, alignmentsSubTitle } from '../../../../Data/UiKits/Dropdown'
import DropdownCommon from '../../../../Utils/CommonComponents/DropdownCommon'
import AlignTopDemo from './AlignTopDemo'

export default function Alignments() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={AlignmentsTitle} subTitle={alignmentsSubTitle} />
                <CardBody>
                    <div className='common-flex'>
                        <AlignTopDemo />
                        {alignmentData && alignmentData.map((item, index) => (
                            <Fragment key={index}>
                                <DropdownCommon item={item} />
                            </Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
