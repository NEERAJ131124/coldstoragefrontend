import React from 'react'
import { Card, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { InverseTablePrimaryTitle } from '../../../../../Utils/Constants'
import CommonTable from '../Common/CommonTable'
import { inversePrimaryBody, inversePrimaryHeader, inverseTablePrimarySubTitle } from '../../../../../Data/Tables/ReactstrapTables/BasicTables'

export default function InverseTablePrimary() {
    return (
        <Col sm={12}>
            <Card className='overflow-hidden'>
                <CommonCardHeader title={InverseTablePrimaryTitle} subTitle={inverseTablePrimarySubTitle} />
                <div className="table-responsive">
                    <CommonTable strip={true} headingClass='bg-primary' headData={inversePrimaryHeader} tableClass='bg-primary' headClass='tbl-strip-thad-bdr' >
                        {inversePrimaryBody.map((data) => (
                            <tr key={data.id}>
                                <th className={data.class} scope="row">{data.id}</th>
                                <td className={data.class}>{data.firstName}</td>
                                <td className={data.class}>{data.lastName}</td>
                                <td className={data.class}>{data.company}</td>
                                <td className={data.class}>{data.salary}</td>
                                <td className={data.class}>{data.email}</td>
                                <td className={data.class}>{data.position}</td>
                                <td className={data.class}>{data.country}</td>
                            </tr>
                        ))}
                    </CommonTable>
                </div>
            </Card>
        </Col>
    )
}