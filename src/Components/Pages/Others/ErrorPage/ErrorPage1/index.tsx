import React from 'react'
import CommonErrorPage from '../Common/CommonErrorPage'
import { Error1 } from '../../Common/CommonPageIcon'

export default function ErrorPage1() {
    return (
        <CommonErrorPage
            title='Page Not Found'
            errorIcon={<Error1 />}
        />
    )
}