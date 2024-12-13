import React from 'react'
import { Link } from 'react-router-dom'
import { userStatusData } from '../../../../Data/Dashboard/Ecommerce'
import { H3, H6, Image, ProgressBar } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function UserStatusBody() {
    return (
        <tbody>
            {userStatusData.map((item) => (
                <tr key={item.id}>
                    <td>
                        <div className="d-flex align-items-center gap-3">
                            <div className="flex-shrink-0 comman-round">
                                <Image src={dynamicImage(`dashboard-2/user/${item.image}`)} alt="" />
                            </div>
                            <div className="flex-grow-1">
                                <Link to={`${process.env.PUBLIC_URL}/ecommerce/product_page`}>
                                    <H6>{item.name}<span>({item.subText})</span></H6>
                                </Link>
                            </div>
                        </div>
                    </td>
                    <td>
                        <H3>{item.country}</H3>
                    </td>
                    <td>
                        <ProgressBar className={`bg-light-${item.color}`} color={item.color} value={item.progress} />
                    </td>
                </tr>
            ))}
        </tbody>
    )
}