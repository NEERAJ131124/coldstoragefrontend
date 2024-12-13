import React from 'react'
import { Table } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function InvoiceHeader() {
    return (
        <td>
            <Table className="logo-wrapper" borderless responsive>
                <tbody>
                    <tr>
                        <td>
                            <Image className='for-dark' src={dynamicImage(`logo/BMCLogoLight.png`)} alt="logo" />
                            <Image className='for-light' src={dynamicImage(`logo/BMCLogoDark.png`)} alt="logo" />
                            <span style={{ opacity: "0.8", display: "block", marginTop: 10 }}>
                                202-555-0258
                            </span>
                        </td>
                        <td className="address" style={{ textAlign: "right", opacity: "0.8", width: "16%" }} >
                            <span>1982 Harvest Lane New York, NY12210 United State</span>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </td>
    )
}