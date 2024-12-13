import { useState } from 'react';
import { Toast, ToastBody } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { CommonToastProps } from '../../../../Types/BonusUi.type';

export default function CommonToast({ icon, smallClass, strongText, smallText, bodyText }: CommonToastProps) {
    const [open, setOpen] = useState(true);
    const toggle = () => setOpen(!open);
    return (
        <Toast>
            <div className="toast-header">
                {icon}
                <strong className='me-auto'>{strongText}</strong>
                <small className={smallClass}>{smallText}</small>
                <Btn close className="p-0" onClick={toggle}></Btn>
            </div>
            <ToastBody className='toast-dark'>{bodyText}</ToastBody>
        </Toast>
    );
};