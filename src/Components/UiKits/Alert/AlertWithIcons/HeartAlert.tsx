import React, { useState } from 'react'
import { Alerts, Btn, P } from '../../../../AbstractElements'

export default function HeartAlert() {
    const [active, setActive] = useState(true)
    return (
        <Alerts color='transparent' className={`border-danger alert-dismissible p-0 mb-0 ${active ? 'show' : 'd-none'}`}>
            <div className="alert-arrow bg-danger">
                <i className="fa-regular fa-heart" />
            </div>
            <P className="mb-0">{'Oh snap! change a few things '}<strong className="text-dark">{'Notification check '}</strong></P>
            <Btn className="p-0 border-0 me-2 ms-auto" onClick={() => { setActive(false) }} >
                <span className="bg-danger text-white px-3 py-1">{'Alert'}</span>
            </Btn>
        </Alerts>
    )
}
