import React from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import Dropzone from 'react-dropzone-uploader';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { MultiFileUploadTitle } from '../../../../Utils/Constants';
import { H6 } from '../../../../AbstractElements';

export default function MultiFileUpload() {
    const getUploadParams = () => {
        return { url: 'https://httpbin.org/post' };
    };

    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader title={MultiFileUploadTitle} />
                <CardBody>
                    <Dropzone
                        getUploadParams={getUploadParams}
                        inputContent={
                            <div className='dz-message needsclick'>
                                <i className="fa-solid fa-cloud-arrow-up" />
                                <H6>{"Drop files here or click to upload."}</H6>
                                <span className='note needsclick'>
                                    {'(This is just a demo dropzone. Selected files are '}<strong>{'not'}</strong>{' actually uploaded.)'}
                                </span>
                            </div>
                        }
                    />
                </CardBody>
            </Card>
        </Col>
    )
}