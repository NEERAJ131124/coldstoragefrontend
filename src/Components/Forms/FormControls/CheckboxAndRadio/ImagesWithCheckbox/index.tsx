import React from 'react'
import { Card, CardBody, Col, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { ImagesCheckboxTitle } from '../../../../../Utils/Constants'
import { imageWithCheckboxData, imagesWithCheckBoxSubTitle } from '../../../../../Data/Forms/FormControls'
import { H6, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function ImagesWithCheckbox() {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader title={ImagesCheckboxTitle} subTitle={imagesWithCheckBoxSubTitle} />
                <CardBody>
                    <div className="main-img-checkbox">
                        <Row className="g-3">
                            {imageWithCheckboxData.map((data) => (
                                <Col xxl={3} sm={6} key={data.id}>
                                    <div className="card-wrapper border rounded-3 checkbox-checked">
                                        <H6 className="sub-title">{data.title}</H6>
                                        <div className="img-checkbox">
                                            <Input className="main-img-cover" id={`img-check-${data.id}`} type="checkbox" defaultChecked={data.check ? true : false} disabled={data.disabled ? true : false} />
                                            <Label className="mb-0" htmlFor={`img-check-${data.id}`} check>
                                                <Image src={dynamicImage(`switch/${data.image}`)} alt="images" />
                                            </Label>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}