import React from 'react'
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BreadcrumbsProps } from '../../Types/CommonElements.type'
import H2 from '../Headings/H2Element';
import P from '../Paragraph';

export default function Breadcrumbs(props: BreadcrumbsProps) {
    const { parent = '', title = '', pageTitle = '', paragraph = '' } = props;
    return (
        <Container fluid>
            <div className="page-title">
                <Row>
                    <Col sm={6} xs={12}>
                        <H2>{pageTitle}</H2>
                        {paragraph && <P className="mb-0 text-title-gray">{paragraph}</P>}
                    </Col>
                    <Col sm={6} xs={12}>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                                    <i className="iconly-Home icli svg-color" />
                                </Link>
                            </BreadcrumbItem>
                            {parent !== '' && <BreadcrumbItem>{parent}</BreadcrumbItem>}
                            <BreadcrumbItem active>{title}</BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};
