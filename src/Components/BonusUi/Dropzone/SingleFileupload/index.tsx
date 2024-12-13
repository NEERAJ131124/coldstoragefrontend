import React from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import Dropzone from 'react-dropzone-uploader';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { SingleFileuploadTitle } from '../../../../Utils/Constants';
import { H6 } from '../../../../AbstractElements';

export default function SingleFileupload() {
    const getUploadParams = () => {
        return { url: 'https://httpbin.org/post' };
    }
    return (
        <Col lg={6} className='mb-lg-3'>
            <Card>
                <CommonCardHeader title={SingleFileuploadTitle} />
                <CardBody>
                    <Dropzone
                        getUploadParams={getUploadParams}
                        maxFiles={1}
                        inputContent={
                            <div className="dropzone-wrapper">
                                <div className='dz-message needsclick'>
                                    <i className="fa-solid fa-cloud-arrow-up" />
                                    <H6 className="f-w-600">{"Drop files here or click to upload."}</H6>
                                    <span className='note needsclick'>
                                        {'(This is just a demo dropzone. Selected files are '}<strong>{'not'}</strong>{' actually uploaded.)'}
                                    </span>
                                </div>
                            </div>
                        }
                    />
                </CardBody>
            </Card>
        </Col>
    )
}