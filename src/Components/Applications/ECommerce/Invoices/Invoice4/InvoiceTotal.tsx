import React from 'react'
import { Table } from 'reactstrap'
import { LI, UL } from '../../../../../AbstractElements'

export default function InvoiceTotal() {
    return (
        <td>
            <Table style={{ width: "100%" }}>
                <tbody>
                    <tr style={{ display: "flex", justifyContent: "space-between", margin: "16px 0 24px 0", alignItems: "end" }}>
                        <td style={{ display: "flex", gap: 10 }}>
                            <span style={{ color: "#308e87", fontSize: 16, fontWeight: 600 }}>{'Payment Teams'} :</span>
                            <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, fontWeight: 400, width: "55%" }}>{"This denotes a payment credit for a full month's supply."}</span>
                        </td>
                        <td>
                            <UL className='simple-list' style={{ padding: 0, margin: 0, listStyle: "none" }}>
                                <LI style={{ display: "flex", paddingBottom: 16 }}>
                                    <span style={{ display: "block", width: 95 }}>{'Subtotal'} </span>
                                    <span style={{ display: "block", width: 25 }}>:</span>
                                    <span style={{ display: "block", width: 95, color: "#308e87", opacity: "0.9", fontWeight: 600 }} >$6100.00</span>
                                </LI>
                                <LI style={{ display: "flex", paddingBottom: 16 }}>
                                    <span style={{ display: "block", width: 95 }}>{'Tax'}</span>
                                    <span style={{ display: "block", width: 25 }}> :</span>
                                    <span style={{ display: "block", width: 95, color: "#308e87", opacity: "0.9", fontWeight: 600 }}>$50.00</span>
                                </LI>
                                <LI style={{ display: "flex", paddingBottom: 20 }}>
                                    <span style={{ display: "block", width: 95 }}>{'Discount'} </span>
                                    <span style={{ display: "block", width: 25 }}> :</span>
                                    <span style={{ display: "block", width: 95, color: "#308e87", opacity: "0.9", fontWeight: 600 }} >$30.00</span>
                                </LI>
                                <LI style={{ display: "flex", alignItems: "center" }}>
                                    <span style={{ display: "block", width: 95 }}>{'Total Due'}</span>
                                    <span style={{ display: "block", color: "#308e87", opacity: "0.9", fontWeight: 600, padding: "12px 25px", borderRadius: 5, background: "rgba(48, 142, 135 , 0.1)", fontSize: 16 }} >$6120.00</span>
                                </LI>
                            </UL>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </td>
    )
}