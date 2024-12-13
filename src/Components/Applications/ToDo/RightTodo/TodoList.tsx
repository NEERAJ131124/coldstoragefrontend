import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import TodoListFooter from './TodoListFooter'
import { RootState } from '../../../../ReduxToolkit/Store';
import { markTaskAsCompleted, removeItems, selectItem } from '../../../../ReduxToolkit/Reducers/TodoReducer';
import { TodoListType } from '../../../../Types/Todo.type';
import { Badges, H4, H5, LI, UL } from '../../../../AbstractElements';

export default function TodoList() {
    const { allTodos, addNewTask } = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();
    const handleRemoveTodo = (todoId: number, todo: string) => {
        dispatch(removeItems(todoId));
        toast.success(`${todo} deleted`);
    };
    const handleMarkedTodo = (item: TodoListType) => {
        dispatch(markTaskAsCompleted(item.id));
        if (item.status === "completed") {
            dispatch(selectItem({ id: item.id, status: 'pending', badge: 'Pending', badgeclass: 'danger' }));
            toast.error(item.title + " as Incomplete");
        } else if (item.status === "pending") {
            dispatch(selectItem({ id: item.id, status: 'completed', badge: 'Done', badgeclass: 'success' }));
            toast.success(item.title + " as Complete");
        }
    };
    return (
        <div className="todo-list-body">
            {addNewTask && <TodoListFooter />}
            <UL className='simple-list' id='todo-list'>
                {allTodos.length > 0
                    ? allTodos.map((todo, index) => (
                        <LI className={`task ${todo.status}`} key={index}>
                            <div className='task-container'>
                                <H4 className='task-label'>{todo.title}</H4>
                                <div className='d-flex align-items-center gap-4'>
                                    <Badges color={todo.badgeclass}>{todo.badge}</Badges>
                                    <H5 className='assign-name m-0'>{todo.date}</H5>
                                    <span className='task-action-btn'>
                                        <span className='action-box large delete-btn' onClick={() => handleRemoveTodo(todo.id, todo.title)}>
                                            <i className='icon'>
                                                <i className='icon-trash' />
                                            </i>
                                        </span>
                                        <span className='action-box large complete-btn' onClick={() => handleMarkedTodo(todo)}>
                                            <i className='icon'>
                                                <i className='icon-check' />
                                            </i>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </LI>
                    ))
                    : ''}
            </UL>
        </div>
    )
}