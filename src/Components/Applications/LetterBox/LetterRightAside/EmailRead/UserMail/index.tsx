import React from 'react'
import { ChevronDown } from 'react-feather'
import { Btn, Image, P } from '../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../Utils'
import InboxOptions from './InboxOptions'
import UserBody from './UserBody'
import UserFooter from './UserFooter'
import { MailPropsType } from '../../../../../../Types/LetterBox.type'
import { inboxSecurityData } from '../../../../../../Data/Applications/LetterBox'

export default function UserMail({ handlePrint }: MailPropsType) {

    return (
        <div className="user-mail-wrapper">
            <div className="user-title">
                <div>
                    <div className="rounded-border">
                        <Image className="img-fluid" src={dynamicImage(`user/12.png`)} alt="user" />
                    </div>
                    <div className="dropdown-subtitle">
                        <P>{'Jacob Jones'}</P>
                        <div className="onhover-dropdown">
                            <Btn color='transparent' className="p-0 dropdown-button"> {'To me'} <ChevronDown /></Btn>
                            <div className="inbox-security onhover-show-div">
                                {inboxSecurityData.map((item) => (
                                    <P key={item.id}> {item.text} <span>{item.span}</span></P>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <InboxOptions handlePrint={handlePrint} />
            </div>
            <UserBody />
            <UserFooter />
            <div className="send-btn">
                <Btn color='primary'>{'Send'}<i className="fa-solid fa-paper-plane" /></Btn>
            </div>
        </div>
    )
}