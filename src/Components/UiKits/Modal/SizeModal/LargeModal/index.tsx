import React, { Fragment, useState } from 'react'
import { Btn, H6, P } from '../../../../../AbstractElements';
import CommonModal from '../../Common/CommonModal';
import { largeModalData } from '../../../../../Data/UiKits/Modal';

export default function LargeModal() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        toggler: toggle,
        title: 'Large modal',
        size: 'lg',
        bodyClass: 'dark-modal',
    }
    return (
        <>
            <Btn color='success' onClick={toggle}>{'Large Modal'}</Btn>
            <CommonModal modalData={data} >
                <div className="large-modal-header">
                    <i className="fa-solid fa-angles-right" />
                    <H6>{'Start with your goals'}</H6>
                </div>
                <>
                    {largeModalData && largeModalData.map((item, index) => (
                        <Fragment key={index}>
                            {index <= 2 && <P className='modal-padding-space mb-0'>{item}</P>}
                            {index > 2 &&
                                <div className="large-modal-body">
                                    <i className="fa-solid fa-share" />
                                    <P className="ps-1 mb-0">{item}</P>
                                </div>
                            }
                        </Fragment>
                    ))}
                </>
            </CommonModal>
        </>
    )
}
