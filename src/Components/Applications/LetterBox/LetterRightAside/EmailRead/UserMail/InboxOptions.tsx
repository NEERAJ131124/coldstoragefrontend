import React, { useState } from 'react'
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { MoreVertical } from 'react-feather';
import { MailPropsType } from '../../../../../../Types/LetterBox.type';
import { Href } from '../../../../../../Utils/Constants';
import DashboardSvgIcon from '../../../../../../Utils/CommonComponents/DashboardSvgIcon';

export default function InboxOptions({ handlePrint }: MailPropsType) {
    const [fill, setFill] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <div className="inbox-options">
            <span>{'Friday 07 Apr (4 hours ago)'}</span>
            <div className="light-square" onClick={() => setFill(!fill)}>
                <DashboardSvgIcon className={`important-mail ${fill ? "active" : ""}`} iconId='mail-star' />
            </div>
            <div className="light-square" onClick={handlePrint}>
                <DashboardSvgIcon iconId='print' />
            </div>
            <ButtonGroup className="light-square">
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle color="transparent" dir="left"><MoreVertical /></DropdownToggle>
                    <DropdownMenu className="dropdown-block">
                        <DropdownItem href={Href}><i className="fa-solid fa-mail-reply" />{'Reply'}</DropdownItem>
                        <DropdownItem href={Href}><i className="fa-solid fa-mail-forward" />{'Forward'}</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </ButtonGroup>
        </div>
    )
}