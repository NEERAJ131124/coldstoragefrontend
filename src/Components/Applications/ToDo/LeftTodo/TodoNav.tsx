/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Nav, NavItem } from 'reactstrap';
import { Activity, Cast, CheckCircle, FilePlus, Trash } from 'react-feather';
import { RootState } from '../../../../ReduxToolkit/Store';
import { TodoListType } from '../../../../Types/Todo.type';
import { Badges, Btn } from '../../../../AbstractElements';
import { Href, ToDoList } from '../../../../Utils/Constants';

export default function TodoNav() {
    const { allTodos } = useSelector((state: RootState) => state.todos)
    const [showTodos, setShowTodos] = useState<TodoListType[]>(allTodos);;
    const handleShowAllTodos = () => {
        setShowTodos(allTodos);
    };
    const handleShowFilteredTodos = (filter: string) => {
        const filteredTodos = allTodos.filter((data) => data.badge === filter);
        setShowTodos(filteredTodos);
    };

    return (
        <Nav className="main-menu">
            <NavItem>
                <Btn color='primary' block className="btn-mail w-100"><CheckCircle className='me-2' />{ToDoList}</Btn>
            </NavItem>
            <NavItem>
                <a href={Href} onClick={handleShowAllTodos}>
                    <span className="iconbg badge-light-primary"><FilePlus /></span>
                    <span className="title ms-2">{'All Task'}</span>
                </a>
            </NavItem>
            <NavItem>
                <a href={Href} onClick={() => handleShowFilteredTodos('Done')}>
                    <span className="iconbg badge-light-success"><CheckCircle /></span>
                    <span className="title ms-2">{'Completed'}</span>
                    <Badges color='success'>{allTodos.filter((data) => data.badge === 'Done').length}</Badges>
                </a>
            </NavItem>
            <NavItem>
                <a href={Href} onClick={() => handleShowFilteredTodos('Pending')}>
                    <span className="iconbg badge-light-danger"><Cast /></span>
                    <span className="title ms-2">{'Pending'}</span>
                    <Badges color='danger'>{allTodos.filter((data) => data.badge === 'Pending').length}</Badges>
                </a>
            </NavItem>
            <NavItem>
                <a href={Href} onClick={() => handleShowFilteredTodos('In Progress')}>
                    <span className="iconbg badge-light-info"><Activity /></span>
                    <span className="title ms-2">{'In Process'}</span>
                    <Badges color='primary'>{allTodos.filter((data) => data.badge === 'In Progress').length}</Badges>
                </a>
            </NavItem>
            <NavItem>
                <a href={Href}>
                    <span className="iconbg badge-light-danger"><Trash /></span>
                    <span className="title ms-2">{'Trash'}</span>
                </a>
            </NavItem>
        </Nav>
    )
}