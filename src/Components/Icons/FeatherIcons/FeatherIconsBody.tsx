import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap';
import { GetIconTagType } from '../../../Types/Icons.type';
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader';
import { FeatherTitle } from '../../../Utils/Constants';
import { H5 } from '../../../AbstractElements';
import { featherIconsData } from '../../../Data/Icons/FeatherIcons';

export default function FeatherIconsBody({ getIconTag }: GetIconTagType) {
    const featherIcons = require('feather-icons');
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={FeatherTitle} titleClass='f-w-700' />
                <CardBody>
                    <Row className='icon-event feather-icons icon-lists'>
                        {featherIconsData.map((icon, i) => (
                            <Col xs={12} xxl={2} lg={4} md={6} className='icons-item' key={i} onClick={() => getIconTag(icon)}>
                                <div dangerouslySetInnerHTML={{ __html: featherIcons.icons[icon].toSvg(icon) }} />
                                <H5 className='mt-0'>{icon}</H5>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}