import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader'
import { IconlyIconTitle } from '../../../Utils/Constants'
import { IconlyIconBodyType } from '../../../Types/Icons.type'
import { iconlyIconData } from '../../../Data/Icons/IconlyIcon'
import { H5 } from '../../../AbstractElements'

export default function IconlyIconBody({ getIconTag }: IconlyIconBodyType) {

    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={IconlyIconTitle} titleClass='f-w-700' />
                <CardBody>
                    <Row className='icon-lists'>
                        {iconlyIconData.map((icon, i) => (
                            <Col xxl={2} xs={12} lg={4} md={6} className='icons-item' key={i} onClick={() => getIconTag(icon)}>
                                <i className={icon.data}></i>
                                <H5 className="mt-0">{icon.title}</H5>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}