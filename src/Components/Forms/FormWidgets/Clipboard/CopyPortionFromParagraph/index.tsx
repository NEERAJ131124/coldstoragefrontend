import React from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { CopyHighlightedText, CopyPortionParagraphTitle } from '../../../../../Utils/Constants';
import { Btn, H6, P } from '../../../../../AbstractElements';

export default function CopyPortionFromParagraph() {
    return (
        <Col sm={12} md={6}>
            <Card>
                <CommonCardHeader title={CopyPortionParagraphTitle} />
                <CardBody>
                    <div className="clipboaard-container">
                        <P className="card-description mb-2">{'Copy portion from paragraph'}</P>
                        <H6 className="border rounded f-w-300">
                            <CardBody>
                                <span className="bg-primary text-white p-1">{"Web design is the process of creating websites "}</span>
                                {" that are visible online. Take a website design course to learn how to  create an appealing and responsive website. In the discipline of web design, there are degree, diploma, postgraduate degree, and certificate programmes. A web designer is responsible for a website's look, feel, and occasionally even content."}
                            </CardBody>
                        </H6>
                        <div className="mt-3 text-end">
                            <CopyToClipboard text={'Web design is the process of creating websites '} onCopy={() => toast.info("text successfully copied")}>
                                <Btn className="btn-clipboard text-ligth" color="secondary"><i className="fa-solid fa-copy" /> {CopyHighlightedText}</Btn>
                            </CopyToClipboard>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
