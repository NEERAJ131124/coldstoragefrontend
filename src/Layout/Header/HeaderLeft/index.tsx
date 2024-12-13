import React from 'react'
import SearchContainer from './SearchContainer';
import FullSearch from './FullSearch';

export default function HeaderLeft() {

    return (
        <div className="header-left">
            <FullSearch/>
            <SearchContainer/>
        </div>
    )
}