import React from 'react'
import { Link } from 'react-router-dom'
import { SearchSuggestionListType } from '../../../../Types/Layout.type'
import SvgIcon from '../../../../Utils/CommonComponents/CommonSvgIcons'

export default function SearchResult({ searchedArray }: SearchSuggestionListType) {

    return (
        <>
            {searchedArray?.map((item, index) => (
                <div className="ProfileCard u-cf" key={index}>
                    <div className="ProfileCard-details">
                        <div className="ProfileCard-realName">
                            <Link className="realname w-auto d-flex justify-content-start gap-2" to={item.path}>
                                <SvgIcon className="stroke-icon" iconId={item.icon} />
                                {item.title}
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
            {!searchedArray?.length && <p>Opps!! There are no result found.</p>}
        </>
    )
}
