import React from 'react'
import { ButtonGroup, Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DropdownWithInputTitle } from '../../../../Utils/Constants'
import { dropdownWithInputSubTitle } from '../../../../Data/UiKits/Dropdown'
import DropdownInputs from './DropdownInputs'

export default function DropdownWithInput() {
    return (
        <Col xl={4} sm={6}>
            <Card>
                <CommonCardHeader title={DropdownWithInputTitle} subTitle={dropdownWithInputSubTitle} />
                <CardBody>
                    <div className='common-flex'>
                        <ButtonGroup>
                            <DropdownInputs />
                        </ButtonGroup>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
