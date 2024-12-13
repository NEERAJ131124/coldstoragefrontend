import React from 'react'
import { H3, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function ProfileHeader() {
    return (
        <div className="d-flex align-items-center flex-wrap">
            <div className="media-size-email">
                <Image className="me-2 img-40 rounded-circle" src={dynamicImage(`user/user.png`)} alt="" />
            </div>
            <div className="flex-grow-1">
                <H3 className='f-w-700'>{'Mark Jecno'}</H3>
                <P>{'Markjecno@gmail.com'}</P>
            </div>
        </div>
    )
}