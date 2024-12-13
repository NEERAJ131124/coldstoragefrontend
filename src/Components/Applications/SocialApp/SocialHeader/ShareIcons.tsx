import React from 'react'
import { LI, UL } from '../../../../AbstractElements'
import { Href } from '../../../../Utils/Constants'

export default function ShareIcons() {
    return (
        <UL className="share-icons simple-list flex-row">
            <LI>
                <a className="social-icon bg-primary" href={Href}>
                    <i className="fa-regular fa-face-smile" />
                </a>
            </LI>
            <LI>
                <a className="social-icon bg-secondary" href={Href}>
                    <i className="fa-brands fa-weixin" />
                </a>
            </LI>
            <LI>
                <a className="social-icon bg-warning" href={Href}>
                    <i className="fa-solid fa-share-nodes" />
                </a>
            </LI>
        </UL>
    )
}