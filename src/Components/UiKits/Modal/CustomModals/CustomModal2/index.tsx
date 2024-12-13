import React, { useState } from 'react'
import { Col } from 'reactstrap';
import DotText from '../Common/DotText';
import { Btn, H4, Image, P } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';
import CommonModal from '../../Common/CommonModal';
import StaticModalForm from '../../Common/StaticModalForm';

export default function CustomModal2() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal) }
    const data = {
        isOpen: modal,
        center: true,
        toggler: toggle,
        bodyClass: 'dark-sign-up social-profile text-start'
    }
    return (
        <Col xl={4} md={6} className='custom-alert text-center'>
            <div className='card-wrapper border rounded-3 h-100'>
                <div className='demo-img'>
                    <DotText />
                    <div className="title-wrapper pb-3 modal-heading">
                        <H4 className="theme-name mb-0">
                            <span>{'Modal 2 - '}</span>{'Result Modal'}
                        </H4>
                        <P>{'Example of Admiro login form.'}</P>
                    </div>
                    <div className="overflow-hidden">
                        <Image className="img-fluid" src={dynamicImage(`alert/learning.png`)} alt="learning" />
                        <Btn color='primary' className="mx-auto mt-3" onClick={toggle}>{'Click Out'}</Btn>
                    </div>
                    <CommonModal modalData={data}>
                        <div className="modal-toggle-wrapper">
                            <H4>{'Admiro Login'}</H4>
                            <P>{'Fill in your information below to continue.'}</P>
                            <StaticModalForm toggle={toggle} />
                        </div>
                    </CommonModal>
                </div>
            </div>
        </Col>
    )
}