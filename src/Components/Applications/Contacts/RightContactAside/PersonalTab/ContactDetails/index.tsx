import React, { useCallback, useState } from 'react'
import { ContactDetailsProps } from '../../../../../../Types/Contact.type';
import { H5, Image, LI, P, UL } from '../../../../../../AbstractElements';
import { Href } from '../../../../../../Utils/Constants';
import EmptyData from '../../Common/EmptyData';
import PrintModal from './PrintModal';
import { dynamicImage } from '../../../../../../Utils';
import EditDeleteLink from './EditDeleteLink';

export default function ContactDetails({ selectedUser, userEditCallback, historyToggle }: ContactDetailsProps) {
    const [printModal, setPrintModal] = useState(false);
    const togglePrintModal = () => setPrintModal(!printModal);
    const toggleCallback = useCallback((toggle: boolean) => {
        setPrintModal(toggle);
    }, []);

    return (
        <div>
            {selectedUser ? (
                <div className="profile-mail">
                    <div className="d-flex">
                        <Image className="img-100 img-fluid m-r-20 rounded-circle update_img_0" src={dynamicImage(selectedUser.avatar)} alt="" />
                        <div className="flex-grow-1 mt-0">
                            <H5>
                                <span className="first_name_0">{selectedUser.name} </span>
                                <span className="last_name_0">{selectedUser.surname}</span>
                            </H5>
                            <P className="email_add_0">{selectedUser.email}</P>
                            <UL className='simple-list flex-row'>
                                <EditDeleteLink userEditCallback={userEditCallback} selectedUser={selectedUser} />
                                <LI><a href={Href} onClick={() => historyToggle()}>{'History'}</a></LI>
                                <LI><a href={Href} onClick={() => togglePrintModal()}>{'Print'}</a></LI>
                            </UL>
                        </div>
                    </div>
                    <div className="email-general">
                        <H5 className="mb-3 f-w-700">{'General'}</H5>
                        <UL className='simple-list'>
                            <LI>{'Name'} <span className="font-primary first_name_0">{selectedUser.name}</span></LI>
                            <LI>{'Mobile No'}<span className="font-primary mobile_num_0">{selectedUser.mobile}</span></LI>
                            <LI>{'Email Address'}<span className="font-primary email_add_0">{selectedUser.email}</span></LI>
                        </UL>
                    </div>
                </div>
            ) : (<EmptyData />)}
            {selectedUser && <PrintModal toggleCallback={toggleCallback} printModal={printModal} selectedUser={selectedUser} />}
        </div>
    )
}