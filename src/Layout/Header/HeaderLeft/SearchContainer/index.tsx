import React, { ChangeEvent, useEffect, useState } from 'react'
import { menuList } from '../../../../Data/Layout/SidebarMenuList';
import { SearchSuggestionItem, SidebarMenuItem } from '../../../../Types/Layout.type';
import { Input } from 'reactstrap';
import ResponsiveSearchList from './ResponsiveSearchList';

export default function SearchContainer() {
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

  return (
    <div className="form-group-header d-lg-block d-none">
      <div className="Typeahead Typeahead--twitterUsers">
        <div className="u-posRelative d-flex align-items-center">
          <Input className="demo-input Typeahead-input form-control-plaintext w-100 p-0" type="text" placeholder='Search anything...' name="q" value={searchedWord} onChange={(e) => handleSearch(e)} />
          <i className="search-bg iconly-Search icli" />
        </div>
        <div className={`Typeahead-menu custom-scrollbar ${searchedWord.length ? "is-open" : ""}`} >
          <ResponsiveSearchList searchedArray={searchedArray} />
        </div>
      </div>
    </div>
  )
}