import React from 'react'
import { Label } from 'reactstrap'
import { LI, UL } from '../../../../../AbstractElements'
import { Href } from '../../../../../Utils/Constants'
import { profileLikeData } from '../../../../../Data/BonusUi/Tour'

export default function ProfileLike() {
    return (
        <div className="like-comment mt-4 step6">
            <UL className="list-inline simple-list flex-row">
                {profileLikeData && profileLikeData.map((item, index) => (
                    <LI className={`list-inline-item ${index !== profileLikeData.length - 1 ? 'b-r-gray pe-3' : ''}`} key={index}>
                        <Label className="m-0">
                            <a href={Href}>
                                <i className={`fa-solid fa-${item.icon}`} />
                            </a>{item.text}
                        </Label>
                    </LI>
                ))}
            </UL>
        </div>
    )
}