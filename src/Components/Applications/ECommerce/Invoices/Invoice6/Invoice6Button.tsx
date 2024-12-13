import React from 'react'
import { Col } from 'reactstrap';
import { useReactToPrint } from 'react-to-print';
import { Btn } from '../../../../../AbstractElements';

export default function Invoice6Button({ componentRef }: { componentRef: React.RefObject<HTMLDivElement> }) {
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <Col sm={12} className="text-center mb-3">
            <Btn color='primary' className="me-2" onClick={handlePrint}>{'Print'}</Btn>
            <Btn color='secondary'>{'Cancel'}</Btn>
        </Col>
    )
}