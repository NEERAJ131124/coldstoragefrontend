import React, { useState } from 'react'
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { Href } from '../../../../Utils/Constants';

export default function SplitDemo() {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }

    return (
        <ButtonGroup>
            <Btn outline color='primary'>{'Widgets'}</Btn>
            <Dropdown className='separated-btn' isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle color='primary'><i className="iconly-Arrow-Down icli"></i></DropdownToggle>
                <DropdownMenu className="dropdown-content">
                    <DropdownItem href={Href}>{'General'}</DropdownItem>
                    <DropdownItem href={Href}>{'Chart'}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </ButtonGroup>
    )
}
