import React, { useState } from 'react'
import { Card, CardBody, Col, Input } from 'reactstrap';
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from 'react-toastify';
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { ClipBoardOnTextInputTitle, Copy, Cut } from '../../../../../Utils/Constants';
import { Btn, P } from '../../../../../AbstractElements';

export default function ClipboardOnTextInput() {
    const [inputValue, setInputValue] = useState("");
    return (
        <Col sm={12} md={6}>
            <Card>
                <CommonCardHeader title={ClipBoardOnTextInputTitle} />
                <CardBody>
                    <div className="clipboaard-container">
                        <P className="card-description mb-2">{"Cut/copy from text input"}</P>
                        <Input type="text" placeholder="type some text to copy / cut" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                        <div className="mt-3 text-end">
                            <CopyToClipboard text={inputValue} onCopy={() => toast.info("text successfully copied")}>
                                <Btn className="btn-clipboard me-2" color="primary"><i className="fa-solid fa-copy" /> {Copy}</Btn>
                            </CopyToClipboard>
                            <CopyToClipboard text={inputValue} onCopy={() => toast.info("text successfully cut")}>
                                <Btn className="btn-clipboard-cut" color="secondary">
                                    <i className="fa-solid fa-scissors"></i> {Cut}
                                </Btn>
                            </CopyToClipboard>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
