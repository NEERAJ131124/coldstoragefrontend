import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import { Printer } from 'react-feather';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { EmptyTaskProp } from '../../../../../../Types/Tasks.type';
import { H3 } from '../../../../../../AbstractElements';
import { Href } from '../../../../../../Utils/Constants';
import NewTaskTable from './NewTaskTable';

export default function NewTask({ title }: EmptyTaskProp) {
    const componentRef = useRef<HTMLDivElement>(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <Card className="mb-0">
            <CardHeader className="d-flex card-no-border pb-0">
                <H3 className="mb-0">{title}</H3>
                <a href={Href} onClick={handlePrint}><Printer className='me-2' />{'Print'}</a>
            </CardHeader>
            <CardBody className="p-0" >
                <NewTaskTable componentRef={componentRef} />
            </CardBody>
        </Card>
    )
}