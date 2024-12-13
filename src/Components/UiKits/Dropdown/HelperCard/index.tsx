import React, { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { HelperCardTitle } from '../../../../Utils/Constants'
import { helperCardData, helperCardSubTitle } from '../../../../Data/UiKits/Dropdown'
import HelperCardBody from './HelperCardBody'

export default function HelperCard() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={HelperCardTitle} subTitle={helperCardSubTitle} />
                <CardBody>
                    <div className='common-flex'>
                        {helperCardData && helperCardData.map((item, index) => (
                            <Fragment key={index}>
                                <HelperCardBody item={item} />
                            </Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
