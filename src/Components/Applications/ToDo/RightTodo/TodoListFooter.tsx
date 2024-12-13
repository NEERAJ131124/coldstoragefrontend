import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewTodo, setAddNewTask } from '../../../../ReduxToolkit/Reducers/TodoReducer';
import { RootState } from '../../../../ReduxToolkit/Store';
import { Input } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';

export default function TodoListFooter() {
    const { addNewTask } = useSelector((state: RootState) => state.todos)
    const [task, setTask] = useState("");
    const dispatch = useDispatch();
    const handleNewTask = () => {
        if (task !== "") {
            dispatch(addNewTodo(task));
            setTask("");

        } else { return; }
    };
    return (
        <div className="todo-list-footer">
            <div className={`new-task-wrapper mb-4 ${addNewTask ? "visible" : ""} `}>
                <Input type="textarea" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter new task here...' />
                <Btn color='danger' className="cancel-btn" onClick={() => dispatch(setAddNewTask(!addNewTask))}>{'Close'}</Btn>
                <Btn color='success' className="ms-3 add-new-task-btn" onClick={handleNewTask}>{'Add Task'}</Btn>
            </div>
        </div>
    )
}