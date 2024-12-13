import React, { useState } from 'react'
import { Alerts, P } from '../../../../AbstractElements';

export default function ClockAlert() {
    const [active, setActive] = useState(true);
    const onDismiss = () => setActive(false)
    return (
        <Alerts color='transparent' isOpen={active} toggle={onDismiss} className='text-primary border-primary'>
            <i className="fa-regular fa-clock" />
            <P className="mb-0">{'One of'}<strong> {"YouTube's"} </strong>{'most crucial ranking factors is watch Time.'}</P>
        </Alerts>
    )
}
