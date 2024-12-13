import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ColoredBreadcrumbTitle, Href } from '../../../../Utils/Constants'
import { colorBreadcrumbSubTitle, coloredBreadcrumbData } from '../../../../Data/BonusUi/Breadcrumb'

export default function ColoredBreadcrumb() {
    return (
        <Col sm={6}>
            <Card>
                <CommonCardHeader title={ColoredBreadcrumbTitle} subTitle={colorBreadcrumbSubTitle} />
                <CardBody className='color-breadcrumb'>
                    {coloredBreadcrumbData.map((data) => (
                        <Breadcrumb className='mb-0' listClassName={`bg-${data.color}`} key={data.id}>
                            {data.item.map((list, index) => (
                                <BreadcrumbItem href={Href} key={index}>{list}</BreadcrumbItem>
                            ))}
                        </Breadcrumb>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
