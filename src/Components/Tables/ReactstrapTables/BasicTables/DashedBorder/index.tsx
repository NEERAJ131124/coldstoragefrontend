import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { DashedBorderTitle } from '../../../../../Utils/Constants'
import { dashedBorderBody, dashedBorderHeader, dashedBorderSubTitle } from '../../../../../Data/Tables/ReactstrapTables/BasicTables'
import CommonTable from '../Common/CommonTable'

export default function DashedBorder() {
    return (
        <Col sm={12}>
            <Card className='overflow-hidden'>
                <CommonCardHeader title={DashedBorderTitle} subTitle={dashedBorderSubTitle} />
                <Row className="card-block">
                    <Col sm={12} lg={12} xl={12}>
                        <div className="table-responsive">
                            <CommonTable tableClass="table-dashed" headData={dashedBorderHeader}>
                                {dashedBorderBody.map((data) => (
                                    <tr key={data.id}>
                                        <th className={data.id === 5 ? "border-bottom-0" : ""} scope="row">{data.id}</th>
                                        <td className={data.id === 5 ? "border-bottom-0" : ""}>{data.activity}</td>
                                        <td className={data.id === 5 ? "border-bottom-0" : ""}>{data.category}</td>
                                        <td className={data.id === 5 ? "border-bottom-0" : ""}>{data.time}</td>
                                        <td className={data.id === 5 ? "border-bottom-0" : ""}>{data.instructor}</td>
                                        <td className={data.id === 5 ? "border-bottom-0" : ""}>{data.capacity}</td>
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