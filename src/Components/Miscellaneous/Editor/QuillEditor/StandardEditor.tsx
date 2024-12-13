import React, { useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import ReactQuill from 'react-quill';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { StandardEditorTitle } from '../../../../Utils/Constants'
import { standardQuillText } from '../../../../Data/Miscellaneous/Editor';

export default function StandardEditor() {
    const [value, setValue] = useState(standardQuillText);
    return (
        <Row>
            <Col sm={12}>
                <Card>
                    <CommonCardHeader title={StandardEditorTitle} />
                    <CardBody>
                        <ReactQuill value={value} onChange={setValue} />
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}