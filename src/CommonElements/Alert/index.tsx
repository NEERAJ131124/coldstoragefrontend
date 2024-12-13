import React from 'react'
import { Alert, AlertProps } from 'reactstrap'

export default function Alerts(props: AlertProps) {
    return (
        <Alert {...props}>
            {props.children}
        </Alert>
    )
}
