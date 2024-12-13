import React from 'react'
import { Link } from 'react-router-dom'
import { assignmentsBody } from '../../../../Data/Dashboard/Project'
import { Btn, H6, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'
import { TransitionHistoryBodyProps } from '../../../../Types/Dashboard.type'

export default function AssignmentsBody({ filterText }: TransitionHistoryBodyProps) {
    const filteredItems = assignmentsBody.filter(
        (item) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <tbody>
            {filteredItems.map((item) => (
                <tr key={item.id}>
                    <td>
                        <div className="d-flex align-items-center gap-3">
                            <div className="flex-shrink-0 comman-round">
                                <Image src={dynamicImage(`dashboard-3/user/1.png`)} alt="" />
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
                        <H6 className="f-w-600">{item.subject}</H6>
                    </td>
                    <td className="f-w-600">{item.startDate}</td>
                    <td className="text-end">
                        <Btn color='transparent' className={`bg-light-${item.color} border-light-${item.color} text-${item.color}`}>
                            {item.status}
                        </Btn>
                    </td>
                    <td className="f-w-600 text-center">{item.submitDate}</td>
                </tr>
            ))}
        </tbody>
    )
}