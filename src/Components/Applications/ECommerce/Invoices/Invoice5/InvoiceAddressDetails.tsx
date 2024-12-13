import React from 'react'
import { H4 } from '../../../../../AbstractElements'

export default function InvoiceAddress() {
    return (
        <>
            <td className="text-start">
                <span style={{ fontSize: 16, display: "block", fontWeight: 600, color: "rgba(48, 142, 135, 1)", marginBottom: 14 }} >{'Invoice to'} :</span>
                <span style={{ fontSize: 16, display: "block", fontWeight: 600, color: "#308e87", marginBottom: 8 }} >Brooklyn Simmons</span>
                <span style={{ fontSize: 16, display: "block", opacity: "0.8", marginBottom: 8, width: "72%", lineHeight: "1.4" }}>
                    2972 Westheimer Rd. Santa Ana, Illinois 85486
                </span>
                <span style={{ fontSize: 16, display: "block", opacity: "0.8", marginBottom: 8 }}>{'Phone'} : (219) 555-0114</span>
                <span style={{ fontSize: 16, display: "block", opacity: "0.8", marginBottom: 8 }} >{'Email'} : yourmail@themesforest.com</span>
                <span style={{ fontSize: 16, display: "block", opacity: "0.8", marginBottom: 8 }} >{'Website'}: www.websites.com</span>
            </td>
            <td className="text-start">
                <H4 style={{ fontSize: 42, fontWeight: 600, color: "#308e87", margin: "0 0 12px 0" }} >{'INVOICE'}</H4>
                <span style={{ fontSize: 16, color: "#308e87", display: "block", fontWeight: 600, marginBottom: 20 }} >{'Bank Transfer'}</span>
                <span style={{ color: "#308e87", display: "block", marginBottom: 12, fontWeight: 600 }} >{'Leslie Alexander'}</span>
                <span style={{ display: "block", fontSize: 16, marginBottom: 12 }}>{'Bank Account'} : 0981234098765</span>
                <span style={{ display: "block", fontSize: 16, marginBottom: 12 }} >{'Code'} : LEF098756</span>
            </td>
        </>
    )
}