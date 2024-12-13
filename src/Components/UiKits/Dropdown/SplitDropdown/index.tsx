import React, { useState } from 'react'
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { Href, SplitDropdownTitle } from '../../../../Utils/Constants';
import { splitDropdownData, splitDropdownSubTitle } from '../../../../Data/UiKits/Dropdown';
import SplitDemo from './SplitDemo';
import { Btn } from '../../../../AbstractElements';

export default function SplitDropdown() {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }

    return (
        <Col sm={12} xl={12}>
            <Card>
                <CommonCardHeader title={SplitDropdownTitle} subTitle={splitDropdownSubTitle} />
                <CardBody className='dropdown-basic me-0'>
                    <div className='common-flex'>
                        <SplitDemo />
                        {splitDropdownData && splitDropdownData.map((data, index) => (
                            <ButtonGroup key={index}>
                                <Btn outline color={data.class}>{data.text}</Btn>
                                <Dropdown className='separated-btn' isOpen={open} toggle={toggle} direction='down'>
                                    <DropdownToggle color={data.class}><i className="iconly-Arrow-Down icli"></i></DropdownToggle>
                                    <DropdownMenu className="dropdown-content">
                                        {data.menulist && data.menulist.map((item, index) => (
                                            <DropdownItem href={Href} key={index}>{item}</DropdownItem>
                                        ))}
                                    </DropdownMenu>
                                </Dropdown>
                            </ButtonGroup>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}