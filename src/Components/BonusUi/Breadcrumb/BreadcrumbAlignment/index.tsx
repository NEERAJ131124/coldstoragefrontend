import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BreadcrumbAlignmentTitle } from '../../../../Utils/Constants'
import { breadcrumbAlignmentData, breadcrumbAlignmentSubTitle } from '../../../../Data/BonusUi/Breadcrumb'

export default function BreadcrumbAlignment() {
    return (
        <Col sm={6}>
            <Card>
                <CommonCardHeader title={BreadcrumbAlignmentTitle} subTitle={breadcrumbAlignmentSubTitle} />
                <CardBody>
                    {breadcrumbAlignmentData.map((item) => (
                        <Breadcrumb key={item.id} className='mb-0'
                            listClassName={`justify-content-${item.align} breadcrumb-${item.color} mb-1`}>
                            <BreadcrumbItem>{'Home'}</BreadcrumbItem>
                            <BreadcrumbItem>{'Ui Kits'}</BreadcrumbItem>
                            <BreadcrumbItem>{'Grid'}</BreadcrumbItem>
                        </Breadcrumb>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}