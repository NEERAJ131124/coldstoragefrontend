import React from 'react'
import { Link } from 'react-router-dom'
import { H4, Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import { OrderConfirmed } from '../../../../../Utils/Constants'

export default function FinishForm() {
    return (
        <div className="order-confirm">
            <Image src={dynamicImage(`gif/success/successful.gif`)} alt="popper" />
            <H4 className="f-w-600">{OrderConfirmed}</H4>
            <P className="mb-0">{"An email with your orders specifics will be sent to you as order confirmation."}</P>
            <P className="text-center f-w-500 mt-2">
                {'Order ID: '}
                <Link className="text-decoration-underline text-primary" to={`${process.env.PUBLIC_URL}/ecommerce/order_history`}>
                    {'GE34598'}
                </Link>
            </P>
        </div>
    )
}

