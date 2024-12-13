import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { Href } from '../../Constants';
import { DashboardDropdownProps } from '../../../Types/Dashboard.type';

export default function DashboardDropdown({ dropDownClass, dropDownIcon, caret, dropDownTitle, dropDownList, start, end }: DashboardDropdownProps) {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };
    return (
        <Dropdown isOpen={open} toggle={toggle} className={dropDownClass ? dropDownClass : ''}>
            <DropdownToggle color='transparent' caret={caret ? true : false}>
                {dropDownIcon ? <i className="fa-solid fa-ellipsis" /> : dropDownTitle}
            </DropdownToggle>
            <DropdownMenu start={start ? 'true' : 'false'} end={end ? true : false}>
                {dropDownList.map((item, index) => (
                    <DropdownItem key={index} href={Href}>{item}</DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    )
}