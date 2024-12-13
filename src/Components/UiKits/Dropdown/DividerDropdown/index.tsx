import React, { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DividerDropdownTitle } from '../../../../Utils/Constants'
import { dividerCommonData, dividerDropdownSubTitle } from '../../../../Data/UiKits/Dropdown'
import DividerBody from './DividerBody'

export default function DividerDropdown() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={DividerDropdownTitle} subTitle={dividerDropdownSubTitle} />
                <CardBody>
                    <div className='common-flex'>
                        {dividerCommonData && dividerCommonData.map((item, index) => (
                            <Fragment key={index}>
                                <DividerBody item={item} />
                            </Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
