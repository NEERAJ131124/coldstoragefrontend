import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { captionSubTitle, captionTableBody, captionTableHeader } from '../../../../../Data/Tables/ReactstrapTables/BasicTables'
import { CaptionTitle, UserList } from '../../../../../Utils/Constants'
import CommonTable from '../Common/CommonTable'

export default function CaptionTable() {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={CaptionTitle} subTitle={captionSubTitle} />
                <Row className="card-block">
                    <Col sm={12} lg={12} xl={12}>
                        <div className="table-responsive">
                            <CommonTable caption={UserList} headData={captionTableHeader}>
                                {captionTableBody.map((data) => (
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.employeeName}</td>
                                        <td>{data.email}</td>
                                        <td>{data.experience}</td>
                                        <td>{data.sex}</td>
                                        <td>{data.number}</td>
                                        <td>{data.age}</td>
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