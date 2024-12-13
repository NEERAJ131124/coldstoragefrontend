import React, { useRef } from 'react'
import { OrganizationTabPaneProps } from '../../../../../Types/Contact.type'
import { H3, Image, LI, P, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import { Href } from '../../../../../Utils/Constants'
import ReactToPrint from 'react-to-print'

export default function OrganizationTabPane({ user }: OrganizationTabPaneProps) {
    const componentRef = useRef<HTMLDivElement>(null);

    return (
        <div className='profile-mail'>
            <div className="d-flex">
                <Image className='img-100 img-fluid m-r-20 rounded-circle update_img_5' src={dynamicImage(user.image)} alt='' />
                <div className="flex-grow-1 mt-0">
                    <H3>
                        <span className='first_name_5'>{user.name}</span>
                    </H3>
                    <P className='email_add_5'>{user.email}</P>
                    <UL className='simple-list'>
                        <LI>
                            <ReactToPrint
                                trigger={() => (
                                    <a href={Href}> {'Print'}</a>
                                )}
                                content={() => componentRef.current}
                            />
                        </LI>
                    </UL>
                </div>
            </div>
            <div className='email-general' ref={componentRef}>
                <H3>{'General'}</H3>
                <P>{'Email Address'}: <span className='font-primary email_add_5'>{user.email}</span></P>
                <div className='gender'>
                    <H3>{'Personal'}</H3>
                    <P>{'Gender'}: <span>{user.gender}</span></P>
                </div>
            </div>
        </div>
    )
}
