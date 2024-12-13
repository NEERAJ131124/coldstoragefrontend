import React, { useState } from 'react'
import { CloseButton, Toast, ToastBody } from 'reactstrap';
import { Btn } from '../../../../../AbstractElements';

export default function BottomRightToast() {
    const [visible, setVisible] = useState(false);
    const toggle = () => setVisible(!visible);
    const handleClick = () => {
        setVisible(true);
        setTimeout(() => setVisible(false), 8000);
    };
    return (
        <>
            <Btn color='secondary' id='liveToastBtn1' onClick={handleClick}>{'Bottom-right toast'}</Btn>
            <div className='toast-container position-fixed bottom-0 end-0 p-3 toast-index toast-rtl'>
                <Toast id='liveToastBtn1' isOpen={visible}>
                    <div className='d-flex justify-content-between alert-secondary'>
                        <ToastBody>{'Your time over after 5 minute.'}</ToastBody>
                        <CloseButton variant='white' className='me-2 m-auto' onClick={toggle} />
                    </div>
                </Toast>
            </div>
        </>
    );
}