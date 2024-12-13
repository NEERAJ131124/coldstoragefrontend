import React, { useState } from 'react'
import { FormGroup, Input, Label, Nav, NavItem, NavLink } from 'reactstrap';
import { Href } from '../../../../../Utils/Constants';
import MailBody from './MailBody';
import { emailNavTab } from '../../../../../Data/Applications/LetterBox';
import DashboardSvgIcon from '../../../../../Utils/CommonComponents/DashboardSvgIcon';

export default function MailHeader() {
    const [navId, setNavId] = useState("pills-important-tab")
    return (
        <div className="mail-header-wrapper">
            <div className="mail-header">
                <FormGroup check inline>
                    <Input className="checkbox-primary" id="emailCheckboxA" type="checkbox" value="option1" />
                    <Label htmlFor="emailCheckboxA" check></Label>
                    <Nav className="email-tabs">
                        {emailNavTab.map((data) => (
                            <NavItem key={data.id}>
                                <NavLink href={Href} className={navId === data.id ? 'active' : ''} onClick={() => setNavId(data.id)}>
                                    <DashboardSvgIcon className='stroke-icon' iconId={data.icon} />
                                    <span>{data.title}</span>
                                </NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                </FormGroup>
            </div>
            <MailBody />
        </div>
    )
}
