import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Card, Col, Row } from 'reactstrap';
import { RootState } from '../../../../../ReduxToolkit/Store';
import { BookmarkProps } from '../../../../../Types/Bookmark.type';
import { fillStarFalse, removeMyBookMark, updateFillStar } from '../../../../../ReduxToolkit/Reducers/BookmarkReducer';
import { Image } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';
import { Href } from '../../../../../Utils/Constants';
import DescriptionData from './DescriptionData';
import NoBookmarksFound from '../Common/NoBookmarksFound';

export default function DataLoop() {
    const { bookmark } = useSelector((state: RootState) => state.bookmark);
    const dispatch = useDispatch();
    const addToFavourites = (data: BookmarkProps) => {
        if (data.fillStar === false) {
            dispatch(updateFillStar(data));
        } else {
            dispatch(fillStarFalse(data.id));
            dispatch(removeMyBookMark(data.id));
        }
    };
    return (
        <Row id='bookmarkData'>
            {bookmark.length > 0 ? (
                bookmark.map((data) => (
                    <Col xxl={3} md={4} className='col-ed-4' key={data.id}>
                        <Card className='card-with-border bookmark-card overflow-hidden'>
                            <div className='details-website'>
                                <Image className='img-fluid' src={dynamicImage(data.image)} alt='' />
                                <div className={`favourite-icon favourite_0 ${data.fillStar ? 'favourite' : ''}`} onClick={() => addToFavourites(data)}>
                                    <a href={Href}><i className='fa-solid fa-star' /></a>
                                </div>
                                <DescriptionData data={data} />
                            </div>
                        </Card>
                    </Col>
                )
                )
            ) : (
                <NoBookmarksFound />
            )}
        </Row>
    )
}