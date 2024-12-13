import React, { useState } from 'react'
import { Card, CardBody, Col, Nav, NavItem } from 'reactstrap';
import { TaskLeftAsideProps } from '../../../../Types/Tasks.type';
import { Btn } from '../../../../AbstractElements';
import { Href, TaskFilter } from '../../../../Utils/Constants';
import TaskHeader from './Common/TaskHeader';
import { PlusCircle } from 'react-feather';
import { tagsTaskNav, viewTaskNav } from '../../../../Data/Applications/Tasks';
import NewTaskModal from './TaskModal/NewTaskModal';
import TagModal from './TaskModal/TagModal';

export default function TaskLeftAside({ activeToggle, activeTab }: TaskLeftAsideProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [tagModal, setTagModal] = useState(false);
    const tagToggle = () => { setTagModal(!tagModal); }
    const toggle = () => { setIsOpen(!isOpen); };

    return (
        <Col xxl={3} xl={4} className="box-col-6">
            <div className="md-sidebar">
                <Btn color='primary' className="md-sidebar-toggle" onClick={toggle}>{TaskFilter}</Btn>
                <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? 'open' : ''}`}>
                    <div className="email-left-aside">
                        <Card>
                            <CardBody>
                                <div className="email-app-sidebar left-bookmark task-sidebar">
                                    <TaskHeader />
                                    <Nav className="main-menu">
                                        <NavItem><NewTaskModal /></NavItem>
                                        <NavItem><span className="main-title"> {'Views'}</span></NavItem>
                                        {viewTaskNav.map((nav) => (
                                            <NavItem key={nav.id}>
                                                <a href={Href} className={activeTab === nav.id ? 'active' : ''} onClick={() => activeToggle(nav.id)}>
                                                    <span className="title">{nav.title}</span></a>
                                            </NavItem>
                                        ))}
                                        <NavItem><hr /></NavItem>
                                        <NavItem>
                                            <span className="main-title"> {'Tags'}
                                                <span className="pull-right"><a href={Href} onClick={tagToggle}><PlusCircle /></a></span>
                                            </span>
                                        </NavItem>
                                        <TagModal tagModal={tagModal} tagToggle={tagToggle} />
                                        {tagsTaskNav.map((nav) => (
                                            <NavItem key={nav.id}>
                                                <a href={Href} className={activeTab === nav.id ? 'active' : ''} onClick={() => activeToggle(nav.id)}>
                                                    <span className="title">{nav.title}</span>
                                                </a>
                                            </NavItem>
                                        ))}
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