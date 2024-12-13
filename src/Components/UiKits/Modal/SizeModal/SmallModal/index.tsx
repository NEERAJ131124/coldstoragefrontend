import React, { Fragment, useState } from 'react'
import { Btn, H6, P } from '../../../../../AbstractElements';
import CommonModal from '../../Common/CommonModal';
import { fullScreenModalData } from '../../../../../Data/UiKits/Modal';

export default function SmallModal() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        toggler: toggle,
        title: 'Small modal',
        size: 'sm',
        bodyClass: 'dark-modal',
    }
    return (
        <>
            <Btn color='primary' onClick={toggle}>{'Small Modal'}</Btn>
            <CommonModal modalData={data} >
                {fullScreenModalData && fullScreenModalData.slice(0, 3).map((item, index) => (
                    <Fragment key={index}>
                        <div className="large-modal-header">
                            <i className="fa-solid fa-angles-right" />
                            <H6>{item.title}</H6>
                        </div>
                        <P className='modal-padding-space'>{item.text}</P>
                    </Fragment>
                ))}
            </CommonModal>
        </>
    )
}
