import React from 'react'
import { Card, CardBody, Col, Form } from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { MultipleSectionsHeadersTitle } from '../../../../Utils/Constants';
import { multipleSelectionSubTitle } from '../../../../Data/Forms/FormWidgets/Typeahead';
import { multipleWithHeadersData } from '../../../../Data/Forms/FormWidgets/Typeahead';

export default function MultipleSectionsWithHeaders() {

    return (
        <Col sm={12} md={6}>
            <Card>
                <CommonCardHeader title={MultipleSectionsHeadersTitle} subTitle={multipleSelectionSubTitle} />
                <CardBody>
                    <div id="multiple-datasets">
                        <Form className="theme-form">
                            <div className="w-100">
                                <Typeahead id="multiple-typeahead" labelKey={"name"} multiple options={multipleWithHeadersData} placeholder="Choose a state..." className="shadow-none" />
                            </div>
                        </Form>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}