import React, { useState } from 'react'
import { Card, CardBody, Col, Nav, NavItem, NavLink } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LetterBoxNavType } from '../../../../Types/LetterBox.type';
import { Badges, Btn } from '../../../../AbstractElements';
import { AddLabel, ComposeEmail, EmailFilter, Href } from '../../../../Utils/Constants';
import { RootState } from '../../../../ReduxToolkit/Store';
import { setComposeEmail, setModal } from '../../../../ReduxToolkit/Reducers/LetterBoxReducer';
import { letterBoxSidebar } from '../../../../Data/Applications/LetterBox';
import DashboardSvgIcon from '../../../../Utils/CommonComponents/DashboardSvgIcon';

export default function LetterLeftAside({ navId, setNavId }: LetterBoxNavType) {
    const dispatch = useDispatch()
    const { composeEmail, inboxEmail, modal } = useSelector((state: RootState) => state.email);
    let starBadges = inboxEmail.filter((data) => data.star === true && 1)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Col xxl={3} xl={4} className="box-col-12">
            <div className="md-sidebar">
                <Btn color='primary' className="md-sidebar-toggle" onClick={toggle}>{EmailFilter}</Btn>
                <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? 'open' : ''}`}>
                    <div className="email-left-aside">
                        <Card>
                            <CardBody>
                                <div className="email-app-sidebar">
                                    <Btn color='primary' className="emailbox" onClick={() => dispatch(setComposeEmail(!composeEmail))}>
                                        <i className="fa-solid fa-plus" />{ComposeEmail}
                                    </Btn>
                                    <Nav className="main-menu email-category" pills>
                                        {letterBoxSidebar.map((data) => (
                                            <NavItem key={data.id}>
                                                <NavLink className={navId === data.id ? "active" : ""} id={data.id} onClick={() => setNavId(data.id)} href={Href}>
                                                    <DashboardSvgIcon className={`stroke-icon ${data.color ? `stroke-${data.color}` : ""}`} iconId={data.icon} />
                                                    <div>
                                                        {data.title}
                                                        {data.badge && <Badges color='transparent'>{data.title === 'Inbox' ? inboxEmail.length : starBadges.length}</Badges>}
                                                    </div>
                                                </NavLink>
                                            </NavItem>
                                        ))}
                                        <NavItem>
                                            <NavLink className="btn" href={Href} onClick={() => dispatch(setModal(!modal))}>
                                                <i className="fa-solid fa-plus" />{AddLabel}
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </Col>
    )
}