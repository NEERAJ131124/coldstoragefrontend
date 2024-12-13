import React from 'react'
import { Table } from 'reactstrap'
import { invoiceThreeHeader } from '../../../../../Data/Applications/ECommerce/Invoice'
import InvoiceThreeBody from './InvoiceThreeBody'

export default function InvoiceThreeTable() {
    return (
        <td>
            <Table style={{ width: "100%", borderSpacing: 0 }} borderless>
                <thead>
                    <tr style={{ background: "#308e87" }}>
                        {invoiceThreeHeader.map((data, i) => (
                            <th style={{ padding: "18px 15px", textAlign: i === 0 ? "left" : "center", borderInline: (i !== 3 && i !== 0) ? "3px solid #fff" : "" }} key={i}>
                                <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>{data}</span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <InvoiceThreeBody />
                </tbody>
            </Table>
        </td>
    )
}