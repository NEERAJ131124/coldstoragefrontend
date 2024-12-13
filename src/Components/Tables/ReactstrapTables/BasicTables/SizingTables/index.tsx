import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { SizingTablesTitle } from '../../../../../Utils/Constants'
import { sizeTableSubTitle, sizingTablesBody, sizingTablesHeader } from '../../../../../Data/Tables/ReactstrapTables/BasicTables'
import CommonTable from '../Common/CommonTable'

export default function SizingTables() {
    return (
        <Col sm={12}>
            <Card className='overflow-hidden'>
                <CommonCardHeader title={SizingTablesTitle} subTitle={sizeTableSubTitle} />
                <Row className="card-block">
                    <Col sm={12} lg={12} xl={12}>
                        <div className="table-responsive">
                            <CommonTable size='lg' headData={sizingTablesHeader}>
                                {sizingTablesBody.map((data) => (
                                    <tr key={data.id}>
                                        <th className={data.id === 3 ? "border-bottom-0" : ""} scope="row">{data.id}</th>
                                        <td className={data.id === 3 ? "border-bottom-0" : ""}>{data.employeeName}</td>
                                        <td className={data.id === 3 ? "border-bottom-0" : ""}>{data.date}</td>
                                        <td className={`text-${data.color} ${data.id === 3 ? "border-bottom-0" : ""}`}>{data.status}</td>
                                        <td className={data.id === 3 ? "border-bottom-0" : ""}>{data.hours}</td>
                                        <td className={data.id === 3 ? "border-bottom-0" : ""}>{data.performance}</td>
                                    </tr>
                                ))}
                            </CommonTable>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}