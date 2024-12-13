import React, { useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import ReactQuill from 'react-quill'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { SnowThemeTitle } from '../../../../Utils/Constants'
import { snowThemeContent } from '../../../../Data/Miscellaneous/Editor'

export default function SnowTheme() {
    const [value, setValue] = useState(snowThemeContent);

    return (
        <Row>
            <Col sm={12}>
                <Card>
                    <CommonCardHeader title={SnowThemeTitle} />
                    <CardBody>
                        <ReactQuill theme='snow' value={value} onChange={setValue} />
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}