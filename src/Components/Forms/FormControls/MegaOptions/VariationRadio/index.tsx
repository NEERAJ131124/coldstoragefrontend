import React from 'react'
import { Card, CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { VariationRadioTitle } from '../../../../../Utils/Constants'
import { variationRadioData, variationRadioSubTitle } from '../../../../../Data/Forms/FormControls'
import { H6, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'

export default function VariationRadio() {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader title={VariationRadioTitle} subTitle={variationRadioSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        {variationRadioData.map((data) => (
                            <Col xl={4} className={data.id !== 3 ? 'col-md-6' : ''} key={data.id}>
                                <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
                                    <H6 className="sub-title">{data.title}</H6>
                                    {data.child.map((item) => (
                                        <div className="payment-wrapper" key={item.id}>
                                            <div className="payment-first">
                                                <FormGroup className="radio radio-primary" check>
                                                    <Input id={`ptm${item.id}`} type="radio" name={item.name} value="option1" defaultChecked={item.check ? true : false} />
                                                    <Label className="mb-0" htmlFor={`ptm${item.id}`} check>{item.labelText}</Label>
                                                </FormGroup>
                                            </div>
                                            {(data.id === 1 || data.id === 3) && (
                                                <div className="payment-second">
                                                    {item.image && (<Image className="img-fluid" src={dynamicImage(`ecommerce/${item.image}`)} alt="ecommerce" />)}
                                                    {item.icon && (item.icon)}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}