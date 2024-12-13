import React, { useState } from 'react'
import { Card, CardBody, Col, Input } from 'reactstrap';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { ClipboardOnTextAreaTitle, Copy, Cut } from '../../../../../Utils/Constants';
import { Btn, P } from '../../../../../AbstractElements';

export default function ClipboardOnTextArea() {
    const clipboardOnTextAreaText: string = "A web designer must always enhance their work since creating websites is a creative effort. Therefore, a web designer must be more imaginative to produce exceptional results. Blogs about web design assist web designers in learning about new technologies, offer lessons, news, direction for a freebie, and much more. These blogs allow web designers to stay creative and improve their abilities. Therefore, advice from web design blogs is required to improve your business."
    const [clipBoardOnTextAreaValue, setClipBoardOnTextAreaValue] = useState(clipboardOnTextAreaText);
    return (
        <Col sm={12} md={6}>
            <Card>
                <CommonCardHeader title={ClipboardOnTextAreaTitle} />
                <CardBody>
                    <div className="clipboaard-container">
                        <P className="card-description mb-2">{"Cut/copy from textarea"}</P>
                        <Input type="textarea" onChange={(event) => setClipBoardOnTextAreaValue(event.target.value)} className="f-14" rows={3} value={clipBoardOnTextAreaValue} />
                        <div className="mt-3 text-end">
                            <CopyToClipboard text={clipBoardOnTextAreaValue} onCopy={() => toast.info("text successfully copied")}>
                                <Btn className="btn-clipboard text-light me-2" color="warning">
                                    <i className="fa-solid fa-copy" /> {Copy}
                                </Btn>
                            </CopyToClipboard>
                            <CopyToClipboard text={clipBoardOnTextAreaValue} onCopy={() => { toast.info("text successfully cut"); setClipBoardOnTextAreaValue(""); }}>
                                <Btn className="btn-clipboard-cut" color="success">
                                    <i className="fa-solid fa-scissors" /> {Cut}
                                </Btn>
                            </CopyToClipboard>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
