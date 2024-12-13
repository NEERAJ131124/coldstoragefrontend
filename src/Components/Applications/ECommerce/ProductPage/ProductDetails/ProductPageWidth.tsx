import React from 'react'
import { Table } from 'reactstrap'

export default function ProductPageWidth() {
    return (
        <div>
            <Table className="product-page-width" borderless>
                <tbody>
                    <tr>
                        <td>
                            <b>{"Brand"} &nbsp;&nbsp;&nbsp;:</b>
                        </td>
                        <td>{"Pixelstrap"}</td>
                    </tr>
                    <tr>
                        <td>
                            <b>{"Availability"} &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
                        </td>
                        <td className="font-success">{"in stock"}</td>
                    </tr>
                    <tr>
                        <td>
                            <b>{"Seller"} &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
                        </td>
                        <td>{"ABC"}</td>
                    </tr>
                    <tr>
                        <td>
                            <b>{"Fabric"} &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
                        </td>
                        <td>{"Cotton"}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}