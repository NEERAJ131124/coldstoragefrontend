import React, { useCallback, useState } from 'react'
import { Card, CardBody, Col, Row, TabContent, TabPane } from 'reactstrap';
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { ShippingFormTitle } from '../../../../../Utils/Constants';
import { shippingFormSubTitle } from '../../../../../Data/Forms/FormLayout';
import ShippingFormNav from './ShippingFormNav';
import BillingForm from './BillingForm';
import ShippingFormContent from './ShippingFormContent';
import PaymentForm from './PaymentForm';
import FinishForm from './FinishForm';
import CurrentCart from './CurrentCart';

export default function ShippingForm() {
    const [steps, setSteps] = useState(1);
    const activeCallBack = useCallback((tab: number) => {
        setSteps(tab);
    }, []);
    return (
        <Col md={12}>
            <Card>
                <CommonCardHeader title={ShippingFormTitle} subTitle={shippingFormSubTitle} />
                <CardBody>
                    <Row className="shopping-wizard">
                        <Col xs={12}>
                            <Row className="shipping-form g-5">
                                <Col xl={8} className="shipping-border">
                                    <Row>
                                        <ShippingFormNav activeCallBack={activeCallBack} steps={steps} />
                                        <Col xs={12}>
                                            <TabContent className="dark-field shipping-content" activeTab={steps}>
                                                <TabPane tabId={1}>
                                                    <BillingForm activeCallBack={activeCallBack} />
                                                </TabPane>
                                                <TabPane tabId={2} className="shipping-wizard">
                                                    <ShippingFormContent activeCallBack={activeCallBack} />
                                                </TabPane>
                                                <TabPane tabId={3} className='shipping-wizard'>
                                                    <PaymentForm activeCallBack={activeCallBack} />
                                                </TabPane>
                                                <TabPane tabId={4} className="shipping-wizard finish-wizard1">
                                                    <FinishForm />
                                                </TabPane>
                                            </TabContent>
                                        </Col>
                                    </Row>
                                </Col>
                                <CurrentCart />
                            </Row>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}