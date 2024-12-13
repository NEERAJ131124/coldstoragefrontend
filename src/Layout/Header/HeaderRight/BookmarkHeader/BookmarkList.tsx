import React from 'react'
import { Col, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../../ReduxToolkit/Store';
import { LI, UL } from '../../../../AbstractElements';
import { Href } from '../../../../Utils/Constants';
import { BookmarkListProps, SidebarMenuItem } from '../../../../Types/Layout.type';
import { setBookMarkClass } from '../../../../ReduxToolkit/Reducers/BookmarkReducer';
import SvgIcon from '../../../../Utils/CommonComponents/CommonSvgIcons';

export default function BookmarkList({ bookmarkList }: BookmarkListProps) {
    const dispatch = useDispatch();
    const { bookMarkClass } = useSelector((state: RootState) => state.bookmark);

    const addNewBookmark = () => {
        dispatch(setBookMarkClass(!bookMarkClass));
    };
    return (
        <UL className="simple-list bookmark-dropdown">
            <LI className="custom-scrollbar">
                <Row className="g-1 custom-bookmarks">
                    {bookmarkList.map((data: SidebarMenuItem, index: number) => (
                        <Col xs={4} className="text-center" key={index}>
                            <div className="bookmark-content">
                                <div className="bookmark-icon">
                                    <SvgIcon className='stroke-icon' iconId={data.icon} />
                                </div>
                                <Link to={data.path || ''}><span>{data.title}</span></Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            </LI>
            <LI className="text-center m-0">
                <Link onClick={addNewBookmark} className="flip-btn f-w-700 btn btn-secondary" id="flip-btn" to={Href}>{'Add New Bookmark'}</Link>
            </LI>
        </UL>
    )
}
