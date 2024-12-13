import React from 'react'
import { H4 } from '../../../../../AbstractElements'
import { invoiceFourData } from '../../../../../Data/Applications/ECommerce/Invoice'

export default function InvoiceTableBody() {
    return (
        <>
            {invoiceFourData.map((data, i) => (
                <tr key={i}>
                    <td style={{ width: "12%", textAlign: "center", borderBottom: "1px dashed rgba(82, 82, 108, 0.2)", background: "rgba(48, 142, 135 , 0.1)" }} >
                        <span style={{ opacity: "0.8", fontWeight: 600 }}>{i + 1}</span>
                    </td>
                    <td style={{ padding: 16, borderBottom: "1px dashed rgba(82, 82, 108, 0.2)" }} >
                        <H4 style={{ fontWeight: 600, margin: "4px 0px", fontSize: 18, color: "#308e87" }} >{data.title}</H4>
                        <span style={{ opacity: "0.8", fontSize: 16 }}>{data.detail}</span>
                    </td>
                    <td style={{ width: "12%", textAlign: "center", borderBottom: "1px dashed rgba(82, 82, 108, 0.2)", background: "rgba(48, 142, 135 , 0.1)" }} >
                        <span style={{ fontWeight: 600 }}>${data.price}.00</span>
                    </td>
                    <td style={{ width: "12%", textAlign: "center", borderBottom: "1px dashed rgba(82, 82, 108, 0.2)" }} >
                        <span style={{ fontWeight: 600 }}>{data.quantity}</span>
                    </td>
                    <td style={{ width: "12%", textAlign: "center", borderBottom: "1px dashed rgba(82, 82, 108, 0.2)", background: "rgba(48, 142, 135 , 0.1)" }}>
                        <span style={{ color: "#308e87", fontWeight: 600, opacity: "0.9" }} >${data.total}.00</span>
                    </td>
                </tr>
            ))}
        </>
    )
}