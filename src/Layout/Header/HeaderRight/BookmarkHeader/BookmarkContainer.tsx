import React, { useState } from 'react'
import { H3, LI, UL } from '../../../../AbstractElements'
import { BookMarkContainerProps } from '../../../../Types/Layout.type'
import SvgIcon from '../../../../Utils/CommonComponents/CommonSvgIcons';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../ReduxToolkit/Store';
import { setBookMarkClass } from '../../../../ReduxToolkit/Reducers/BookmarkReducer';
import { Back, Bookmark, Href } from '../../../../Utils/Constants';
import BookmarkList from './BookmarkList';
import FlipBackContent from './FlipBackContent';
import { Link } from 'react-router-dom';

export default function BookmarkContainer({ handleBookmark, bookmarkList, bookmarkItems, handleSearch }: BookMarkContainerProps) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState); const dispatch = useDispatch();
    const { bookMarkClass } = useSelector((state: RootState) => state.bookmark);

    const backToBookmark = () => {
        dispatch(setBookMarkClass(!bookMarkClass));
    };
    return (
        <LI className="custom-dropdown">
            <Link to={Href} onClick={toggle}><SvgIcon iconId="bookmark" /></Link>
            <div className={`custom-menu bookmark-dropdown py-0 overflow-hidden ${dropdownOpen ? "show" : ""}`}>
                <div className="flip-card">
                    <div className={`flip-card-inner ${bookMarkClass ? "flipped" : ""}`}>
                        <div className="front">
                            <H3 className="title bg-primary-light">{Bookmark}</H3>
                            <BookmarkList bookmarkList={bookmarkList} />
                        </div>
                        <div className="back">
                            <UL>
                                <FlipBackContent handleBookmark={handleBookmark} bookmarkItems={bookmarkItems} handleSearch={handleSearch} />
                                <LI className='pb-0'>
                                    <a onClick={backToBookmark} className="f-w-700 d-block flip-back btn btn-secondary text-white" id="flip-back" href={Href}>{Back}</a>
                                </LI>
                            </UL>
                        </div>
                    </div>
                </div>
            </div>
        </LI>
    )
}