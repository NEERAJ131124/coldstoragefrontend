import React from 'react'
import CommonErrorPage from '../Common/CommonErrorPage'
import { Error3 } from '../../Common/CommonPageIcon'

export default function ErrorPage3() {
    return (
        <CommonErrorPage
            title='Sorry, Something Goes Wrong'
            errorIcon={<Error3 />}
        />
    )
}