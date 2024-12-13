import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Href, WithIconBreadcrumbTitle } from '../../../../Utils/Constants'
import { withIconBreadcrumbSubTitle } from '../../../../Data/BonusUi/Breadcrumb'

export default function WithIconBreadcrumb() {
    return (
        <Col sm={6}>
            <Card>
                <CommonCardHeader title={WithIconBreadcrumbTitle} subTitle={withIconBreadcrumbSubTitle} />
                <CardBody>
                    <Breadcrumb className='breadcrumb-icon mb-3' listClassName='bg-white p-l-0 mb-0'>
                        <BreadcrumbItem><a href={Href}><i className="iconly-Home icli" /></a></BreadcrumbItem>
                        <BreadcrumbItem active>{'Ui Kits'}</BreadcrumbItem>
                    </Breadcrumb>
                    <Breadcrumb className='breadcrumb-icon breadcrumb-style4 mb-0' listClassName='bg-white m-b-0 p-b-0 p-l-0 mb-0'>
                        <BreadcrumbItem><a href={Href}><i className="iconly-Home icli" /></a></BreadcrumbItem>
                        <BreadcrumbItem href={Href}>{'Ui Kits'}</BreadcrumbItem>
                        <BreadcrumbItem active>{'Avatars'}</BreadcrumbItem>
                    </Breadcrumb>
                </CardBody>
            </Card>
        </Col>
    )
}
