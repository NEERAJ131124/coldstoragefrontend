import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Container, Row } from 'reactstrap'
import TaskLeftAside from './TaskLeftAside'
import { AppDispatch } from '../../../ReduxToolkit/Store';
import { fetchTasks } from '../../../ReduxToolkit/Reducers/TasksReducer';
import TaskRightAside from './TaskRightAside';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import { ApplicationTitle, TasksTitle } from '../../../Utils/Constants';

export default function TasksContainer() {
    const dispatch = useDispatch<AppDispatch>();
    const [activeTab, setActiveTab] = useState(1);
    const activeToggle = (tab: number) => {
        setActiveTab(tab);
    };
    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);
    return (
        <>
            <Breadcrumbs pageTitle={TasksTitle} parent={ApplicationTitle} title={TasksTitle} />
            <Container fluid>
                <div className="email-wrap bookmark-wrap">
                    <Row>
                        <TaskLeftAside activeToggle={activeToggle} activeTab={activeTab} />
                        <TaskRightAside activeTab={activeTab} />
                    </Row>
                </div>
            </Container>
        </>
    )
}