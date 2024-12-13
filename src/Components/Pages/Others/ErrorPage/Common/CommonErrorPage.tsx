import React from 'react'
import { Col, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import { H3, P } from '../../../../../AbstractElements'
import { CommonErrorPageProps } from '../../../../../Types/Others.type'

export default function CommonErrorPage({ errorIcon, title }: CommonErrorPageProps) {
    return (
        <div className="page-wrapper compact-wrapper" id="pageWrapper">
            <div className="error-wrapper">
                <Container>
                    <div className="svg-wrraper">
                        {errorIcon}
                    </div>
                    <Col md={8} className="offset-md-2">
                        <H3>{title}</H3>
                        <P className="sub-content">{'The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.'}</P>
                        <Link to={`${process.env.PUBLIC_URL}/dashboard/default`} className='btn btn-primary'>{'BACK TO HOME PAGE'}</Link>
                    </Col>
                </Container>
            </div>
        </div>
    )
}