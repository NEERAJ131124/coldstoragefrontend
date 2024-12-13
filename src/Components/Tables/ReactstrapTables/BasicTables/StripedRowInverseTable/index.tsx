import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { StripedRowInverseTableTitle } from '../../../../../Utils/Constants'
import { stripedRowInverseBody, stripedRowInverseHead, stripedRowWithInverseTableSubTitle } from '../../../../../Data/Tables/ReactstrapTables/BasicTables'
import CommonTable from '../Common/CommonTable'

export default function StripedRowInverseTable() {
    return (
        <Col sm={6}>
            <Card className='overflow-hidden'>
                <CommonCardHeader title={StripedRowInverseTableTitle} subTitle={stripedRowWithInverseTableSubTitle} />
                <Row className="card-block">
                    <Col sm={12} lg={12} xl={12}>
                        <div className="table-responsive">
                            <CommonTable strip={true} tableClass='table-inverse' headData={stripedRowInverseHead}>
                                {stripedRowInverseBody.map((data) => (
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.dessert}</td>
                                        <td>{data.calories}</td>
                                        <td>{data.fat}</td>
                                        <td>{data.price}</td>
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
