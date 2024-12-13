import React from 'react'
import { H4, Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function ProfileHeader() {
    return (
        <div className="d-flex">
            <div className="d-flex-size-email">
                <Image className="rounded-circle me-3" src={dynamicImage(`user/user.png`)} alt="" />
            </div>
            <div className="flex-grow-1">
                <H4 className="f-w-700">{'MARK JENCO'}</H4>
                <P>{'Markjecno@gmail.com'}</P>
            </div>
        </div>
    )
}