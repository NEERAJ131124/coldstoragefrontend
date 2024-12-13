import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { CenteredModalTitle } from '../../../../Utils/Constants';
import { centeredModalSubTitle } from '../../../../Data/UiKits/Modal';
import { Btn, H4, Image, LI, P, UL } from '../../../../AbstractElements';
import CommonModal from '../Common/CommonModal';
import { dynamicImage } from '../../../../Utils';

export default function CenteredModal() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        center: true,
        toggler: toggle,
    }
    return (
        <Col xxl={3} xl={4}>
            <Card>
                <CommonCardHeader title={CenteredModalTitle} subTitle={centeredModalSubTitle} />
                <CardBody>
                    <Btn color='success' onClick={toggle}>{'Vertically centered'}</Btn>
                    <CommonModal modalData={data}>
                        <div className="modal-toggle-wrapper">
                            <UL className="modal-img simple-list">
                                <LI>
                                    <Image src={dynamicImage(`gif/danger.gif`)} alt="error" />
                                </LI>
                            </UL>
                            <H4 className="text-center pb-2">{'Ohh! Something went wrong!'}</H4>
                            <P className="text-center">{"Attackers on malicious activity may trick you into doing something dangrous like installing software or revealing your personal informations."}</P>
                            <Btn color='secondary' className="d-flex m-auto" onClick={toggle}>{'Close'}</Btn>
                        </div>
                    </CommonModal>
                </CardBody>
            </Card>
        </Col>
    )
}
