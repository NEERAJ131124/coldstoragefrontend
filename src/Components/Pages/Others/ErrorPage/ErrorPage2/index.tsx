import React from 'react'
import CommonErrorPage from '../Common/CommonErrorPage'
import { Error2 } from '../../Common/CommonPageIcon'

export default function ErrorPage2() {
    return (
        <CommonErrorPage
            title='Oops! This Page is Not Found.'
            errorIcon={<Error2 />}
        />
    )
}