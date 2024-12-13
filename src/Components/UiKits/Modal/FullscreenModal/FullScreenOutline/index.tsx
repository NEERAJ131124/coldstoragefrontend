import React, { Fragment, useState } from 'react'
import { Btn, H6, P } from '../../../../../AbstractElements';
import CommonModal from '../../Common/CommonModal';
import { scrollingModalData } from '../../../../../Data/UiKits/Modal';

export default function FullScreenOutline() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        footer: true,
        class: 'modal-fullscreen',
        toggler: toggle,
        title: 'Full screen modal',
        button: 'Save',
        bodyClass: 'dark-modal'
    }
    return (
        <>
            <Btn color='secondary' outline onClick={toggle}>{'Fullscreen modal'}</Btn>
            <CommonModal modalData={data}>
                <div className="large-modal-header">
                    <i className="fa-solid fa-angles-right text-primary" />
                    <H6>{'Web design'} </H6>
                </div>
                <P className="modal-padding-space mb-0">{"We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI."}</P>
                <div className="modal-details">
                    <div className="web-content">
                        <H6 className='py-2'>{'Web designer'}</H6>
                        {scrollingModalData && scrollingModalData.map((item, index) => (
                            <Fragment key={index}>
                                {index === 4 && <H6 className='py-2'>{'UX designer '}</H6>}
                                <div className='d-flex align-items-start'>
                                    <div className="flex-shrink-0">
                                        <i className="fa-solid fa-circle-arrow-right text-primary text-primary" />
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <P className='mb-0'>{item.text}</P>
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </CommonModal>
        </>
    )
}