import React, { useState } from 'react'
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { DropdownCommonProp } from '../../Types/UiKits.type';
import { Href } from '../Constants';

export default function DropdownCommon({ item, toggleClass }: DropdownCommonProp) {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }
    return (
        <ButtonGroup className={item.divClass}>
            <Dropdown isOpen={open} toggle={toggle} direction={item.position ? item.position : 'down'}>
                <DropdownToggle caret className={toggleClass} color={item.class}>{item.text}</DropdownToggle>
                <DropdownMenu className={item.bodyClass}>
                    {item.menulist && item.menulist.map((item, index) => (
                        <DropdownItem href={Href} key={index}>{item}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </ButtonGroup>
    )
}