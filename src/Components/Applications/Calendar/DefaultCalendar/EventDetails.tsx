import React from 'react'
import { Table } from 'reactstrap';
import { EventDetailsProps } from '../../../../Types/Calendar.type';

export default function EventDetails({ eventClick }: EventDetailsProps) {
    const formattedStartDate = eventClick.event.start ? eventClick.event.start.toLocaleString() : 'No start time available';
    return (
        <div className="table-responsive">
            <Table>
                <tbody>
                    <tr>
                        <td>{'Title'}</td>
                        <td>
                            <strong>{eventClick.event.title}</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>{'Start Time'}</td>
                        <td>
                            <strong>{formattedStartDate}</strong>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

