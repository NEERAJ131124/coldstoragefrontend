import React from 'react'
import CommonErrorPage from '../Common/CommonErrorPage'
import { Error6 } from '../../Common/CommonPageIcon'

export default function ErrorPage6() {
    return (
        <CommonErrorPage
            title='Page Not Found'
            errorIcon={<Error6 />}
        />
    )
}