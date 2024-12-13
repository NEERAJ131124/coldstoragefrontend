import React from 'react'
import { LI, UL } from '../../../AbstractElements'
import LanguageSelect from './LanguageSelect'
import MoonLight from './MoonLight';
import CartHeader from './CartHeader';
import Notification from './Notification';
import FullScreen from './FullScreen';
import CloudDesign from './CloudDesign';
import { Href } from '../../../Utils/Constants';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../../ReduxToolkit/Store';
import { setIsSearchBarOpen } from '../../../ReduxToolkit/Reducers/Layout/LayoutReducer';
import UserWrap from './UserWrap';
import SvgIcon from '../../../Utils/CommonComponents/CommonSvgIcons';
import BookmarkHeader from './BookmarkHeader';

export default function HeaderRight() {
    const dispatch = useDispatch();
    const { isSearchBarOpen } = useSelector((state: RootState) => state.layout);
    const handleSearch = () => {
        dispatch(setIsSearchBarOpen(!isSearchBarOpen));
    }
    return (
        <div className="nav-right">
            <UL className="header-right simple-list flex-row">
                {/* <LanguageSelect /> */}
                <LI className="search d-lg-none d-flex">
                    <a href={Href} onClick={handleSearch}>
                        <SvgIcon iconId="Search" />
                    </a>
                </LI>
                {/* <MoonLight /> */}
                {/* <CartHeader /> */}
                {/* <Notification /> */}
                {/* <FullScreen /> */}
                {/* <BookmarkHeader /> */}
                {/* <CloudDesign /> */}
                <UserWrap />
            </UL>
        </div>
    )
}