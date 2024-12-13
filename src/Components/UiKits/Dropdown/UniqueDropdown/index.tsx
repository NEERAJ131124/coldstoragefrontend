import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { UniqueDropdownTitle } from '../../../../Utils/Constants'
import { uniqueDropdownSubTitle } from '../../../../Data/UiKits/Dropdown'
import DropdownForm from './DropdownForm'
import DropdownText from './DropdownText'

export default function UniqueDropdown() {
    return (
        <Col sm={6}>
            <Card>
                <CommonCardHeader title={UniqueDropdownTitle} subTitle={uniqueDropdownSubTitle} />
                <CardBody>
                    <div className='common-flex'>
                        <DropdownForm />
                        <DropdownText />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
