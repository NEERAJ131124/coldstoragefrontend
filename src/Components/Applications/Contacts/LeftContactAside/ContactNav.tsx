import React from 'react'
import { Nav, NavItem } from 'reactstrap';
import { LeftContactAsideProps } from '../../../../Types/Contact.type';
import { Href } from '../../../../Utils/Constants';
import { contactNavData } from '../../../../Data/Applications/Contacts';
import AddContact from './ContactModals/AddContact';
import CategoryModal from './ContactModals/CategoryModal';

export default function ContactNav({ activeTab, setActiveTab, changeTab }: LeftContactAsideProps) {
    const tabClick = (id: number) => {
        setActiveTab(id);
        changeTab(id);
    }
    return (
        <Nav className="main-menu contact-options">
            <NavItem><AddContact /></NavItem>
            <NavItem><span className="main-title">{'Views'}</span></NavItem>
            <NavItem><a href={Href} className={activeTab === 1 ? 'active' : ''} onClick={() => tabClick(1)}><span className="title">{'Personal'}</span></a></NavItem>
            <NavItem><CategoryModal /></NavItem>
            {contactNavData.map((item) => (
                <NavItem key={item.id}>
                    <a href={Href} className={activeTab === item.id ? 'active' : ''} onClick={() => tabClick(item.id)}>
                        <span className="title">{item.title}</span>
                    </a>
                </NavItem>
            ))}
        </Nav>
    )
}