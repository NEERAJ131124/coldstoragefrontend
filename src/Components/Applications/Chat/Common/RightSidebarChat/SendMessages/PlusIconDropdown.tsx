import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import DashboardSvgIcon from '../../../../../../Utils/CommonComponents/DashboardSvgIcon';

export default function PlusIconDropdown() {
    const [dropdown, setDropdown] = useState(false);
    const toggle = () => setDropdown(!dropdown);
    return (
        <Dropdown isOpen={dropdown} toggle={toggle}>
            <DropdownToggle className="dropdown-form p-0" color="transparent"><i className="icon-plus" /></DropdownToggle>
            <DropdownMenu className="chat-icon" start="true">
                <DropdownItem tag='div' className="mb-2"><DashboardSvgIcon iconId='camera' /></DropdownItem>
                <DropdownItem tag='div'><DashboardSvgIcon iconId='attchment' /></DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}