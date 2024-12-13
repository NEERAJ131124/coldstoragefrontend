import React from 'react'
import { Col, Input, Label, Row } from 'reactstrap'
import { FilterComponentProps } from '../../../../Types/Miscellaneous.type'

export default function FilterComponent({ onFilter, filterText }: FilterComponentProps) {
    return (
        <Row className="align-items-center justify-content-end">
            <Col xs="auto"><Label>{'Search'}:</Label></Col>
            <Col xs="auto" className='d-flex flex-row'>
                <Input type="text" value={filterText} onChange={onFilter} />
            </Col>
        </Row>
    )
}