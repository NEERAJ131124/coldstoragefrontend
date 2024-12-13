import React from 'react'
import { Table } from 'reactstrap'
import { P } from '../../../../../AbstractElements'

export default function InvoiceNumber() {
    return (
        <td>
            <Table style={{ width: "100%", borderSpacing: 4, marginBottom: 20 }} responsive borderless>
                <tbody>
                    <tr>
                        <td className="text-start" style={{ background: "rgba(48, 142, 135 , 0.1)", padding: "15px 25px" }} >
                            <P style={{ fontSize: 16, fontWeight: 500, color: "#308e87", opacity: "0.8", margin: 0, lineHeight: 2 }} >{'Date'} :</P>
                            <span style={{ fontSize: 16, fontWeight: 600 }}>10 Mar, 2024</span>
                        </td>
                        <td className="text-start" style={{ background: "rgba(48, 142, 135 , 0.1)", padding: "15px 25px" }} >
                            <P style={{ fontSize: 16, fontWeight: 500, color: "#308e87", opacity: "0.8", margin: 0, lineHeight: 2 }} >{'Invoice No'} :</P>
                            <span style={{ fontSize: 16, fontWeight: 600 }}>#VL25000365</span>
                        </td>
                        <td className="text-start" style={{ background: "rgba(48, 142, 135 , 0.1)", padding: "15px 25px" }}>
                            <P style={{ fontSize: 16, fontWeight: 500, color: "#308e87", opacity: "0.8", margin: 0, lineHeight: 2 }}>{'Account No'} :</P>
                            <span style={{ fontSize: 16, fontWeight: 600 }}>0981234098765</span>
                        </td>
                        <td className="text-start" style={{ background: "rgba(48, 142, 135 , 0.1)", padding: "15px 25px" }} >
                            <P style={{ fontSize: 16, fontWeight: 500, color: "#308e87", opacity: "0.8", margin: 0, lineHeight: 2 }} >{'Due Amount'} :</P>
                            <span style={{ fontSize: 16, fontWeight: 600 }}>$7860.00 </span>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </td>
    )
}