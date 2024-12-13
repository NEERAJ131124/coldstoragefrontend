import React, { useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap';
import ReactQuill from 'react-quill';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { BubbleThemeTitle } from '../../../../Utils/Constants';
import { bubbleThemeContent } from '../../../../Data/Miscellaneous/Editor';

export default function BubbleTheme() {
    const [value, setValue] = useState(bubbleThemeContent);

    return (
        <Row>
            <Col sm={12}>
                <Card>
                    <CommonCardHeader title={BubbleThemeTitle} />
                    <CardBody>
                        <ReactQuill theme='bubble' value={value} onChange={setValue} />
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}