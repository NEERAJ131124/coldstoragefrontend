import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Href, SimpleBreadcrumbTitle } from '../../../../Utils/Constants'
import { simpleBreadcrumbSubTitle } from '../../../../Data/BonusUi/Breadcrumb'

export default function SimpleBreadcrumb() {
    return (
        <Col sm={6}>
            <Card>
                <CommonCardHeader title={SimpleBreadcrumbTitle} subTitle={simpleBreadcrumbSubTitle} />
                <CardBody>
                    <Breadcrumb className='mb-0' listClassName='mb-1'>
                        <BreadcrumbItem><a href={Href}><i className="iconly-Home icli pe-1" /></a>{'Home'}</BreadcrumbItem>
                        <BreadcrumbItem>{'Bonus Ui'}</BreadcrumbItem>
                        <BreadcrumbItem>{'Rating'}</BreadcrumbItem>
                    </Breadcrumb>
                    <Breadcrumb className='mb-0' listClassName='breadcrumb-style3 mb-0'>
                        <BreadcrumbItem><a href={Href}><i className="iconly-Home icli pe-1" /></a>{'Home'}</BreadcrumbItem>
                        <BreadcrumbItem><a href={Href}><i className="iconly-Info-Circle icli pe-1" /></a>{'FAQ'}</BreadcrumbItem>
                    </Breadcrumb>
                </CardBody>
            </Card>
        </Col>
    )
}
