import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../ReduxToolkit/Store';
import SideHeader from '../Common/SideHeader';
import ContactSearch from './ContactSearch';
import { ContactChildItem, ContactParentItem } from '../../../../../../Types/Chat.type';
import { Image, LI, P, UL } from '../../../../../../AbstractElements';
import { dynamicImage } from '../../../../../../Utils';
import ContactEdit from '../../ContactEdit';

export default function ContactsTabPane() {
    const { chatContact } = useSelector((state: RootState) => state.chat);

    return (
        <>
            <SideHeader title='Contacts' />
            <ContactSearch />
            {chatContact && chatContact.length > 0 ? (
                <div className="contact-wrapper">
                    {chatContact.map((data: ContactParentItem) => (
                        <Fragment key={data.id}>
                            <P>{data.title}</P>
                            <UL className="border-0 simple-list">
                                {data.child.map((item: ContactChildItem) => (
                                    <LI className="common-space" key={item.id}>
                                        <div className="chat-time">
                                            {item.text ? (
                                                <div className={`custom-name bg-light-${item.textColor}`}>
                                                    <P className={`text-${item.textColor} f-w-500`}>{item.text}</P>
                                                </div>
                                            ) : (
                                                <Image className="img-fluid rounded-circle" src={dynamicImage(item.src)} alt="user" />
                                            )}
                                            <div>
                                                <span>{item.name}</span>
                                                <P>{item.number}</P>
                                            </div>
                                        </div>
                                        <ContactEdit />
                                    </LI>
                                ))}
                            </UL>
                        </Fragment>
                    ))}
                </div>
            ) : (<div className="text-center">{'No User Present'}</div>)
            }
        </>
    )
}
