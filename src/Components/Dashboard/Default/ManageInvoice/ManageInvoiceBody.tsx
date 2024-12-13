import React from 'react'
import { Link } from 'react-router-dom'
import { FormGroup, Input, Label } from 'reactstrap'
import { Btn, H6, P } from '../../../../AbstractElements'
import { manageInvoiceBodyData } from '../../../../Data/Dashboard/Default'
import { TransitionHistoryBodyProps } from '../../../../Types/Dashboard.type'

export default function ManageInvoiceBody({ filterText }: TransitionHistoryBodyProps) {
    const filteredItems = manageInvoiceBodyData.filter(
        (item) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <tbody>
            {filteredItems.map((item) => (
                <tr role="row" key={item.id}>
                    <td>
                        <FormGroup className="checkbox checkbox-solid-primary" check>
                            <Input id={`solid${item.id}`} type="checkbox" />
                            <Label htmlFor={`solid${item.id}`} check />
                        </FormGroup>
                    </td>
                    <td>
                        <Link to={`${process.env.PUBLIC_URL}/ecommerce/product_list`}>
                            <H6 className="f-w-600">{item.clinet}</H6>
                        </Link>
                    </td>
                    <td>
                        <P className="f-w-600">{item.date}</P>
                    </td>
                    <td>
                        <H6 className="f-w-600">{item.payment}</H6>
                    </td>
                    <td>
                        <P className="f-w-600">{item.idNo}</P>
                    </td>
                    <td>
                        <H6 className="f-w-600">{'$'}{item.amount}</H6>
                    </td>
                    <td className="text-end">
                        <Btn color='transparent' className={`bg-light-${item.color} border-light-${item.color} text-${item.color}`}>
                            {item.status}
                        </Btn>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}