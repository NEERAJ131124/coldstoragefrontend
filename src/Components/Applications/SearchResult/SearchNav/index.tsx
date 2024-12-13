import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { SearchNavProps } from '../../../../Types/SearchResult.type'
import { Href } from '../../../../Utils/Constants'
import { searchNavData } from '../../../../Data/Applications/SearchResult'

export default function SearchNav({ activeTab, setActiveTab }: SearchNavProps) {
    return (
        <div className="text-center">
            <Nav className="search-list" tabs>
                {searchNavData.map((nav) => (
                    <NavItem key={nav.id} className={nav.color ? nav.color : ''}>
                        <NavLink href={Href} className={`${nav.textColor ? nav.textColor : ''} ${activeTab === nav.id ? 'active' : ''}`} onClick={() => setActiveTab(nav.id)}>
                            {nav.icon && <i className={`icon-${nav.icon}`} />}{nav.text}
                        </NavLink>
                    </NavItem>
                ))}
            </Nav>
        </div>
    )
}