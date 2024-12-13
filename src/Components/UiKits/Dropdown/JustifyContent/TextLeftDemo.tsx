import React, { useState } from 'react'
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Href } from '../../../../Utils/Constants';

export default function TextLeftDemo() {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }
    return (
        <ButtonGroup>
            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle caret color='primary'>{'Text-left'}</DropdownToggle>
                <DropdownMenu className="dropdown-block text-start">
                    <DropdownItem href={Href}>{'Hello..'}</DropdownItem>
                    <DropdownItem href={Href}>{'How are you?'}</DropdownItem>
                    <DropdownItem href={Href}>{'What are you doing?'}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </ButtonGroup>
    )
}
