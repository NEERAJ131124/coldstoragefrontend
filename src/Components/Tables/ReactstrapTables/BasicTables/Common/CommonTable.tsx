import React from 'react'
import { Table } from 'reactstrap'
import { CommonTableProps } from '../../../../../Types/Tables.type'

export default function CommonTable({ tableClass, strip, caption, size, hover, headingClass,color, headClass, headRowClass, headData, children }: CommonTableProps) {
    return (
        <Table className={tableClass} striped={strip} hover={hover} size={size} color={color}>
            {caption && <caption>{caption}</caption>}
            <thead className={headClass ? headClass : ''}>
                <tr className={headRowClass ? headRowClass : ''}>
                    {headData.map((head) => (
                        <th key={head.id} className={headingClass ? headingClass : ''} scope="col">
                            {head.head}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </Table>
    )
}