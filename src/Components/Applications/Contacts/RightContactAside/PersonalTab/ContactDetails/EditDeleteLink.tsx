import React from 'react'
import { useDispatch } from 'react-redux';
import SweetAlert from "sweetalert2";
import { LI } from '../../../../../../AbstractElements'
import { Href } from '../../../../../../Utils/Constants'
import { EditDeleteLinkProps, UserCallbackUserType, UserProps } from '../../../../../../Types/Contact.type';
import { deletedUser, setTempId } from '../../../../../../ReduxToolkit/Reducers/ContactReducer';
import { toast } from 'react-toastify';

export default function EditDeleteLink({ selectedUser, userEditCallback }: EditDeleteLinkProps) {
    const dispatch = useDispatch();
    const editUsers = (usersData: UserCallbackUserType) => {
        if (usersData.id !== undefined) {
            dispatch(setTempId(usersData.id));
            userEditCallback(true, usersData as UserProps);
        }
    };
    const onDeleteUser = (userId: number | undefined) => {
        if (userId !== undefined) {
            SweetAlert.fire({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Ok",
                cancelButtonText: "cancel",
                reverseButtons: true,
            }).then((result) => {
                if (result.value) {
                    dispatch(deletedUser(userId));
                    SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
                } else {
                    SweetAlert.fire("Your imaginary file is safe!");
                }
            });
        } else { toast.error("User ID is undefined"); }
    };
    return (
        <>
            <LI><a href={Href} onClick={() => editUsers(selectedUser)}>{'Edit'}</a></LI>
            <LI><a href={Href} onClick={() => onDeleteUser(selectedUser.id)}>{'Delete'}</a></LI>
        </>
    )
}