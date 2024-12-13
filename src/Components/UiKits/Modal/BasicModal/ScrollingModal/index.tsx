import React, { Fragment, useState } from 'react'
import { Btn, H4, P } from '../../../../../AbstractElements';
import CommonModal from '../../Common/CommonModal';
import { scrollingModalData } from '../../../../../Data/UiKits/Modal';

export default function ScrollingModal() {
    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal); }
    const data = {
        isOpen: modal,
        header: true,
        footer: true,
        toggler: toggle,
        title: 'Scrolling Modal',
    }
    return (
        <>
            <Btn color='success' className='px-xl-2 px-xxl-3' onClick={toggle}>{'Scrolling content'}</Btn>
            <CommonModal modalData={data}>
                <>
                    <H4>{'Wed designer'}</H4>
                    {scrollingModalData && scrollingModalData.map((item, index) => (
                        <Fragment key={index}>
                            {index === 4 && <H4>{'UX designer'}</H4>}
                            <div className={`d-flex align-items-start ${item.class}`}>
                                <div className="flex-shrink-0">
                                    <i className="fa-solid fa-circle-arrow-right text-primary" />
                                </div>
                                <div className="flex-grow-1 ms-2">
                                    <P className={index === 3 ? 'pb-4' : ''}>{item.text}</P>
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </>
            </CommonModal>
        </>
    )
}
