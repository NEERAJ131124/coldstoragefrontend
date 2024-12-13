import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import SweetAlert from "sweetalert2";
import { Edit2, Link, Share2, Tag, Trash2 } from 'react-feather';
import { RootState } from '../../../../../ReduxToolkit/Store';
import { BookmarkProps, DescriptionDataProps } from '../../../../../Types/Bookmark.type';
import { removeBookmMark, removeMyBookMark, setEditImgUrl, setEditModal, setEditRow } from '../../../../../ReduxToolkit/Reducers/BookmarkReducer';
import { dynamicImage } from '../../../../../Utils';
import { H5, LI, P, UL } from '../../../../../AbstractElements';
import { Href } from '../../../../../Utils/Constants';

export default function DescriptionData({ data }: DescriptionDataProps) {
    const { editModal } = useSelector((state: RootState) => state.bookmark);

    const dispatch = useDispatch();
    const editToggle = () => {
        dispatch(setEditModal(!editModal));
    };
    const onClickHandle = (data: BookmarkProps) => {
        editToggle();
        dispatch(setEditRow(data));
        dispatch(setEditImgUrl(`${dynamicImage(data.image)}`));
    };
    const removeFromBookmark = (bookmarkId: number, fillstar: boolean) => {
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
                if (fillstar) dispatch(removeMyBookMark(bookmarkId));
                dispatch(removeBookmMark(bookmarkId));
                SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
            } else {
                SweetAlert.fire("Your imaginary file is safe!");
            }
        });
    };
    return (
        <div className='desciption-data'>
            <div className='title-bookmark'>
                <H5>{data.title} </H5>
                <P> {data.website_url} </P>
                <div className='hover-block'>
                    <UL className='simple-list flex-row'>
                        <LI><a href={Href} onClick={() => onClickHandle(data)}><Edit2 /></a></LI>
                        <LI><a href={Href}><Link /></a></LI>
                        <LI><a href={Href}><Share2 /></a></LI>
                        <LI><a href={Href} onClick={() => removeFromBookmark(data.id, data.fillStar)}><Trash2 /></a></LI>
                        <LI className='pull-right text-end'><a href={Href}><Tag /></a></LI>
                    </UL>
                </div>
                <div className='content-general'>
                    <P className="desc_0">{data.description} </P>
                    <span className="collection_0">{data.collection}</span>
                </div>
            </div>
        </div>
    )
}