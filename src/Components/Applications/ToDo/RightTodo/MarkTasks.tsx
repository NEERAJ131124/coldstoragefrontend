import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { RootState } from '../../../../ReduxToolkit/Store';
import { markTaskAsCompleted, setAddNewTask } from '../../../../ReduxToolkit/Reducers/TodoReducer';
import { Btn } from '../../../../AbstractElements';

export default function MarkTasks() {
    const dispatch = useDispatch();
    const [markAll, setMarkAll] = useState(false);
    const { allTodos, addNewTask } = useSelector((state: RootState) => state.todos)

    const addNewTaskHandle = () => {
        dispatch(setAddNewTask(!addNewTask))
    };
    const markAllStatus = () => {
        if (markAll === true) {
            allTodos.forEach((todo) => {
                dispatch(markTaskAsCompleted(todo.id));
            });
            toast.error("All Task In-Completed !");
        } else {
            allTodos.forEach((todo) => {
                dispatch(markTaskAsCompleted(todo.id));
            });
            toast.success("All Task Completed !");
        }
        setMarkAll(!markAll);
    };
    return (
        <div className="mark-all-tasks">
            <div className="mark-all-tasks-container">
                <span className="mark-all-btn  d-flex align-items-center gap-1">
                    <span className={`btn-label text-${markAll ? 'success' : 'danger'}`}>{!markAll ? "Mark all as finished" : "Mark all as Incomplete"}</span>
                    <span className="action-box completed" onClick={markAllStatus}>
                        {markAll && (<i className="icon"><i className="icon-check" /></i>)}
                    </span>
                </span>
            </div>
            <div className="todo-list-footer ms-2">
                <div className="add-task-btn-wrapper">
                    <Btn color='primary' className={`add-task-btn ${addNewTask ? "hide" : ""}`} onClick={addNewTaskHandle}>
                        <i className="icon-plus" /> {'Add new task'}
                    </Btn>
                </div>
            </div>
        </div>
    )
}