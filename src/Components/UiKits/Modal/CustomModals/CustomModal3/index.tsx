import React, { useState } from 'react'
import { Col, Modal } from 'reactstrap';
import DotText from '../Common/DotText';
import { Btn, H4, Image, P } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';
import CustomModal3Body from './CustomModal3Body';

export default function CustomModal3() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal) }

    return (
        <Col xl={4} md={12} className='custom-alert text-center'>
            <div className='card-wrapper border rounded-3 h-100'>
                <div className='demo-img'>
                    <DotText />
                    <div className="title-wrapper pb-3 modal-heading">
                        <H4 className="theme-name mb-0"><span>{'Modal 3 - '}</span>{'Balance Modal'}</H4>
                        <P>{'Example of Admiro dashboard balance card.'}</P>
                    </div>
                    <div className="overflow-hidden balance-modal">
                        <Image className="img-fluid" src={dynamicImage(`alert/balance.png`)} alt="balance" />
                        <Btn color='primary' className="mx-auto mt-3" onClick={toggle} >{'Click Out'}</Btn>
                    </div>
                    <Modal isOpen={modal} toggle={toggle} centered>
                        <CustomModal3Body />
                    </Modal>
                </div>
            </div>
        </Col>
    )
}