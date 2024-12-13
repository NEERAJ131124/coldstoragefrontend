import React from 'react'
import { Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function CommonInvoiceSign() {
    return (
        <td>
            <Image src={dynamicImage(`email-template/invoice-3/sign.png`)} alt="sign" />
            <span style={{ color: "#308e87", display: "block", fontSize: 16, fontWeight: 600 }} >Laurine T. Ebbert</span>
            <span style={{ display: "block", fontSize: 14, paddingTop: 5 }}>( Designer )</span>
        </td>
    )
}