import React from 'react'
import { Link } from 'react-router-dom'
import { studentDetailsBody } from '../../../../Data/Dashboard/Project'
import { Btn, H6, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'
import { TransitionHistoryBodyProps } from '../../../../Types/Dashboard.type'

export default function StudentDetailsBody({ filterText }: TransitionHistoryBodyProps) {
    const filteredItems = studentDetailsBody.filter(
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
                        <div className="d-flex align-items-center gap-3">
                            <div className="flex-shrink-0 comman-round">
                                <Image src={dynamicImage(`dashboard-3/user/${item.image}`)} alt="" />
                            </div>
                            <div className="flex-grow-1">
                                <Link to={`${process.env.PUBLIC_URL}/ecommerce/product_page`}>
                                    <H6>{item.name}</H6>
                                </Link>
                                <P>{'2024'}</P>
                            </div>
                        </div>
                    </td>
                    <td>
                        <H6 className="f-w-600">{item.product}</H6>
                    </td>
                    <td className="f-w-600">{`QTY:${item.quantity}`}</td>
                    <td className="f-w-600 text-center">{item.attendance}</td>
                    <td className="text-end">
                        <Btn color='transparent' className={`bg-light-${item.color} border-light-${item.color} text-${item.color}`}>
                            {item.rating}
                        </Btn>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}