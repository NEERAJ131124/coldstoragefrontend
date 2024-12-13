import React from 'react'
import { P } from '../../../../../../AbstractElements'
import { userBodyData } from '../../../../../../Data/Applications/LetterBox'

export default function UserBody() {
    return (
        <div className="user-body">
            {userBodyData.map((item, index) => (
                <P key={index}>{item.text}</P>
            ))}
            <div className="mail-subcontent">
                <P>{'Yours faithfully,'}</P>
                <P>{'Account Security Team'}</P>
            </div>
        </div>
    )
}
