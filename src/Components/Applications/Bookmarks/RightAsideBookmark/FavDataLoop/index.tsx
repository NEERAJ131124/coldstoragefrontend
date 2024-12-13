import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../../ReduxToolkit/Store';
import { BookmarkProps } from '../../../../../Types/Bookmark.type';
import { removeMyBookMark, updateBookMark, updateFavFillStar } from '../../../../../ReduxToolkit/Reducers/BookmarkReducer';
import { Card, Col, Row } from 'reactstrap';
import { Image } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';
import { Href } from '../../../../../Utils/Constants';
import NoBookmarksFound from '../Common/NoBookmarksFound';
import FavDescriptionData from './FavDescriptionData';

export default function FavDataLoop() {
    const { myBookmarkData } = useSelector((state: RootState) => state.bookmark);
    const dispatch = useDispatch();
    const removeFavourite = (data: BookmarkProps) => {
        if (data.fillStar) {
            dispatch(updateFavFillStar(data.id));
            dispatch(removeMyBookMark(data.id));
            dispatch(updateBookMark({ id: data.id, data, image_url: data.image }));
        }
    };
    return (
        <Row>
            {myBookmarkData.length > 0 ? (
                myBookmarkData.map((mybookdata) => {
                    return (
                        <Col xxl={3} md={4} className='col-ed-4' key={mybookdata.id}>
                            <Card className='card-with-border bookmark-card overflow-hidden'>
                                <div className='details-website'>
                                    <Image className='img-fluid' src={dynamicImage(mybookdata.image)} alt='' />
                                    <div className={`favourite-icon favourite_0 ${mybookdata.fillStar ? 'favourite' : ''}`}>
                                        <a href={Href}>
                                            <i className='fa-solid fa-star' onClick={() => removeFavourite(mybookdata)} />
                                        </a>
                                    </div>
                                    <FavDescriptionData data={mybookdata} />
                                </div>
                            </Card>
                        </Col>
                    );
                })
            ) : (
                <NoBookmarksFound />
            )}
        </Row>
    )
}
