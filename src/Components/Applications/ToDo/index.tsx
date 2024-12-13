import React, { useEffect } from 'react'
import { Container, Row } from 'reactstrap'
import { useDispatch } from 'react-redux';
import LeftTodo from './LeftTodo'
import RightTodo from './RightTodo'
import { AppDispatch } from '../../../ReduxToolkit/Store';
import { fetchTodo } from '../../../ReduxToolkit/Reducers/TodoReducer';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import { ApplicationTitle, ToDoTitle } from '../../../Utils/Constants';

export default function ToDoContainer() {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchTodo());
    }, [dispatch]);

    return (
        <>
            <Breadcrumbs pageTitle={ToDoTitle} parent={ApplicationTitle} title={ToDoTitle} />
            <Container fluid className="email-wrap bookmark-wrap todo-wrap">
                <Row>
                    <LeftTodo />
                    <RightTodo />
                </Row>
            </Container>
        </>
    )
}