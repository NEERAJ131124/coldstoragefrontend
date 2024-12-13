import React from 'react'
import { Database } from 'react-feather'
import { Btn, H6, LI, ProgressBar, UL } from '../../../../AbstractElements'

export default function Storage() {
    return (
        <UL className="simple-list">
            <LI>
                <Btn color="primary" outline className='w-auto'>
                    <Database /> {'Storage'}
                </Btn>
            </LI>
            <LI className="m-t-15">
                <ProgressBar className="sm-progress-bar mb-3" color="primary" value={25} />
                <H6 className="f-w-500">{"25 GB of 100 GB used"}</H6>
            </LI>
        </UL>
    )
}