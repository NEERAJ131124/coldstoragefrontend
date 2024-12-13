import React from 'react'
import { gridTableBodyData } from '../../../../Data/UiKits/Grid'

export default function GridTableBody() {
    return (
        <tbody>
            {gridTableBodyData.map((item) => (
                <tr key={item.id}>
                    <th className="text-nowrap" scope="row">{item.head}</th>
                    {item.data.map((list) => (
                        <td colSpan={list.span} key={list.id}>{list.text}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}
