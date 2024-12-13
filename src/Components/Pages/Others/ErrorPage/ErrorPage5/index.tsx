import React from 'react'
import CommonErrorPage from '../Common/CommonErrorPage'
import { Error5 } from '../../Common/CommonPageIcon'

export default function ErrorPage5() {
    return (
        <CommonErrorPage
            title='Page Not Found'
            errorIcon={<Error5 />}
        />
    )
}