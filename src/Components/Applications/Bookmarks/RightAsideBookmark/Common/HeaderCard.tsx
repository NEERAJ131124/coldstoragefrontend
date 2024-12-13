import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { CardHeader } from 'reactstrap';
import { Grid, List } from 'react-feather';
import { HeaderCardProp } from '../../../../../Types/Bookmark.type';
import { setGridView } from '../../../../../ReduxToolkit/Reducers/BookmarkReducer';
import { H3, LI, UL } from '../../../../../AbstractElements';
import { Href } from '../../../../../Utils/Constants';

export default function HeaderCard({ title }: HeaderCardProp) {
    const [active, setActive] = useState(1)
    const dispatch = useDispatch();
    const gridBookmark = () => {
        dispatch(setGridView(true));
    };
    const listBookmark = () => {
        dispatch(setGridView(false));
    };
    return (
        <CardHeader className='d-flex card-no-border pb-0'>
            <H3 className='mb-0'>{title}</H3>
            <UL className='simple-list flex-row'>
                <LI>
                    <a className={`grid-bookmark-view ${active === 1 ? 'active' : ''}`} onClick={()=> setActive(1)} href={Href}>
                        <Grid onClick={gridBookmark} />
                    </a>
                </LI>
                <LI>
                    <a className={`list-layout-view ${active === 2 ? 'active' : ''}`} onClick={()=> setActive(2)} href={Href}>
                        <List onClick={listBookmark} />
                    </a>
                </LI>
            </UL>
        </CardHeader>
    )
}