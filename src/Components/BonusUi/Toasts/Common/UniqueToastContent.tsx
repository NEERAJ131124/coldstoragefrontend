import React from 'react'
import { ToastBody } from 'reactstrap';
import { UniqueToastContentProps } from '../../../../Types/BonusUi.type';
import { Btn, H6, P } from '../../../../AbstractElements';

export default function UniqueToastContent({ visible, setVisible }: UniqueToastContentProps) {
    const toggle = () => setVisible(!visible);
    return (
        <ToastBody className='toast-dark'>
            <H6 className='mb-2'>{"Your account will be permanently deleted?"}</H6>
            <P className='mb-0'>{"Do you intend to continue?"}</P>
            <div className='mt-2 pt-2 border-top d-flex gap-2'>
                <Btn color='dark' size='sm'>{"I'm not sure"}</Btn>
                <Btn color='danger' size='sm' onClick={toggle}>{"Remove My Account"}</Btn>
            </div>
        </ToastBody>
    );
};
