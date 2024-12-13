import React, { useCallback, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Nav, NavItem } from 'reactstrap';
import { Bookmark, PlusCircle } from 'react-feather';
import { RootState } from '../../../../ReduxToolkit/Store';
import { BookmarkNavStateType } from '../../../../Types/Bookmark.type';
import { updateActiveTabs } from '../../../../ReduxToolkit/Reducers/BookmarkReducer';
import { Btn } from '../../../../AbstractElements';
import { Href, NewBookmark } from '../../../../Utils/Constants';
import NewBookmarkModal from '../BookmarkModals/NewBookmarkModal';
import { bookmarkTagsNav, bookmarkViewsNav } from '../../../../Data/Applications/Bookmarks';
import TagModal from '../BookmarkModals/TagModal';

export default function BookmarkNavTabs() {
    const dispatch = useDispatch();
    const [state, setState] = useState<BookmarkNavStateType>({ addModal: false, tagModal: false });
    const { activeTabs } = useSelector((state: RootState) => state.bookmark);
    const onClickHandle = (id: string) => {
        dispatch(updateActiveTabs(id));
    };
    const modalToggle = (modalName: keyof BookmarkNavStateType) => {
        setState((prevState) => ({
            ...prevState,
            [modalName]: !prevState[modalName],
        }));
    };
    const addToggleCallback = useCallback((toggle: boolean) => {
        setState((prevState) => ({
            ...prevState,
            addModal: toggle,
        }));
    }, []);

    return (
        <Nav className="main-menu">
            <NavItem>
                <Btn color='transparent' block className="button-primary btn-mail w-100" onClick={() => modalToggle('addModal')}><Bookmark className="me-2" />{NewBookmark}</Btn>
                <NewBookmarkModal showModal={state.addModal} modalToggle={() => modalToggle('addModal')} addCallback={addToggleCallback} />
            </NavItem>
            <NavItem><span className="main-title">{'Views'}</span></NavItem>
            {bookmarkViewsNav.map((item) => (
                <NavItem key={item.id}>
                    <a href={Href} className={activeTabs === item.id ? 'active' : ''} onClick={() => onClickHandle(item.id)}><span className="title">{item.title}</span></a>
                </NavItem>
            ))}
            <NavItem><hr /></NavItem>
            <NavItem>
                <span className="main-title"> {'Tags'}
                    <span className="pull-right"><a href={Href} onClick={() => modalToggle('tagModal')}><PlusCircle /></a></span>
                </span>
                <TagModal showModal={state.tagModal} modalToggle={() => modalToggle('tagModal')} />
            </NavItem>
            {bookmarkTagsNav.map((item) => (
                <NavItem key={item.id}>
                    <a href={Href} className={activeTabs === item.id ? 'active' : ''} onClick={() => onClickHandle(item.id)}><span className="title">{item.title}</span></a>
                </NavItem>
            ))}
        </Nav>
    )
}