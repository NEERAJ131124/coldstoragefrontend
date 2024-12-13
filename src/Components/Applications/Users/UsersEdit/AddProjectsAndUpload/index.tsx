import React from 'react'
import { Card, Col, Table } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { AddProjectsAndUploadTitle, Href } from '../../../../../Utils/Constants'
import TableHead from '../../../../../Utils/CommonComponents/TableHead'
import { addProjectTable, addProjectsUploadHead } from '../../../../../Data/Applications/Users'
import { Btn } from '../../../../../AbstractElements'

export default function AddProjectsAndUpload() {
    return (
        <Col md={12}>
            <Card>
                <CommonCardHeader title={AddProjectsAndUploadTitle} titleClass='card-title' />
                <div className="table-responsive theme-scrollbar add-project">
                    <Table className="card-table table-vcenter text-nowrap">
                        <TableHead headeData={addProjectsUploadHead} />
                        <tbody>
                            {addProjectTable.map((item, i) => (
                                <tr key={i}>
                                    <td>
                                        <a className="text-inherit" href={Href} >{item.projectName}</a>
                                    </td>
                                    <td>{item.date}</td>
                                    <td><span className="status-icon">{item.status}</span></td>
                                    <td>{item.price}</td>
                                    <td className="text-end">
                                        <a className="icon" href={Href} ><Btn color='primary' size='sm'><i className="fa-solid fa-pencil me-1"></i>{'Edit'}</Btn></a>
                                        <a className="icon" href={Href} ><Btn color='transparent' size='sm'><i className="fa-solid fa-link me-1"></i>{'Update'}</Btn></a>
                                        <a className="icon" href={Href} ><Btn color='danger' size='sm'><i className="fa-solid fa-trash me-1"></i>{'Delete'}</Btn></a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Card>
        </Col>
    )
}