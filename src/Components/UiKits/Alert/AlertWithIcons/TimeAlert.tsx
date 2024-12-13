import React, { useState } from 'react'
import { Alerts, Btn, P } from '../../../../AbstractElements';

export default function TimeAlert() {
    const [active, setActive] = useState(true);
    return (
        <Alerts color='transparent' className={`border-warning alert-dismissible p-0 ${active ? 'show' : 'd-none'}`}>
            <div className="alert-arrow bg-warning">
                <i className="fa-regular fa-clock" />
            </div>
            <P className="mb-0">{'Your time over after '} <strong className="text-dark">{'5'}</strong> {'minute'}</P>
            <Btn className="p-0 border-0 me-2 ms-auto" onClick={() => { setActive(false) }}>
                <span className="bg-warning text-light px-3 py-1">{'Check'}</span>
            </Btn>
        </Alerts>
    )
}
