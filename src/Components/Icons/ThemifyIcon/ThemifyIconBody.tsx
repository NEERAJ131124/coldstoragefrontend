import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap';
import { ThemifyIconBodyProps } from '../../../Types/Icons.type';
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader';
import { IconsTitle } from '../../../Utils/Constants';
import { H5 } from '../../../AbstractElements';

export default function ThemifyIconBody({ title, iconType, parentCallback }: ThemifyIconBodyProps) {
    const getIconTag = (tag: string) => {
        parentCallback(tag);
    };
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={`${title} ${IconsTitle}`} titleClass='f-w-700' />
                <CardBody>
                    <Row className='icon-lists'>
                        {iconType.map((icon, i) => (
                            <Col xs={12} xxl={2} md={6} lg={4} className='icons-item' key={i} onClick={() => getIconTag(icon)}>
                                <i className={icon} />
                                <H5 className="mt-0">{icon}</H5>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}