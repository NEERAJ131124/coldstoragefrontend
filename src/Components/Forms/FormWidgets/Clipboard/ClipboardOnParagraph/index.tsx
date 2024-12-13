import React from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { ClipboardOnParagraphTitle, Copy } from '../../../../../Utils/Constants';
import { Btn, H6, P } from '../../../../../AbstractElements';

export default function ClipboardOnParagraph() {
    const clipboardParagraphText2: string = "On that day, hopes and dreams were crushed. Even though it should have been anticipated, it nonetheless surprised me. The warning indicators have been disregarded in favour of the slim chance that it would actually occur. From a hopeful prospect, it had evolved into an unquestionable conviction that it must be fate. That was up until it wasn't, at which point all of the aspirations and dreams collapsed.";
    return (
        <Col sm={12} md={6}>
            <Card>
                <CommonCardHeader title={ClipboardOnParagraphTitle} />
                <CardBody>
                    <div className="clipboaard-container">
                        <P className="card-description mb-2">{'Copy from paragraph'}</P>
                        <CopyToClipboard text={clipboardParagraphText2} onCopy={() => toast.info("text successfully copied")}>
                            <H6 className="border rounded f-w-400">
                                <CardBody>{clipboardParagraphText2}</CardBody>
                            </H6>
                        </CopyToClipboard>
                        <div className="mt-3 text-end">
                            <CopyToClipboard text={clipboardParagraphText2} onCopy={() => toast.info("text successfully copied")}>
                                <Btn className="btn-clipboard text-light" color="info">
                                    <i className="fa-solid fa-copy" /> {Copy}
                                </Btn>
                            </CopyToClipboard>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}