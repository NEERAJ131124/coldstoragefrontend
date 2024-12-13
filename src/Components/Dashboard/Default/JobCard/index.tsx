import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { H3, P } from '../../../../AbstractElements'
import { JobToday } from '../../../../Utils/Constants'
import JobCardList from './JobCardList'
import JobCardTable from './JobCardTable'

export default function JobCard() {
    return (
        <Col xxl={5} xl={6} lg={12} className="proorder-xxl-7 box-col-12">
            <Card className="job-card">
                <CardHeader className="pb-0 card-no-border">
                    <div className="header-top">
                        <H3>{JobToday}</H3>
                        <div>
                            <P>{'Wednesday 6, '}<span>{'Dec 2024'}</span></P>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="pt-2">
                    <JobCardList />
                    <JobCardTable />
                </CardBody>
            </Card>
        </Col>
    )
}