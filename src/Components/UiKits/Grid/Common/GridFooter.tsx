import React from 'react'
import { GridFooterProps } from '../../../../Types/UiKits.type'
import { CardFooter, Table } from 'reactstrap'

export default function GridFooter({ code, value }: GridFooterProps) {
    return (
        <CardFooter>
            <div className="table-responsive">
                <Table className="w-100" borderless>
                    <tbody>
                        <tr>
                            <th> {'Class'}</th>
                            <th>{'Value of the class'}</th>
                        </tr>
                        <tr>
                            <td><code>{code}</code></td>
                            <td>{value}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </CardFooter>
    )
}
