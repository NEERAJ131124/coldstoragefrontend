import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../../ReduxToolkit/Store';
import { setPage } from '../../../../../ReduxToolkit/Reducers/LetterBoxReducer';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Href } from '../../../../../Utils/Constants';

export default function MailPagination() {
    const { page } = useSelector((state: RootState) => state.email)
    const dispatch = useDispatch()
    const handlePagination = (value: boolean) => {
        dispatch(setPage(value))
    }
    return (
        <Pagination className="mail-pagination pagination-primary">
            <PaginationItem >
                <PaginationLink href={Href} previous />
            </PaginationItem>
            <PaginationItem active={!page ? true : false} onClick={() => handlePagination(false)}>
                <PaginationLink href={Href}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem active={page ? true : false} onClick={() => handlePagination(true)}>
                <PaginationLink href={Href}>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href={Href} next />
            </PaginationItem>
        </Pagination>
    );
};
