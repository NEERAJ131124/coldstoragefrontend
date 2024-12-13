import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { NestedModalTitle } from '../../../../Utils/Constants'
import { nestedModalImage, nestedModalSubTitle } from '../../../../Data/UiKits/Modal'
import { Btn, H6, Image, LI, UL } from '../../../../AbstractElements'
import CommonModal from '../Common/CommonModal'
import { dynamicImage } from '../../../../Utils'
import OtherModal from './OtherModal'

export default function NestedModal() {
    const [open, setOpen] = useState(false)
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const toggle2 = () => { setOpen(!open); }
    const data = {
        isOpen: modal,
        center: true,
        toggler: toggle
    }
    return (
        <Col xl={4} xxl={4}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={NestedModalTitle} subTitle={nestedModalSubTitle} />
                <CardBody>
                    <Btn color='dark' onClick={toggle}>{'Open first modal'}</Btn>
                    <CommonModal modalData={data}>
                        <div className='modal-toggle-wrapper'>
                            <UL className="modal-img simple-list flex-row">
                                {nestedModalImage.map((item, index) => (
                                    <LI key={index}>
                                        <Image src={dynamicImage(`gif/${item}.gif`)} alt="whatsapp" />
                                    </LI>
                                ))}
                            </UL>
                            <H6>{'Remove your complete account from your phone or tablet to sign out of the Gmail app.'}</H6>
                            <Btn color='dark' className="rounded-pill w-100 mt-4" onClick={toggle2}>{'Connect new account'}</Btn>
                            <Btn color='transparent' className="rounded-pill w-100 dark-toggle-btn" onClick={toggle}>{'Cancel'}</Btn>
                        </div>
                    </CommonModal>
                    <OtherModal modal={open} toggle={toggle2} />
                </CardBody>
            </Card>
        </Col>
    )
}