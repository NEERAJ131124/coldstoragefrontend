import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Edit2 } from 'react-feather'
import { H4, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import BalanceItem from './BalanceItem'

export default function CustomModal3Body() {
    return (
        <Col xl={12}>
            <Card className="balance-box mb-0">
                <CardBody>
                    <div className="balance-profile">
                        <div className="balance-img">
                            <Image src={dynamicImage(`avtar/4.jpg`)} alt="user vector" />
                            <Link to={`${process.env.PUBLIC_URL}/users/user_profile`} className='edit-icon'>
                                <div className="icon"><Edit2 className='stroke-primary' /></div>
                            </Link>
                        </div>
                        <span className="font-dark d-block">{'Your Balance '} </span>
                        <H4 className="mt-1">{'$768,987.90'}</H4>
                        <BalanceItem />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
