import React from 'react'
import { Card, Col } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import CommonTable from '../Common/CommonTable'
import { HoverableRowsTitle } from '../../../../../Utils/Constants'
import { hoverableRowsBody, hoverableRowsHeader, hoverableRowsSubTitle } from '../../../../../Data/Tables/ReactstrapTables/BasicTables'

export default function HoverableRows() {
    return (
        <Col sm={12}>
            <Card className='overflow-hidden'>
                <CommonCardHeader title={HoverableRowsTitle} subTitle={hoverableRowsSubTitle} />
                <div className="table-responsive signal-table">
                    <CommonTable headData={hoverableRowsHeader} hover={true} >
                        {hoverableRowsBody.map((data) => (
                            <tr key={data.id}>
                                <th className={data.id === 5 ? "border-bottom-0" : ""} scope="row">{data.id}</th>
                                <td className={`d-flex align-items-center ${data.id === 5 ? "border-bottom-0" : ""}`}>
                                    <div className={`bg-light-${data.color} text-${data.color} me-3`}>{data.icon}</div>
                                    <span className={`text-${data.color}`}>{data.status}</span>
                                </td>
                                <td className={data.id === 5 ? "border-bottom-0" : ""}>{data.signalName}</td>
                                <td className={data.id === 5 ? "border-bottom-0" : ""}>{data.security}</td>
                                <td className={data.id === 5 ? "border-bottom-0" : ""}>{data.stage}</td>
                                <td className={data.id === 5 ? "border-bottom-0" : ""}>{data.schedule}</td>
                                <td className={data.id === 5 ? "border-bottom-0" : ""}>{data.teamLead}</td>
                            </tr>
                        ))}
                    </CommonTable>
                </div>
            </Card>
        </Col>
    )
}