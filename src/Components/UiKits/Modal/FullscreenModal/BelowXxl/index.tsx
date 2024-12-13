import React, { Fragment, useState } from 'react'
import { Btn, H6, P } from '../../../../../AbstractElements';
import CommonModal from '../../Common/CommonModal';
import { belowsmData } from '../../../../../Data/UiKits/Modal';

export default function BelowXxl() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        footer: true,
        toggler: toggle,
        title: 'Full screen below xxl',
        class: 'modal-fullscreen-xxl-down',
        bodyClass: 'dark-modal'
    }
    return (
        <>
            <Btn color='danger' outline onClick={toggle} >{'Fullscreen below xxl'}</Btn>
            <CommonModal modalData={data}>
                <div className="large-modal-header">
                    <i className="fa-solid fa-angles-right text-primary" />
                    <H6>{'Web design'}</H6>
                </div>
                <P className="modal-padding-space">{"We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI."}</P>
                <div className="modal-details">
                    <div className="web-content">
                        <H6 className='py-2'>{'Web designer'}</H6>
                        {belowsmData && belowsmData.map((item, index) => (
                            <Fragment key={index}>
                                <div className='d-flex align-items-start'>
                                    <div className="flex-shrink-0">
                                        <i className="fa-solid fa-circle-arrow-right text-primary" />
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <P>{item}</P>
                                    </div>
                                </div>
                                {index === 1 && <H6 className='py-2'>{'UX designer'}</H6>}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </CommonModal>
        </>
    )
}
