import React from 'react'
import { CollapseBodyProp } from '../../../../Types/UiKits.type'
import { Card, CardBody, Col, Collapse, Row } from 'reactstrap'

export default function CollapseBody({ collapseId }: CollapseBodyProp) {
    return (
        <Row className='d-flex'>
            <Col xl={6}>
                <Collapse isOpen={collapseId.collapse1} className='multi-collapse'>
                    <Card className='mt-3 mb-0'>
                        <CardBody className="collapse-wrapper accordion-light-primary">
                            {"The collapse JavaScript plugin is used to show and hide content.Buttons or anchors are used as triggers that are mapped to specific elements you toggle.Collapsing an element will animate the height from it's current value to 0. Given how CSS handles animations, you cannot use padding on a collapse element.Instead, use the class as an independent wrapping element."}
                        </CardBody>
                    </Card>
                </Collapse>
            </Col>
            <Col xl={6}>
                <Collapse isOpen={collapseId.collapse2} className='multi-collapse'>
                    <Card className='mt-3 mb-0'>
                        <CardBody className="collapse-wrapper accordion-light-warning">
                            {"This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.These classes control the overall appearance,  well as the showing and hiding via CSS transitions.You can modify any of this with custom CSS or overriding our default variables."}
                        </CardBody>
                    </Card>
                </Collapse>
            </Col>
        </Row>
    )
}
