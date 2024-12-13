import React from 'react'
import { Card, CardBody, Col, Container, Form, Row } from 'reactstrap'
import Dropzone from 'react-dropzone-uploader'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { AddPostTitle, BlogTitle, Discard, Post, PostEditTitle } from '../../../../Utils/Constants'
import PostEditForm from './PostEditForm'
import { Btn, H6 } from '../../../../AbstractElements'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'

export default function AddPostContainer() {
    const getUploadParams = () => {
        return { url: 'https://httpbin.org/post' };
    };
    return (
        <>
            <Breadcrumbs pageTitle={AddPostTitle} parent={BlogTitle} title={AddPostTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CommonCardHeader title={PostEditTitle} />
                            <CardBody className='add-post'>
                                <PostEditForm />
                                <Form>
                                    <Dropzone
                                        getUploadParams={getUploadParams}
                                        multiple={true}
                                        inputContent={
                                            <div className="m-0 dz-message needsclick">
                                                <i className="icon-cloud-up" />
                                                <H6 className="mb-0">{'Drop files here or click to upload.'}</H6>
                                            </div>}
                                    />
                                </Form>
                                <div className="btn-showcase text-end blog-btn">
                                    <Btn color='primary'>{Post}</Btn>
                                    <Btn color='transparent' className='bg-light font-dark'>{Discard}</Btn>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}