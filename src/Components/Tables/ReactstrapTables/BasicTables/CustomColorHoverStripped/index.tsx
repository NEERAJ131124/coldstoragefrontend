import React from 'react'
import { Card, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { CustomColorHoverStrippedTitle } from '../../../../../Utils/Constants'
import { customColorHoverStrippedBody, customColorHoverStrippedHead, customTableSubTitle } from '../../../../../Data/Tables/ReactstrapTables/BasicTables'
import CommonTable from '../Common/CommonTable'

export default function CustomColorHoverStripped() {
    return (
        <Col sm={12}>
            <Card className='overflow-hidden'>
                <CommonCardHeader title={CustomColorHoverStrippedTitle} subTitle={customTableSubTitle} />
                <div className="table-responsive">
                    <CommonTable strip={true} hover={true} headingClass='bg-primary' tableClass='bg-primary' headClass='tbl-strip-thad-bdr' headData={customColorHoverStrippedHead}>
                        {customColorHoverStrippedBody.map((data) => (
                            <tr key={data.id}>
                                <th className={data.class} scope="row">{data.id}</th>
                                <td className={data.class}>{data.title}</td>
                                <td className={data.class}>{data.year}</td>
                                <td className={data.class}>{data.studio}</td>
                                <td className={data.class}>{data.budget}</td>
                                <td className={data.class}>{data.boxOffice}</td>
                            </tr>
                        ))}
                    </CommonTable>
                </div>
            </Card>
        </Col>
    )
}