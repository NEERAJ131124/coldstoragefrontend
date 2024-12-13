import { useState } from 'react';
import { Toast } from 'reactstrap';
import { Btn, Image } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';
import UniqueToastContent from '../../Common/UniqueToastContent';

export default function BottomLeftToast() {
    const [visible, setVisible] = useState(false);
    const toggle = () => setVisible(!visible);
    const handleClick = () => {
        setVisible(true);
        setTimeout(() => setVisible(false), 8000);
    };
    return (
        <>
            <Btn color='success' id='liveToastBtn3' onClick={handleClick}>{'Bottom-left toast'}</Btn>
            <div className='toast-container position-fixed start-0 bottom-0 p-3 toast-index toast-rtl'>
                <Toast id='liveToast3' isOpen={visible}>
                    <div className='toast-img toast-header'>
                        <Image className='rounded me-2' src={dynamicImage(`other-images/profile.png`)} alt='profile'/>
                        <strong className='me-auto'>{'Admiro Theme'}</strong>
                        <Btn close className="p-0" onClick={toggle}></Btn>
                    </div>
                    <UniqueToastContent visible={visible} setVisible={setVisible} />
                </Toast>
            </div>
        </>
    );
}

