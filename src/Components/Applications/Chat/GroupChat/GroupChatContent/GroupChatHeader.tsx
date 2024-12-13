import React, { Fragment } from 'react'
import { Image, LI, P, UL } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';
import ContactEdit from '../../Common/ContactEdit';
import { groupChatHeader } from '../../../../../Data/Applications/LetterBox';

export default function GroupChatHeader() {
    return (
        <div className="right-sidebar-title">
            <div className="common-space">
                <div className="chat-time group-chat">
                    <UL className="simple-list flex-row">
                        {groupChatHeader.map((item, i, arr) => (
                            <Fragment key={i}>
                                {i !== arr.length - 1 && (
                                    <LI><Image className="img-fluid rounded-circle" src={dynamicImage(`avtar/${item}.jpg`)} alt="user" /></LI>
                                )}
                                {i === arr.length - 1 && (
                                    <LI>
                                        <div className="custom-name profile-count light-background">
                                            <P className="f-w-500">{item}{"+"}</P>
                                        </div>
                                    </LI>
                                )}
                            </Fragment>
                        ))}
                    </UL>
                    <div>
                        <span>{'Meeting Department'}</span>
                        <P>{'35 Members'}</P>
                    </div>
                </div>
                <div className="d-flex gap-2">
                    <div className="contact-edit chat-alert"><i className="icon-info-alt"></i></div>
                    <ContactEdit divClass='chat-alert' />
                </div>
            </div>
        </div>
    )
}