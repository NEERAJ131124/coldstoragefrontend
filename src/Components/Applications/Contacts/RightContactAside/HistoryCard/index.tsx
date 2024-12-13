import React from 'react'
import { ModalHeader } from 'reactstrap'
import { HistoryCardProps } from '../../../../../Types/Contact.type'
import { H6, P } from '../../../../../AbstractElements'

export default function HistoryCard({ historyToggle, showHistory }: HistoryCardProps) {
    return (
        <div className={showHistory ? 'show' : ''} id="right-history">
            <ModalHeader className="p-l-20 p-r-20 w-100" toggle={historyToggle}>{'Contact History'}</ModalHeader>
            <div className='history-details'>
                <div className='text-center'>
                    <i className='fa-solid fa-pencil' />
                    <P>{'Contact has not been modified yet.'}</P>
                </div>
                <div className="d-flex">
                    <i className='fa-solid fa-star me-3' />
                    <div className="flex-grow-1 mt-0">
                        <H6 className='f-w-700 mt-0'>{'Contact Created'}</H6>
                        <P className='mb-0'>{'Contact is created via mail'}</P>
                        <span className='f-12'>{'Sep 10, 2024 4:00'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}