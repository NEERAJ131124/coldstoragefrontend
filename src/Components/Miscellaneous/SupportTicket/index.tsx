import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader'
import { SupportTicketList, SupportTicketTitle } from '../../../Utils/Constants'
import { supportTicketSubTitle } from '../../../Data/Miscellaneous/SupportTicket'
import TicketList from './TicketList'
import TicketTable from './TicketTable'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'

export default function SupportTicketContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={SupportTicketTitle} parent={SupportTicketTitle} title={SupportTicketTitle} />
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <CommonCardHeader title={SupportTicketList} subTitle={supportTicketSubTitle} />
                            <CardBody>
                                <TicketList />
                                <TicketTable />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}