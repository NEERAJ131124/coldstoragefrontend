import React from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { ToDoTitle } from '../../../../Utils/Constants';
import MarkTasks from './MarkTasks';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import TodoList from './TodoList';

export default function RightTodo() {
    
    return (
        <Col xl={9} className="xl-70 box-col-12">
            <Card>
                <CommonCardHeader headClass='d-flex align-items-center justify-content-between' title={ToDoTitle} />
                <CardBody>
                    <div className="todo">
                        <div className="todo-list-wrapper">
                            <div className="todo-list-container">
                                <MarkTasks/>
                                <TodoList/>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}