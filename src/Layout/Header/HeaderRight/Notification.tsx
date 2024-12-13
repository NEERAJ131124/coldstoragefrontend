import React, { useState } from 'react'
import { Badges, H3, H5, H6, LI, P, UL } from '../../../AbstractElements'
import { Href, NotificationTitle } from '../../../Utils/Constants';
import { notificationData } from '../../../Data/Layout/RightHeader';
import SvgIcon from '../../../Utils/CommonComponents/CommonSvgIcons';

export default function Notification() {
    const [notifyDropdown, setNotifyDropdown] = useState(false);
    const toggle = () => setNotifyDropdown((prevState) => !prevState);
    return (
        <LI className="custom-dropdown">
            <a href={Href} onClick={toggle}><SvgIcon iconId="notification" /></a>
            <Badges color='primary' pill>{'4'}</Badges>
            <div className={`custom-menu notification-dropdown py-0 overflow-hidden ${notifyDropdown ? 'show' : ''}`}>
                <H3 className="title bg-primary-light dropdown-title">{NotificationTitle} <span className="font-primary">{'View all'}</span></H3>
                <UL className="activity-timeline simple-list">
                    {notificationData.map((item) => (
                        <LI className="d-flex align-items-start" key={item.id}>
                            <div className="activity-line" />
                            <div className={`activity-dot-${item.color}`} />
                            <div className="flex-grow-1">
                                <H6 className={`f-w-600 font-${item.color}`}>{item.date}
                                    <span>{item.time}</span>
                                    <span className={`circle-dot-${item.color} float-end`}>
                                        <SvgIcon className="circle-color" iconId='circle' />
                                    </span>
                                </H6>
                                <H5>{item.name}</H5>
                                <P className={item.id === 1 ? "mb-0" : ""}>{item.text}</P>
                            </div>
                        </LI>
                    ))}
                </UL>
            </div>
        </LI >
    )
}