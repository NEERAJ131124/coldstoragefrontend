import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DefaultBreadcrumbTitle, Href } from '../../../../Utils/Constants'
import { defaultBreadcrumbSubTitle } from '../../../../Data/BonusUi/Breadcrumb'

export default function DefaultBreadcrumb() {
    return (
        <Col sm={6}>
            <Card>
                <CommonCardHeader title={DefaultBreadcrumbTitle} subTitle={defaultBreadcrumbSubTitle} />
                <CardBody>
                    <Breadcrumb className='mb-2' listClassName='mb-0'>
                        <BreadcrumbItem href={Href}>{'Home'}</BreadcrumbItem>
                        <BreadcrumbItem active>{'Ui Kits'}</BreadcrumbItem>
                    </Breadcrumb>
                    <Breadcrumb className='mb-0' listClassName='mb-0'>
                        <BreadcrumbItem href={Href}>{'Home'}</BreadcrumbItem>
                        <BreadcrumbItem href={Href}>{'Ui Kits'}</BreadcrumbItem>
                        <BreadcrumbItem active>{'Alert'}</BreadcrumbItem>
                    </Breadcrumb>
                </CardBody>
            </Card>
        </Col>
    )
}