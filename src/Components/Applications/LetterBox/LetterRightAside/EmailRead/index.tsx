import React, { useRef } from 'react'
import { Card } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import UserMail from './UserMail';
import { RootState } from '../../../../../ReduxToolkit/Store';
import MailBody1 from './MailBody1';

export default function EmailRead() {
    const { interviewEmail } = useSelector((state: RootState) => state.email);
    const componentRef = useRef<HTMLDivElement>(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <Card className={`email-body email-read ${interviewEmail ? "show" : "hide"}`}>
            <MailBody1 />
            <div className="mail-body-wrapper" ref={componentRef}>
                <UserMail handlePrint={handlePrint} />
            </div>
        </Card>
    )
}