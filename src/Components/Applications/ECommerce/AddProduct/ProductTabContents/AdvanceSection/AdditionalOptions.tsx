import React, { ChangeEvent, useState } from 'react'
import { Col, Form, Input, Label, Row } from 'reactstrap';
import { toast } from 'react-toastify';
import { ActiveBorderProp } from '../../../../../../Types/ECommerce.type';
import { Btn, P } from '../../../../../../AbstractElements';
import { AdditionalTagTitle, SpecificTags } from '../../../../../../Utils/Constants';
import ToolbarBox from '../Common/ToolbarBox';
import ProductTag from '../Common/ProductTag';
import DashboardSvgIcon from '../../../../../../Utils/CommonComponents/DashboardSvgIcon';

export default function AdditionalOptions({ activeBorder }: ActiveBorderProp) {
    const [formData, setFormData] = useState({ additionalTag: "" })
    const { additionalTag } = formData;
    const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = name === "allowBackorders" ? event.target.checked : event.target.value;
        setFormData({ ...formData, [name]: value });
    };
    const handleNextButton = () => {
        if (additionalTag !== "") {
            activeBorder(3);
        } else { return toast.error("Please fill out details before moving on to the next step"); }
    };
    return (
        <div className="meta-body">
            <Form>
                <Row className="g-3">
                    <Col xs={12}>
                        <Row className="g-3">
                            <Col sm={6}>
                                <Row className="custom-input">
                                    <Col xs={12}><Label>{AdditionalTagTitle}</Label></Col>
                                    <Col xs={12}>
                                        <Input type="text" name='additionalTag' value={additionalTag} onChange={updateFormData} />
                                        <P>{"Add a new tag title. Keywords should be simple and accurate."}</P>
                                    </Col>
                                </Row>
                            </Col>
                            <ProductTag title={SpecificTags} />
                            <Col xs={12}>
                                <Row>
                                    <ToolbarBox label={true} paragraph={"Enhance your SEO ranking with an added tag description for the product."} />
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="product-buttons">
                    <Btn color='transparent' className='me-1' onClick={() => activeBorder(1)}>
                        <div className="d-flex align-items-center gap-sm-2 gap-1">
                            <DashboardSvgIcon iconId='back-arrow' /> {'Previous'}
                        </div>
                    </Btn>
                    <Btn color='transparent' onClick={handleNextButton}>
                        <div className="d-flex align-items-center gap-sm-2 gap-1">
                            <DashboardSvgIcon iconId='front-arrow' /> {'Next'}
                        </div>
                    </Btn>
                </div>
            </Form>
        </div>
    )
}