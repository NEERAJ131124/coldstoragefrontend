import React from 'react'
import { Card, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { InverseTableTitle } from '../../../../../Utils/Constants'
import { inverseTableBody, inverseTableHeader, inverseTableSubTitle } from '../../../../../Data/Tables/ReactstrapTables/BasicTables'
import CommonTable from '../Common/CommonTable'

export default function InverseTable() {
    return (
        <Col sm={12}>
            <Card className='overflow-hidden'>
                <CommonCardHeader title={InverseTableTitle} subTitle={inverseTableSubTitle} />
                <div className="table-responsive">
                    <CommonTable tableClass='table-inverse' headData={inverseTableHeader}>
                        {inverseTableBody.map((data) => (
                            <tr key={data.id}>
                                <th scope="row">{data.id}</th>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.office}</td>
                                <td>{data.position}</td>
                                <td>{data.salary}</td>
                                <td>{data.joinDate}</td>
                                <td>{data.age}</td>
                            </tr>
                        ))}
                    </CommonTable>
                </div>
            </Card>
        </Col>
    )
}