import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { ResponsiveLightBackgroundTitle } from '../../../../../Utils/Constants'
import { responsiveLightBackgroundBody, responsiveLightBackgroundHead, responsiveTablesSubTitle } from '../../../../../Data/Tables/ReactstrapTables/BasicTables'
import CommonTable from '../Common/CommonTable'

export default function ResponsiveLightBackground() {
    return (
        <Col sm={12}>
            <Card className='overflow-hidden'>
                <CommonCardHeader title={ResponsiveLightBackgroundTitle} subTitle={responsiveTablesSubTitle} />
                <Row className="card-block">
                    <Col sm={12} lg={12} xl={12}>
                        <div className="table-responsive">
                            <CommonTable color='light' headData={responsiveLightBackgroundHead} tableClass='table-light'>
                                {responsiveLightBackgroundBody.map((data) => (
                                    <tr key={data.id}>
                                        <th className={data.id === 3 ? "border-bottom-0" : ""} scope="row">{data.id}</th>
                                        <td className={data.id === 3 ? "border-bottom-0" : ""}>{data.task}</td>
                                        <td className={data.id === 3 ? "border-bottom-0" : ""}>{data.email}</td>
                                        <td className={data.id === 3 ? "border-bottom-0" : ""}>{data.phone}</td>
                                        <td className={data.id === 3 ? "border-bottom-0" : ""}>{data.assign}</td>
                                        <td className={data.id === 3 ? "border-bottom-0" : ""}>{data.date}</td>
                                        <td className={data.id === 3 ? "border-bottom-0" : ""}>{data.price}</td>
                                        <td className={`text-${data.color} ${data.id === 3 ? "border-bottom-0" : ""}`}>
                                            {data.status}
                                        </td>
                                        <td className={data.id === 3 ? "border-bottom-0" : ""}>{data.progress}</td>
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