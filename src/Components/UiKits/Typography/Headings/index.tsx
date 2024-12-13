import React from 'react'
import { Card, CardBody, Col, Table } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import TableHead from '../../../../Utils/CommonComponents/TableHead'
import { headingSubTitle, headingTableHead } from '../../../../Data/UiKits/Typography'
import { HeadingsTitle } from '../../../../Utils/Constants'
import HeadingBody from './HeadingBody'

export default function Headings() {
    return (
        <Col xxl={8} xl={12}>
            <Card>
                <CommonCardHeader title={HeadingsTitle} subTitle={headingSubTitle} />
                <CardBody>
                    <div className="table-responsive custom-scroll">
                        <Table className="mb-0 typography-table">
                            <TableHead headeData={headingTableHead} />
                            <HeadingBody />
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
