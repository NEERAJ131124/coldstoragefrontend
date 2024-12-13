import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { Table } from 'reactstrap';
import { Link, MoreHorizontal, Trash2 } from 'react-feather';
import { CreatedByMeTableProp } from '../../../../../../Types/Tasks.type';
import { RootState } from '../../../../../../ReduxToolkit/Store';
import { removeTask } from '../../../../../../ReduxToolkit/Reducers/TasksReducer';
import { H5, P } from '../../../../../../AbstractElements';
import { Href } from '../../../../../../Utils/Constants';

export default function NewTaskTable({ componentRef }: CreatedByMeTableProp) {
    const { newTask } = useSelector((state: RootState) => state.tasks);
    const dispatch = useDispatch();
    const deleteTask = (taskId: number) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Ok",
            cancelButtonText: "cancel",
            reverseButtons: true,
        }).then((result) => {
            if (result.value) {
                dispatch(removeTask(taskId));
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            } else {
                Swal.fire("Your imaginary file is safe!");
            }
        });
    };
    return (
        <div className="taskadd" ref={componentRef}>
            <div className="table-responsive theme-scrollbar">
                <Table>
                    <tbody>
                        {newTask && newTask.length ? (
                            newTask.map((taskdata, index) => (
                                <tr key={index}>
                                    <td>
                                        <H5 className='f-w-700 task_title_0' >{taskdata.title}</H5>
                                        <P className='project_name_0' >{taskdata.collection}</P>
                                    </td>
                                    <td><P className='task_desc_0'>{taskdata.description}</P></td>
                                    <td>
                                        <a className='me-2' href={Href}><Link /></a>
                                        <a href={Href}><MoreHorizontal /></a>
                                    </td>
                                    <td>
                                        <a href={Href} onClick={() => deleteTask(taskdata.id)}>
                                            <Trash2 />
                                        </a>
                                    </td>
                                </tr>
                            ))) : (
                            <tr>
                                <td>
                                    <div className='no-favourite'>
                                        <span>{'No Tasks Found'}</span>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}