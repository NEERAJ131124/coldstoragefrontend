import React from 'react'
import { Table } from 'reactstrap'
import { invoiceFourData, invoiceTableHeader } from '../../../../../Data/Applications/ECommerce/Invoice'
import { Dollar } from '../../../../../Utils/Constants'
import { H4 } from '../../../../../AbstractElements'

export default function InvoiceFourTable() {
    return (
        <td>
            <Table style={{ width: "100%", borderSpacing: 0 }} responsive borderless>
                <thead>
                    <tr style={{ background: "#308e87" }}>
                        {invoiceTableHeader.map((data, i) => (
                            <th style={{ border: "none", padding: "18px 15px", textAlign: data === 'Description' ? "left" : "center", position: (data === 'Description' || data === 'Subtotal') ? "relative" : undefined, borderTopRightRadius: data === 'Subtotal' ? 10 : 0, borderTopLeftRadius: data === 'Description' ? 10 : 0 }} key={i}>
                                <span style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>{data}</span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {invoiceFourData.map((data, i) => (
                        <tr key={i}>
                            <td style={{ padding: 15 }}>
                                <H4 style={{ fontWeight: 600, margin: "4px 0px", fontSize: 18, color: "#308e87" }}>{data.title}</H4>
                                <span style={{ opacity: "0.8", fontSize: 16 }}>{data.detail}</span>
                            </td>
                            <td style={{ width: "12%", textAlign: "center" }}>
                                <span style={{ opacity: "0.8" }}>{Dollar}{data.price}.00</span>
                            </td>
                            <td style={{ width: "12%", textAlign: "center" }}>
                                <span style={{ opacity: "0.8" }}>{data.quantity}</span>
                            </td>
                            <td style={{ width: "12%", textAlign: "center" }}>
                                <span style={{ color: "#308e87", fontWeight: 600, opacity: "0.9" }}>{Dollar}{data.total}.00</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </td>
    )
}