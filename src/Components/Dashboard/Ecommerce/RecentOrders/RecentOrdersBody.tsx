import React from 'react'
import { TransitionHistoryBodyProps } from '../../../../Types/Dashboard.type';
import { recentOrdersBodyData } from '../../../../Data/Dashboard/Ecommerce';
import { H6, Image, P, ProgressBar } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Utils';
import { Link } from 'react-router-dom';

export default function RecentOrdersBody({ filterText }: TransitionHistoryBodyProps) {
    const filteredItems = recentOrdersBodyData.filter(
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
                                <Image src={dynamicImage(`dashboard-2/user/${item.image}`)} alt="" />
                            </div>
                            <div className="flex-grow-1">
                                <Link to={`${process.env.PUBLIC_URL}/ecommerce/product_page`}>
                                    <H6>{item.name}</H6>
                                </Link>
                                <P>{'2024'}</P>
                            </div>
                        </div>
                    </td>
                    <td className="f-w-600">{item.product}</td>
                    <td className="font-primary f-w-600">{'$'}{item.amount}</td>
                    <td className="f-w-600">{item.vendor}</td>
                    <td>
                        <div className="status-showcase">
                            <P>{item.progress}{'%'}</P>
                            <ProgressBar className={`bg-light-${item.color}`} color={item.color} value={item.progress} />
                        </div>
                    </td>
                    <td className="text-end">
                        <H6>{item.rating}<span>({item.votes} {'votes'})</span></H6>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}