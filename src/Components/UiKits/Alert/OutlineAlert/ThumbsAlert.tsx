import React, { useState } from 'react'
import { Alerts, P } from '../../../../AbstractElements';

export default function ThumbsAlert() {
    const [active, setActive] = useState(true);
    const onDismiss = () => setActive(false)

    return (
        <Alerts color='transparent' isOpen={active} toggle={onDismiss} className='text-success border-success alert-icons mb-0 outline-2x'>
            <i className="fa-regular fa-thumbs-up" />
            <P className="mb-0"><b> {'Well done! '}</b>{'You successfully read this important message.'}</P>
        </Alerts>
    )
}
