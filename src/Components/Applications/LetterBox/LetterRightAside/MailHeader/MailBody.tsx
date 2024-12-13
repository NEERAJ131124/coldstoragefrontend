import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input } from 'reactstrap';
import { Href } from '../../../../../Utils/Constants';
import { mailBodyItems } from '../../../../../Data/Applications/LetterBox';

export default function MailBody() {
    const [openDrop, setOpenDrop] = useState(false);
    const toggle = () => {
        setOpenDrop(!openDrop);
    };
    return (
        <div className="mail-body">
            <div className="mail-search d-flex-align-items-center">
                <Input type="text" placeholder="Search..." /><i className="fa-solid fa-magnifying-glass" />
            </div>
            <div className="light-square"><i className="fa-solid fa-arrows-rotate" /></div>
            <div className="light-square"><i className="fa-solid fa-trash" /></div>
            <Dropdown isOpen={openDrop} toggle={toggle}>
                <DropdownToggle color="transparent" dir="left" className="light-square">
                    <i className="fa-solid fa-ellipsis-vertical" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-block" end={true}>
                    {mailBodyItems.map((item, index) => (
                        <DropdownItem href={Href} key={index}>{item}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}