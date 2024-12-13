import React from 'react'
import { MoreVertical } from 'react-feather'
import { H6, Image, P } from '../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../Utils'

export default function NewUsersHeader() {
    return (
        <div className="new-users-social">
            <div className="d-flex gap-3">
                <Image className="rounded-circle image-radius m-r-15" src={dynamicImage(`user/1.jpg`)} alt="" />
                <div className="flex-grow-1">
                    <H6 className="mb-0">{'ELANA'}</H6>
                    <P>{'January, 12,2024'}</P>
                </div>
                <span className="pull-right mt-0"><MoreVertical /></span>
            </div>
        </div>
    )
}