import React from 'react'
import { Link } from 'react-router-dom'
import { Btn, H6, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'
import { bestSellBodyData } from '../../../../Data/Dashboard/Ecommerce'
import { TransitionHistoryBodyProps } from '../../../../Types/Dashboard.type'

export default function BestSellBody({ filterText }: TransitionHistoryBodyProps) {
    const filteredItems = bestSellBodyData.filter(
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
                                <Image src={dynamicImage(`dashboard-2/user/${item.image}`)} alt="" />
                            </div>
                            <div className="flex-grow-1">
                                <Link to={`${process.env.PUBLIC_URL}/ecommerce/product_page`}>
                                    <H6>{item.name}</H6>
                                </Link>
                                <P>{item.year}</P>
                            </div>
                        </div>
                    </td>
                    <td> {item.date}</td>
                    <td> {item.product}</td>
                    <td><Image className="img-fluid" src={dynamicImage(`dashboard-2/flag/${item.country}`)} alt="" /></td>
                    <td>{'$'}{item.total}</td>
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