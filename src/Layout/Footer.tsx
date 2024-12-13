import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { P } from '../AbstractElements'
import SvgIcon from '../Utils/CommonComponents/CommonSvgIcons'

export default function Footer() {
    return (
        <footer className="footer">
            <Container fluid>
                <Row>
                    <Col md={6} className="footer-copyright">
                        <P className="mb-0">{'Copyright 2024 © Admiro theme by pixelstrap.'}</P>
                    </Col>
                    <Col md={6}>
                        <P className="float-end mb-0">{'Hand crafted & made with '}
                            <SvgIcon className='svg-color footer-icon' iconId='heart' />
                        </P>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
