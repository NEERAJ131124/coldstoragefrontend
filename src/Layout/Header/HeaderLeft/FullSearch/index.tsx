import React, { ChangeEvent, useEffect, useState } from 'react'
import { Form, FormGroup, Input } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../ReduxToolkit/Store';
import { SearchSuggestionItem, SidebarMenuItem } from '../../../../Types/Layout.type';
import { menuList } from '../../../../Data/Layout/SidebarMenuList';
import { X } from 'react-feather';
import { setIsSearchBarOpen } from '../../../../ReduxToolkit/Reducers/Layout/LayoutReducer';
import SearchResult from './SearchResult';

export default function FullSearch() {
    const dispatch = useDispatch();
    const { isSearchBarOpen } = useSelector((state: RootState) => state.layout)
    const [arr, setArr] = useState<SearchSuggestionItem[]>([]);
    const [searchedWord, setSearchedWord] = useState<string>("");
    const [searchedArray, setSearchedArray] = useState<SearchSuggestionItem[]>([]);

    useEffect(() => {
        const suggestionArray: SearchSuggestionItem[] = [];
        const getAllLink = (item: SidebarMenuItem, icon: string | undefined) => {
            if (item.children) {
                item.children.forEach((ele) => {
                    getAllLink(ele, icon);
                });
            } else {
                suggestionArray.push({ icon: icon, title: item.title || '', path: item.path || "" });
            }
        };
        menuList?.forEach((item) => {
            item.items?.forEach((child) => {
                getAllLink(child, child.icon);
            });
        });
        setArr(suggestionArray);
    }, []);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        if (!searchedWord) setSearchedWord("");
        setSearchedWord(e.target.value);
        let data = [...arr];
        let result = data.filter((item) => item.title?.toLowerCase().includes(e.target.value.toLowerCase()));
        setSearchedArray(result);
    };
    const searchToggle = () => {
        dispatch(setIsSearchBarOpen(!isSearchBarOpen));
    }

    return (
        <Form className={`form-inline search-full col ${isSearchBarOpen ? "open" : ""}`}>
            <FormGroup className="form-group w-100">
                <div className="Typeahead Typeahead--twitterUsers">
                    <div className="u-posRelative">
                        <Input className="demo-input Typeahead-input form-control-plaintext w-100" type="text" placeholder='Search anything...' name="q" value={searchedWord} onChange={(e) => handleSearch(e)} />
                        <div className="spinner-border Typeahead-spinner" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <X className="close-search" onClick={searchToggle} />
                    </div>
                    <div className={`Typeahead-menu custom-scrollbar ${searchedWord.length ? "is-open" : ""}`} >
                        <SearchResult searchedArray={searchedArray} />
                    </div>
                </div>
            </FormGroup>
        </Form>
    )
}
