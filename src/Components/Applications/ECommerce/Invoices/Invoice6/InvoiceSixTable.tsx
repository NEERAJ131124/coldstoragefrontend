import React from 'react'
import { Table } from 'reactstrap'
import { invoiceSixTable } from '../../../../../Data/Applications/ECommerce/Invoice'
import { H6 } from '../../../../../AbstractElements'
import InvoiceSixTableBody from './InvoiceSixTableBody'
import InvoiceFooter from './InvoiceFooter'

export default function InvoiceSixTable() {
    return (
        <div>
            <div className="table-responsive invoice-table" id="table">
                <Table bordered striped>
                    <tbody>
                        <tr>
                            {invoiceSixTable.map((data, i) => (
                                <td className="item text-start" key={i}>
                                    <H6 className="p-2 mb-0">{data}</H6>
                                </td>
                            ))}
                        </tr>
                        <InvoiceSixTableBody />
                        <tr>
                            <td className="text-start" />
                            <td />
                            <td className="Rate">
                                <H6 className="mb-0 p-2">{'Total'}</H6>
                            </td>
                            <td className="payment">
                                <H6 className="mb-0 p-2">{'$3,644.25'}</H6>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <InvoiceFooter />
        </div>
    )
}