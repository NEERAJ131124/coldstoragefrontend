import React from 'react'
import { Col, Input, Row } from 'reactstrap'
import Tooltip from '../Common/Tooltip'
import { DimensionsLabel } from '../../../../../../Utils/Constants'
import { ShippingDimensionsProps } from '../../../../../../Types/ECommerce.type'

export default function ShippingDimensions({ updateFormData, length, width, height }: ShippingDimensionsProps) {
    return (
        <Col xs={12}>
            <Row className="gx-xl-3 gx-md-2 gy-md-0 g-2">
                <Col xs={12}>
                    <Tooltip labelText={DimensionsLabel} tooltip={"set proper length/width and height for product items."} targetId='dimentions' />
                </Col>
                <Col md={4} sm={6}>
                    <Input type="number" name='length' value={length} onChange={updateFormData} placeholder="Length[l]" />
                </Col>
                <Col md={4} sm={6}>
                    <Input type="number" name='width' value={width} onChange={updateFormData} placeholder="Width[w]" />
                </Col>
                <Col md={4} sm={6}>
                    <Input type="number" name='height' value={height} onChange={updateFormData} placeholder="Height[h]" />
                </Col>
            </Row>
        </Col>
    )
}