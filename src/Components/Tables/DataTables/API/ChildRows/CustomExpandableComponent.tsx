import React from 'react'
import { CustomExpandableComponentProps } from '../../../../../Types/Tables.type'

export default function CustomExpandableComponent({ data }: CustomExpandableComponentProps) {
    return (
        <table cellPadding={5} cellSpacing={0} border={0} style={{ paddingLeft: 50 }}>
            <tbody>
                <tr>
                    <td>{'ID'}:</td>
                    <td>{data.id}</td>
                </tr>
                <tr>
                    <td>{'Full name'}:</td>
                    <td>{data.name}</td>
                </tr>
                <tr>
                    <td>{'Extra info'}:</td>
                    <td>{'And any further details here (images etc)...'}</td>
                </tr>
            </tbody>
        </table>
    )
}

