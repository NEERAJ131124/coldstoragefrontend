import { useState } from 'react';
import { Toast, ToastBody } from 'reactstrap';
import { Btn, Image } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';

export default function TopLeftToast() {
    const [visible, setVisible] = useState(false);
    const toggle = () => setVisible(!visible)
    const handleClick = () => {
        setVisible(true);
        setTimeout(() => setVisible(false), 8000);
    };
    return (
        <>
            <Btn color='warning' id='liveToastBtn2' onClick={handleClick}>{'Top-left toast'}</Btn>
            <div className='toast-container position-fixed start-0 top-0 p-3 toast-index toast-rtl'>
                <Toast id='liveToastBtn2' isOpen={visible}>
                    <div className='toast-img toast-header'>
                        <Image className='rounded me-2' src={dynamicImage(`other-images/profile.png`)} alt='profile'/>
                        <strong className='me-auto'>{'Admiro Theme'}</strong>
                        <small className="d-sm-block d-none">{"10 min ago"}</small>
                        <Btn close className="p-0" onClick={toggle}></Btn>
                    </div>
                    <ToastBody className='toast-dark'>
                        <strong className='text-success'>{"Well done!"}</strong> {"You successfully read this important message."}
                    </ToastBody>
                </Toast>
            </div>
        </>
    );
}