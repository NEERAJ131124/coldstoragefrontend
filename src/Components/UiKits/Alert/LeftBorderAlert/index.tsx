import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { LeftBorderAlertTitle } from '../../../../Utils/Constants';
import { leftBorderAlertSubTitle } from '../../../../Data/UiKits/Alert';
import { Alerts, P } from '../../../../AbstractElements';

export default function LeftBorderAlert() {
    const [active, setActive] = useState(true);
    const onDismiss = () => setActive(false)

    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={LeftBorderAlertTitle} subTitle={leftBorderAlertSubTitle} />
                <CardBody className='live-dark'>
                    <Alerts color='light-dark' isOpen={active} toggle={onDismiss} className='light text-dark border-left-wrapper mb-0'>
                        <i className="fa-solid fa-circle-info" />
                        <P className="mb-0">{'You can check in on some of those fields below.'}</P>
                    </Alerts>
                </CardBody>
            </Card>
        </Col>
    )
}
