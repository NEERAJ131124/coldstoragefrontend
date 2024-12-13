import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Btn, H2, H4 } from '../../../../../AbstractElements'
import { MaintenanceTitle } from '../../../../../Utils/Constants'
import { MaintenanceIcon } from '../../Common/CommonPageIcon'

export default function Maintenance() {
    return (
        <div className="page-wrapper">
            <div className="error-wrapper maintenance-bg">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <MaintenanceIcon />
                            <div className="maintenance-heading">
                                <H2 className="headline">{MaintenanceTitle}</H2>
                            </div>
                            <H4 className="sub-content">{'Our Site is Currently under maintenance We will be back Shortly'}<br />{'Thank You For Patience'}</H4>
                            <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                                <Btn color='primary'>{'BACK TO HOME PAGE'}</Btn>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}