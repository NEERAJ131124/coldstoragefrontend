import React, { useState } from 'react'
import { Col, Modal } from 'reactstrap';
import DotText from '../Common/DotText';
import { Btn, H4, Image, P } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';
import CustomModal1Body from './CustomModal1Body';

export default function CustomModal1() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal) }

    return (
        <Col xl={4} md={6} className='custom-alert text-center'>
            <div className='card-wrapper border rounded-3 h-100'>
                <div className='demo-img'>
                    <DotText />
                    <div className="title-wrapper pb-3 modal-heading">
                        <H4 className="theme-name mb-0">
                            <span>{'Modal 1 -'}</span>{'Profile Modal'}
                        </H4>
                        <P>{'Example of Admiro dashboard profile card.'}</P>
                    </div>
                    <div className="overflow-hidden">
                        <Image className="img-fluid" src={dynamicImage(`alert/social.png`)} alt="social" />
                        <Btn color='primary' className="mx-auto mt-3" onClick={toggle}>{'Click Out'}</Btn>
                    </div>
                    <Modal isOpen={modal} toggle={toggle} centered>
                        <CustomModal1Body />
                    </Modal>
                </div>
            </div>
        </Col>
    )
}