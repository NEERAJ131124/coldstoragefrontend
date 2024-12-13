import React from 'react'
import { Col, Table } from 'reactstrap'
import { H4 } from '../../../../../../AbstractElements'
import { CurrentCartTitle } from '../../../../../../Utils/Constants'
import { currentCartTableFooterData } from '../../../../../../Data/Forms/FormLayout'
import CurrentCartTableBody from './CurrentCartTableBody'

export default function CurrentCart() {
    return (
        <Col xl={4}>
            <div className="shipping-info">
                <H4 className="f-w-700">{CurrentCartTitle}</H4>
                <div className="overflow-auto">
                    <Table striped>
                        <thead>
                            <tr>
                                <th scope="col">{'Product'}</th>
                                <th scope="col">{'Product Detail'}</th>
                                <th scope="col">{'Price'}</th>
                            </tr>
                        </thead>
                        <CurrentCartTableBody />
                        <tfoot>
                            {currentCartTableFooterData.map((data, index) => (
                                <tr key={index}>
                                    <td className={index === 0 || index === 4 ? 'f-w-700' : ''}>
                                        {data.footerTittle}
                                    </td>
                                    <td className={index === 0 || index === 4 ? 'f-w-700' : ''} colSpan={2}>
                                        {'$'}{data.price}
                                    </td>
                                </tr>
                            ))}
                        </tfoot>
                    </Table>
                </div>
            </div>
        </Col>
    )
}