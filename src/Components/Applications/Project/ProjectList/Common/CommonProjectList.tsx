import React from 'react'
import { Col, Row } from 'reactstrap'
import { CommonProjectListProps } from '../../../../../Types/Project.type'
import { Badges, H5, Image, LI, P, ProgressBar, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function CommonProjectList({ item }: CommonProjectListProps) {
    return (
        <Col xxl={4} md={6}>
            <div className={`project-box font-dark bg-light-${item.badge === 'Done' ? 'success' : 'danger'}`}>
                <Badges color={item.badge === 'Done' ? 'success' : 'danger'}>{item.badge}</Badges>
                <H5 className={`f-w-500 mb-2 text-${item.badge === 'Done' ? 'success' : 'danger'}`}>{item.title}</H5>
                <div className="d-flex mb-2 align-items-center">
                    <Image className='img-20 me-1 rounded-circle' src={dynamicImage(`user/${item.image}`)} alt='' />
                    <P className="font-light">{item.sites}</P>
                </div>
                <P>{item.description}</P>
                <Row className='details'>
                    <Col xs={6}>
                        <span>{'Issues'} </span>
                    </Col>
                    <Col xs={6} className={`font-${item.badge === 'Done' ? 'success' : 'danger'}`}>
                        {item.issue}
                    </Col>
                    <Col xs={6}>
                        <span>{'Resolved'}</span>
                    </Col>
                    <Col xs={6} className={`font-${item.badge === 'Done' ? 'success' : 'danger'}`}>
                        {item.resolved}
                    </Col>
                    <Col xs={6}>
                        <span>{'Comment'}</span>
                    </Col>
                    <Col xs={6} className={`font-${item.badge === 'Done' ? 'success' : 'danger'}`}>
                        {item.comment}
                    </Col>
                </Row>
                <div className='customers'>
                    <UL className='simple-list flex-row'>
                        <LI className='d-inline-block' >
                            <Image className='img-30 rounded-circle' src={dynamicImage(`user/${item.customer1}`)} alt='' />
                        </LI>
                        <LI className='d-inline-block' >
                            <Image className='img-30 rounded-circle' src={dynamicImage(`user/${item.customer2}`)} alt='' />
                        </LI>
                        <LI className='d-inline-block' >
                            <Image className='img-30 rounded-circle' src={dynamicImage(`user/${item.customer3}`)} alt='' />
                        </LI>
                        <LI className='d-inline-block ms-2' >
                            <P className='f-12' >{`+${item.like} More`}</P>
                        </LI>
                    </UL>
                </div>
                <div className='project-status mt-4'>
                    <div className="d-flex align-items-center gap-1 mb-2">
                        <P className="mb-0">{item.progress}{'%'}</P>
                        <span>{'Done'}</span>
                    </div>
                    <ProgressBar style={{ height: "5px" }} className={`bg-light-${item.progress === '100' ? 'success' : 'danger'}`} color={item.progress === '100' ? 'success' : 'danger'} value={item.progress} striped animated />
                </div>
            </div>
        </Col>
    )
}