import React from 'react'
import { Table } from 'reactstrap'
import { invoiceHeaderData, invoiceTwoDataList } from '../../../../../Data/Applications/ECommerce/Invoice'
import { H4, Image, LI, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import { Dollar } from '../../../../../Utils/Constants'

export default function InvoiceTwoContent() {
    return (
        <td>
            <Table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }} borderless responsive>
                <thead>
                    <tr style={{ background: "#308e87", borderRadius: "5.47059px", overflow: "hidden", boxShadow: "0px 10.9412px 10.9412px rgb(82, 77, 141, 0.04), 0px 9.51387px 7.6111px rgb(82, 77, 141, 0.06), 0px 5.05275px 4.0422px rgb(82, 77, 141, 0.0484671)" }} >
                        {invoiceHeaderData.map((data, i) => (
                            <th style={{ padding: "18px 15px", textAlign: "left", border: "none" }} key={i}>
                                <span style={{ color: "#fff", fontSize: 16 }}>{data}</span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {invoiceTwoDataList.map((data, i) => (
                        <tr className="invoice-dark" style={{ backgroundColor: "rgba(48, 142, 135, 0.1)", boxShadow: "0px 1px 0px 0px rgba(82, 82, 108, 0.15)" }} key={i}>
                            <td style={{ padding: "18px 15px", display: "flex", alignItems: "center", gap: 10 }} >
                                <span style={{ width: 54, height: 51, backgroundColor: "#F5F6F9", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 5 }} >
                                    <Image src={dynamicImage(`email-template/${data.image}.png`)} alt="laptop" style={{ height: 29 }} />
                                </span>
                                <UL style={{ padding: 0, margin: 0, listStyle: "none" }} className='simple-list'>
                                    <LI>
                                        <H4 style={{ fontWeight: 400, margin: "4px 0px", fontSize: 16 }}>{data.title}</H4>
                                        <span style={{ opacity: "0.8", fontSize: 14 }}>{data.code}</span>
                                    </LI>
                                </UL>
                            </td>
                            <td style={{ padding: "18px 15px" }}>
                                <span>{data.quantity}</span>
                            </td>
                            <td style={{ padding: "18px 15px", width: "12%" }}>
                                <span>${data.price}</span>
                            </td>
                            <td style={{ padding: "18px 15px", width: "12%" }}>
                                <span>{data.unit}</span>
                            </td>
                            <td style={{ padding: "18px 15px", width: "10%" }}>
                                <span>{data.vat}</span>
                            </td>
                            <td style={{ padding: "18px 15px" }}>
                                <span>{Dollar}{data.total}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </td>
    )
}