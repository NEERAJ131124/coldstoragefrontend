import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Col, Form, FormFeedback, FormGroup, Label, Row } from 'reactstrap';
import { RootState } from '../../../../../ReduxToolkit/Store';
import { BookmarkProps, EditFormProps, FormData } from '../../../../../Types/Bookmark.type';
import { setEditModal, updateBookMark } from '../../../../../ReduxToolkit/Reducers/BookmarkReducer';
import { Cancel, Description, Save, Title, WebUrl } from '../../../../../Utils/Constants';
import { Btn } from '../../../../../AbstractElements';
import GroupCollection from './GroupCollection';
import { toast } from 'react-toastify';

export default function EditForm({ editToggle }: EditFormProps) {
    const { editRow, editModal } = useSelector((state: RootState) => state.bookmark);
    const dispatch = useDispatch();
    const [validate, setValidate] = useState(false);
    const { register, handleSubmit, formState: { errors }, } = useForm<FormData>();
    const updateNewBookmark = (id: number, data: BookmarkProps, image_url: string) => {
        dispatch(updateBookMark({ id, data, image_url }));
    };
    const onSubmit = (data: FormData) => {
        if (data.url && data.title && data.description) {
            const bookmarkData: BookmarkProps = {
                id: editRow.id,
                fillStar: true,
                image: 'lightgallry/01.jpg',
                website_url: data.url,
                title: data.title,
                description: data.description,
                collection: data.collection,
            };
            setValidate(true);
            updateNewBookmark(editRow.id, bookmarkData, "lightgallry/01.jpg");
            dispatch(setEditModal(!editModal));
        } else {
            toast.error('Please fill correct details');
        }
    };
    return (
        <Form className='form-bookmark needs-validation' onSubmit={handleSubmit(onSubmit)} noValidate>
            <Row className='g-2'>
                <Col md={12}>
                    <FormGroup className='mt-0'>
                        <Label>{WebUrl}</Label>
                        <input type='text' defaultValue={editRow.website_url} className={`form-control ${errors.url ? 'is-invalid' : ''} ${validate && !errors.url ? 'is-valid' : ''}`} {...register('url', { required: true })} />
                        {errors.url && (<FormFeedback>{errors.url.message}</FormFeedback>)}
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup className='mt-0'>
                        <Label>{Title}</Label>
                        <input type='text' defaultValue={editRow.title} className={`form-control ${errors.title ? 'is-invalid' : ''} ${validate && !errors.title ? 'is-valid' : ''}`} {...register('title', { required: true })} />
                        {errors.title && (<FormFeedback>{errors.title.message}</FormFeedback>)}
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup className='mt-0'>
                        <Label>{Description}</Label>
                        <input type='textarea' defaultValue={editRow.description} className={`form-control ${errors.description ? 'is-invalid' : ''} ${validate && !errors.description ? 'is-valid' : ''}`} {...register('description', { required: true })} />
                        {errors.description && (<FormFeedback>{errors.description.message}</FormFeedback>)}
                    </FormGroup>
                </Col>
                <GroupCollection />
            </Row>
            <Btn color='secondary' className='me-2'>{Save}</Btn>
            <Btn color='primary' onClick={editToggle}>{Cancel}</Btn>
        </Form>
    )
}