import React, { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { RoundedDropdownTitle } from '../../../../Utils/Constants'
import { roundedDropdownData, roundedDropdownSubTitle } from '../../../../Data/UiKits/Dropdown'
import RoundedDemo from './RoundedDemo'
import DropdownCommon from '../../../../Utils/CommonComponents/DropdownCommon'

export default function RoundedDropdown() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={RoundedDropdownTitle} subTitle={roundedDropdownSubTitle} />
                <CardBody>
                    <div className='common-flex'>
                        <RoundedDemo />
                        {roundedDropdownData && roundedDropdownData.map((item, index) => (
                            <Fragment key={index}>
                                <DropdownCommon item={item} toggleClass={`rounded-pill ${item.class === 'info' || item.class === 'warning' ? 'text-white' : ''}`} />
                            </Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
