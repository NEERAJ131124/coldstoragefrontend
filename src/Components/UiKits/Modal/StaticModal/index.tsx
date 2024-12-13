import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { StaticModalTitle } from '../../../../Utils/Constants';
import { staticModalSubTitle } from '../../../../Data/UiKits/Modal';
import { Btn, H4, P } from '../../../../AbstractElements';
import CommonModal from '../Common/CommonModal';
import StaticModalForm from '../Common/StaticModalForm';

export default function StaticModal() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal) }
    const ModalData = {
        isOpen: modal,
        toggler: toggle,
        bodyClass: 'dark-sign-up social-profile text-start'
    }

    return (
        <Col xl={4} xxl={5}>
            <Card>
                <CommonCardHeader title={StaticModalTitle} subTitle={staticModalSubTitle} />
                <CardBody>
                    <Btn color='primary' onClick={toggle} >{'Static backdrop modal'}</Btn>
                    <CommonModal modalData={ModalData}>
                        <div className='modal-toggle-wrapper'>
                            <H4>{'Admiro Login'}</H4>
                            <P>{'Fill in your information below to continue.'}</P>
                            <StaticModalForm toggle={toggle} />
                        </div>
                    </CommonModal>
                </CardBody>
            </Card>
        </Col>
    )
}