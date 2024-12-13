import React from 'react'
import { Card, CardBody, Col, Table } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ColoredHeadingTitle } from '../../../../Utils/Constants'
import { colorHeadData, headingSubTitle } from '../../../../Data/UiKits/Typography'
import TableHead from '../../../../Utils/CommonComponents/TableHead'
import ColoredHeadBody from './ColoredHeadBody'

export default function ColoredHeadings() {
    return (
        <Col xxl={4} xl={12}>
            <Card>
                <CommonCardHeader title={ColoredHeadingTitle} subTitle={headingSubTitle} />
                <CardBody>
                    <div className='table-responsive custom-scroll'>
                        <Table className='mb-0 typography-table'>
                            <TableHead headeData={colorHeadData} />
                            <ColoredHeadBody />
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
