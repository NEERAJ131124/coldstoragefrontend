import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Input, InputGroup, InputGroupText } from 'reactstrap';
import { Search } from 'react-feather';
import { searchMember } from '../../../../../ReduxToolkit/Reducers/ChatReducer';

export default function SearchList() {
    const [searchKeyword, setSearchKeyword] = useState("");
    const dispatch = useDispatch();
    const handleSearchKeyword = (keyword: string) => {
        setSearchKeyword(keyword);
        dispatch(searchMember(keyword));
    };
    return (
        <div className="left-sidebar-chat">
            <InputGroup>
                <InputGroupText>
                    <Search className="search-icon text-gray" />
                </InputGroupText>
                <Input type="text" placeholder="Search here.." value={searchKeyword} onChange={(e) => handleSearchKeyword(e.target.value)} />
            </InputGroup>
        </div>
    )
}