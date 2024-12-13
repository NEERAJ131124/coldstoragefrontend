import React, { useState } from 'react'
import { Btn, H4, Image, P } from '../../../../../AbstractElements';
import CommonModal from '../../Common/CommonModal';
import { dynamicImage } from '../../../../../Utils';

export default function SimpleModal() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const data = { isOpen: modal, toggler: toggle }

    return (
        <>
            <Btn color='secondary' className='px-xl-2 px-xxl-3' onClick={toggle}>{'Simple'}</Btn>
            <CommonModal modalData={data}>
                <div className="modal-toggle-wrapper">
                    <H4>{'Up to '}<strong className="font-danger">{'85% OFF'}</strong>{', Hurry Up Online Shopping'}</H4>
                    <div className="modal-img">
                        <Image src={dynamicImage(`gif/online-shopping.gif`)} alt="online-shopping" />
                    </div>
                    <P className="text-sm-center">
                        {"Our difficulty in finding regular clothes that was of great quality, comfortable, and didn't impact the environment given way to Creatures of Habit."}
                    </P>
                    <Btn color='primary' className="d-flex align-items-center gap-2 text-light ms-auto" onClick={toggle}>
                        {'Explore More '}<i className="fa-solid fa-angles-right" />
                    </Btn>
                </div>
            </CommonModal>
        </>
    )
}
