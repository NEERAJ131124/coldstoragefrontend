import React, { useState } from 'react'
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Href } from '../../../../Utils/Constants';

export default function LargeDropdown() {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }
    return (
        <ButtonGroup>
            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle caret color='info' className='light text-white' size="lg">{'Large button'}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                    <DropdownItem href={Href}>{'Small button'}</DropdownItem>
                    <DropdownItem href={Href}>{'Medium button'}</DropdownItem>
                    <DropdownItem href={Href}>{'Large button'}</DropdownItem>
                    <DropdownItem href={Href} divider />
                    <DropdownItem href={Href}>{'Very large button'}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </ButtonGroup>
    )
}

