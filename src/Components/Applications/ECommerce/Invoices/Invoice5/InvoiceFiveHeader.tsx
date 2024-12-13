import React from 'react'
import { Table } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import InvoiceRightSide from './InvoiceRightSide'
import InvoiceAddress from './InvoiceAddressDetails'

export default function InvoiceFiveHeader() {
    return (
        <td>
            <Table style={{ width: "100%" }} borderless responsive>
                <tbody>
                    <tr style={{ padding: "28px 0 5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <td>
                            <Image className='for-light' src={dynamicImage(`logo/logo-dark.png`)} alt="logo" />
                            <Image className='for-dark' src={dynamicImage(`logo/logo1.png`)} alt="logo" />
                        </td>
                        <td>
                            <InvoiceRightSide />
                        </td>
                    </tr>
                    <tr style={{ display: "flex", justifyContent: "space-between" }}>
                        <InvoiceAddress />
                    </tr>
                </tbody>
            </Table>
        </td>
    )
}