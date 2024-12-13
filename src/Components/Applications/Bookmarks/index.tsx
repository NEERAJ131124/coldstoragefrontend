import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row } from 'reactstrap';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs';
import { getBookmarkData } from '../../../ReduxToolkit/Reducers/BookmarkReducer';
import { AppDispatch } from '../../../ReduxToolkit/Store';
import { ApplicationTitle, BookmarksTitle } from '../../../Utils/Constants';
import LeftAsideBookmark from './LeftAsideBookmark';
import RightAsideBookmark from './RightAsideBookmark';

export default function BookmarksContainer() {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getBookmarkData());
    }, [dispatch]);
    return (
        <>
            <Breadcrumbs pageTitle={BookmarksTitle} parent={ApplicationTitle} title={BookmarksTitle} />
            <Container fluid>
                <div className="email-wrap bookmark-wrap">
                    <Row>
                        <LeftAsideBookmark />
                        <RightAsideBookmark />
                    </Row>
                </div>
            </Container>
        </>
    )
}