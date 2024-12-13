import React from 'react'
import { Card, CardBody, Col, Table } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { GridOptionsTitle } from '../../../../Utils/Constants'
import { gridOptionsSubTitle } from '../../../../Data/UiKits/Grid'
import GridTableHead from './GridTableHead'
import GridTableBody from './GridTableBody'

export default function GridOptions() {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={GridOptionsTitle} subTitle={gridOptionsSubTitle} />
                <CardBody>
                    <div className='table-responsive'>
                        <Table bordered striped>
                            <GridTableHead />
                            <GridTableBody />
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
