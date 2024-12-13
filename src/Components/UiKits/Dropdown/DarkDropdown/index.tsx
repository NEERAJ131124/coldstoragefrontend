import React, { useState } from 'react'
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { DarkDropdownTitle, Href } from '../../../../Utils/Constants';
import { darkDropdownSubTitle } from '../../../../Data/UiKits/Dropdown';

export default function DarkDropdown() {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }

    return (
        <Col xl={4} sm={6}>
            <Card>
                <CommonCardHeader title={DarkDropdownTitle} subTitle={darkDropdownSubTitle} />
                <CardBody className='dropdown-basic m-0'>
                    <div className='common-flex dark-dropdown'>
                        <Dropdown isOpen={open} toggle={toggle} direction='down'>
                            <DropdownToggle caret color='dark'>{'Dark Night'}</DropdownToggle>
                            <DropdownMenu className="dropdown-block" dark>
                                <DropdownItem href={Href} active>{'Dark moon'}</DropdownItem>
                                <DropdownItem href={Href}>{'Dark owl'}</DropdownItem>
                                <DropdownItem href={Href}>{'Nightfall'}</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}