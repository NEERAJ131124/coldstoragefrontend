import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { RootState } from '../../../../../ReduxToolkit/Store';
import { setEditModal } from '../../../../../ReduxToolkit/Reducers/BookmarkReducer';
import { EditBookmark } from '../../../../../Utils/Constants';
import EditForm from './EditForm';

export default function EditBookmarkModal() {
    const dispatch = useDispatch();
    const { editModal } = useSelector((state: RootState) => state.bookmark);
    const editToggle = () => {
        dispatch(setEditModal(!editModal));
    };
    return (
        <Modal modalClassName='modal-bookmark' isOpen={editModal} toggle={editToggle} size='lg'>
            <ModalHeader toggle={editToggle}> {EditBookmark}</ModalHeader>
            <ModalBody>
                <EditForm editToggle={editToggle} />
            </ModalBody>
        </Modal>
    )
}