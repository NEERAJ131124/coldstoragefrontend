import React from 'react'
import { Link } from 'react-router-dom'
import { transitionHistoryData } from '../../../../Data/Dashboard/Default'
import { Btn, H6, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'
import { TransitionHistoryBodyProps } from '../../../../Types/Dashboard.type'

export default function TransitionHistoryBody({filterText}: TransitionHistoryBodyProps) {
    const filteredItems = transitionHistoryData.filter(
        (item) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <tbody>
            {filteredItems.map((item) => (
                <tr role='row' key={item.id}>
                    <td>
                        <div className="d-flex align-items-center gap-3">
                            <div className="flex-shrink-0">
                                <Image src={dynamicImage(`dashboard-1/icon/${item.image}`)} alt="" />
                            </div>
                            <div className="flex-grow-1">
                                <Link to={`${process.env.PUBLIC_URL}/ecommerce/product_page`}>
                                    <H6>{item.name}</H6>
                                </Link>
                                <P>{item.text}</P>
                            </div>
                        </div>
                    </td>
                    <td>{item.invoice}</td>
                    <td className={`text-${item.color}`}>{item.amount}</td>
                    <td>
                        <div className="d-flex">
                            <div className="flex-grow-1">
                                <H6>{item.date}</H6>
                                <P>{item.time}</P>
                            </div>
                        </div>
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