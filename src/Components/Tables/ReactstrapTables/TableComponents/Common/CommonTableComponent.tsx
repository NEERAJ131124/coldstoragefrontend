import React from 'react'
import { Card, Col, Row, Table } from 'reactstrap';
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { CommonTableComponentProps } from '../../../../../Types/Tables.type';

export default function CommonTableComponent({ title, data, tableClass, rowClass }: CommonTableComponentProps) {
    return (
        <Col sm={12}>
            <Card className='overflow-hidden'>
                <CommonCardHeader headClass='card-no-border' title={title} />
                <div>
                    <Row className={`card-block ${rowClass ? rowClass : ''}`}>
                        <Col sm={12} lg={12} xl={12}>
                            <div className="table-responsive custom-scroll">
                                <Table className={tableClass ? tableClass : ''} bordered>
                                    <tbody>
                                        {data.map((component, index) => (
                                            <tr key={index}>
                                                <td className={component.tdClassName}>{component.tittle}</td>
                                                <td className='w-50'>
                                                    {component.tableColData}
                                                </td>
                                                <td>
                                                    {component.details.map((detail, i) => (
                                                        <span key={i}>{detail.text}
                                                            {detail.code && <code> {detail.code} </code>}
                                                        </span>
                                                    ))}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Card>
        </Col>
    );
}