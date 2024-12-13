import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { BreckpointSpecificTitle } from '../../../../../Utils/Constants'
import { breckPointSpecificSubTitle, breckpointSpecificBody, breckpointSpecificHead } from '../../../../../Data/Tables/ReactstrapTables/BasicTables'
import CommonTable from '../Common/CommonTable'

export default function BreckpointSpecific() {
    return (
        <Col sm={12}>
            <Card className='overflow-hidden'>
                <CommonCardHeader title={BreckpointSpecificTitle} subTitle={breckPointSpecificSubTitle} />
                <Row className="card-block">
                    <Col sm={12} lg={12} xl={12}>
                        <div className="table-responsive">
                            <CommonTable size='sm' headData={breckpointSpecificHead}>
                                {breckpointSpecificBody.map((data) => (
                                    <tr key={data.id}>
                                        <th className={data.id === 3 ? "border-bottom-0" : ""} scope="row">{data.id}</th>
                                        <td className={data.id === 3 ? "border-bottom-0" : ""}>{data.name}</td>
                                        <td className={data.id === 3 ? "border-bottom-0" : ""}>{data.orderId}</td>
                                        <td className={data.id === 3 ? "border-bottom-0" : ""}>{data.price}</td>
                                        <td className={data.id === 3 ? "border-bottom-0" : ""}>{data.quantity}</td>
                                        <td className={data.id === 3 ? "border-bottom-0" : ""}>{data.total}</td>
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