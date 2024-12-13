import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap';
import { IconsBodyProps } from '../../../Types/Icons.type';
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader';
import { FontAwesomeTitle } from '../../../Utils/Constants';
import { H5 } from '../../../AbstractElements';
import { fontAwesomeData } from '../../../Data/Icons/FontAwesome';

export default function FontAwesomeBody({ parentCallback }: IconsBodyProps) {
    const getIconTag = (tag: string) => {
        parentCallback(tag);
    };
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={FontAwesomeTitle} titleClass='f-w-700' />
                <CardBody>
                    <Row className='icon-lists icon-event iconly-icons'>
                        {fontAwesomeData.map((icon, i) => (
                            <Col xxl={2} xs={12} lg={4} md={6} className='icons-item' key={i} onClick={() => getIconTag(icon)}>
                                <i className={icon}></i>
                                <H5 className="mt-0 me-2">{icon}</H5>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    );
}