import React from 'react'
import { Table } from 'reactstrap'
import { jobCardTableData } from '../../../../Data/Dashboard/Default'
import { H6, Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function JobCardTable() {
    return (
        <div className="table-responsive theme-scrollbar">
            <Table className="display">
                <thead>
                    <tr>
                        <th>{'Time '}</th>
                        <th>{'Job '}</th>
                        <th>{'Company'}</th>
                        <th className="text-center">{'Employee'} </th>
                    </tr>
                </thead>
                <tbody>
                    {jobCardTableData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.time}</td>
                            <td>{item.job}</td>
                            <td>{item.company}</td>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="flex-shrink-0">
                                        <Image src={dynamicImage(`dashboard-1/user/${item.image}`)} alt="" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <H6>{item.employee}</H6>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}