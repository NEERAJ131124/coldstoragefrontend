import React from 'react'
import { Card, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { BasicTableWithBorderTitle } from '../../../../../Utils/Constants'
import CommonTable from '../Common/CommonTable'
import { basicTableBody, basicTableHeader, basicTableWithBorderSubTitle } from '../../../../../Data/Tables/ReactstrapTables/BasicTables'
import { Badges, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function BasicTableWithBorder() {
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={BasicTableWithBorderTitle} subTitle={basicTableWithBorderSubTitle} />
                <div className="table-responsive">
                    <CommonTable headData={basicTableHeader} headRowClass='border-bottom-secondary border-top-0'>
                        {basicTableBody.map((data) => (
                            <tr className={`border-bottom-${data.color}`} key={data.id}>
                                <th scope="row">{data.id}</th>
                                <td> <Image className="img-30 me-2" src={dynamicImage(`avtar/${data.image}`)} alt="profile" />
                                    {data.firstname}
                                </td>
                                <td>{data.lastName}</td>
                                <td>{data.userName}</td>
                                <td>{data.designation}</td>
                                <td>{data.company}</td>
                                <td> <Badges color={`light-${data.badgeColor}`}>{data.language}</Badges></td>
                                <td>{data.country}</td>
                            </tr>
                        ))}
                    </CommonTable>
                </div>
            </Card>
        </Col>
    )
}