import React from 'react'
import { Link } from 'react-router-dom'
import { LI, UL } from '../../../AbstractElements'
import { SocialMediaProp } from '../../../Types/CommonComponent.type'
import { socialCardLinkList } from '../../../Data/Applications/Users'

export default function SocialMedia({ className }: SocialMediaProp) {
    return (
        <div className={`social-media ${className} step4`}>
            <UL className="list-inline simple-list flex-row">
                {socialCardLinkList && socialCardLinkList.map((item, index) => (
                    <LI className="list-inline-item" key={index}>
                        <Link to={item.link} target="_blank" rel='noreferrer'>
                            <i className={item.icon} />
                        </Link>
                    </LI>
                ))}
            </UL>
        </div>
    )
}
