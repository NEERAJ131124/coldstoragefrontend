import React from 'react'
import { Table } from 'reactstrap'

export default function InvoiceTwoTotal() {
    return (
        <td>
            <Table responsive borderless>
                <tfoot>
                    <tr>
                        <td style={{ padding: "5px 24px 5px 0", paddingTop: 15, textAlign: "end" }}>
                            <span style={{ fontSize: 16, fontWeight: 400 }}>{'Subtotal'} :</span>
                        </td>
                        <td style={{ padding: "5px 0", textAlign: "left", paddingTop: 15 }}>
                            <span style={{ fontSize: 16 }}>$26,400.00</span>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: "5px 24px 5px 0", textAlign: "end" }}>
                            <span style={{ fontSize: 16, fontWeight: 400 }}>{'Vat'} (0%) :</span>
                        </td>
                        <td style={{ padding: "5px 0", textAlign: "left", paddingTop: 0 }} >
                            <span>$0.00</span>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: "5px 24px 5px 0", minWidth: "200px", textAlign: "end" }}>
                            <span style={{ fontSize: 16, fontWeight: 400 }}> {'Shipping Rate'} :</span>
                        </td>
                        <td style={{ padding: "5px 0", textAlign: "left", paddingTop: 0 }} >
                            <span style={{ fontSize: 16 }}>$10.00</span>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: "12px 24px 5px 0", minWidth: "200px", }}>
                            <span style={{ fontWeight: 600, fontSize: 20, color: "#308e87" }}>
                                {'Total Amount'} :
                            </span>
                        </td>
                        <td style={{ padding: "12px 24px 5px 0", textAlign: "right" }} >
                            <span style={{ fontWeight: 500, fontSize: 18, color: "rgba(48, 142, 135, 1)" }} >
                                $26,410.00
                            </span>
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </td>
    )
}