import React, { useState } from 'react'
import { Col, Label } from 'reactstrap';
import ReactQuill from 'react-quill';
import { ToolbarBoxProp } from '../../../../../../Types/ECommerce.type';
import { P } from '../../../../../../AbstractElements';

export default function ToolbarBox({ label, paragraph }: ToolbarBoxProp) {
    const [value, setValue] = useState('Enter your messages...');

    return (
        <Col xs={12}>
            {label && <Col xs={12}><Label>{'Additional Description'}</Label></Col>}
            <div className="toolbar-box">
                <ReactQuill value={value} onChange={setValue} />
            </div>
            <P>{paragraph}</P>
        </Col>
    )
}