import React from 'react'
import CommonErrorPage from '../Common/CommonErrorPage'
import { Error4 } from '../../Common/CommonPageIcon'

export default function ErrorPage4() {
    return (
        <CommonErrorPage
            title='Internal Server Error'
            errorIcon={<Error4 />}
        />
    )
}