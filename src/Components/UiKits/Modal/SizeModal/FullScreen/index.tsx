import React, { Fragment, useState } from 'react'
import { Btn, H6, P } from '../../../../../AbstractElements';
import CommonModal from '../../Common/CommonModal';
import { fullScreenModalData } from '../../../../../Data/UiKits/Modal';

export default function FullScreen() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        class: 'modal-fullscreen',
        toggler: toggle,
        title: 'Extra large modal',
        bodyClass: 'dark-modal',
    }
    return (
        <>
            <Btn color='secondary' onClick={toggle}>{'Full Screen Modal'}</Btn>
            <CommonModal modalData={data}>
                {fullScreenModalData && fullScreenModalData.map((item, index) => (
                    <Fragment key={index}>
                        <div className="large-modal-header">
                            <i className="fa-solid fa-angles-right" />
                            <H6>{item.title}</H6>
                        </div>
                        <P className="modal-padding-space">{item.text}</P>
                    </Fragment>
                ))}
            </CommonModal>
        </>
    )
}
