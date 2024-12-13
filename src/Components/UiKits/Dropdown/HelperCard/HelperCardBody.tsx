import React, { useState } from 'react'
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { DropdownCommonProp } from '../../../../Types/UiKits.type';
import { Href } from '../../../../Utils/Constants';

export default function HelperCardBody({ item }: DropdownCommonProp) {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }
    return (
        <ButtonGroup>
            <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color={item.class} className={item.class !== 'secondary' ? 'text-white' : ''}>{item.text}</DropdownToggle>
                <DropdownMenu className="dropdown-block p-3 dark-form">
                    <DropdownItem header className='fs-6 fw-bold pb-2 p-0' href={Href}>{item.menulist[0]}</DropdownItem>
                    <DropdownItem className='p-0 helper-truncate' href={Href}>{item.menulist[1]}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </ButtonGroup>
    )
}
